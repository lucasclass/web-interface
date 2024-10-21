import { get } from "react-hook-form";

export const useViaCepServices = () => {
  const getAddress = async (cep: string) => {
    const resp = await get("https://viacep.com.br/ws/${cep}/json/");

    console.log(resp);
  };
};
