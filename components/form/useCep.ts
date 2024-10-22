import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AddressProps, FormProps } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaForm } from "./schema";
import axios from "axios";
import { zipcodeMask } from "../functions/address-mask";

export const useCep = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      address: {
        name: "",
        zipCode: "",
        street: "",
        district: "",
        number: "",
        complement: "",
        city: "",
        state: "",
        mail: "",
        phone: "",
        password: "",
      },
    },
  });

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };

  const handleSetData = useCallback(
    (data: AddressProps) => {
      setValue("address.city", data.localidade);
      setValue("address.street", data.logradouro);
      setValue("address.state", data.uf);
      setValue("address.district", data.bairro);
      setValue("address.complement", data.complemento);
      setValue("address.number", data.numero);
    },
    [setValue]
  );

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );
      handleSetData(data);
    },
    [handleSetData]
  );

  const zipCode = watch("address.zipCode");

  useEffect(() => {
    setValue("address.zipCode", zipcodeMask(zipCode));

    if (zipCode.length !== 9) return;

    handleFetchAddress(zipCode);
  }, [handleFetchAddress, setValue, zipCode]);

  return {
    errors,
    register,
    handleFormSubmit,
    handleSubmit,
  };
};
