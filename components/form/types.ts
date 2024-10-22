import { z } from "zod";
import { schemaForm } from "./schema";

export type FormProps = z.infer<typeof schemaForm>;

export type AddressProps = {
  nome: string;
  cep: string;
  bairro: string;
  complemento: string;
  numero: string;
  uf: string;
  logradouro: string;
  localidade: string;
};
