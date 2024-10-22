import { z } from "zod";

export const schemaForm = z
  .object({
    address: z.object({
      name: z.string().min(1, "Por favor informe um usuário"),
      zipCode: z.string().min(9, "Por favor informe um CEP válido"),
      street: z.string().min(3, "Por favor informe uma rua"),
      district: z.string().min(3, "Por favor informe um bairro"),
      complement: z.string().min(0, "Por favor informe um complemento"),
      number: z.string().min(1, "Por favor informe um número"),
      city: z.string().min(9, "Por favor informe uma cidade"),
      state: z.string().min(2, "Por favor informe um estado"),
      mail: z.string().min(9, "Por favor informe um email válido"),
      phone: z.string().min(9, "Por favor informe um telefone válido"),
      password: z.string().min(9, "Por favor informe uma senha"),
    }),
  })
  .transform((field) => ({
    address: {
      name: field.address.name,
      street: field.address.street,
      zipCode: field.address.zipCode,
      district: field.address.district,
      complement: field.address.complement,
      number: field.address.number,
      city: field.address.city,
      state: field.address.state,
      mail: field.address.mail,
      phone: field.address.phone,
      password: field.address.password,
    },
  }));
