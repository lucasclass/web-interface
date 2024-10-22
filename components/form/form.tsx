"use client";
import { useCep } from "./useCep";

export default function Form() {
  const { errors, handleFormSubmit, handleSubmit, register } = useCep();

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="space-y-4">
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Nome Completo
          </label>
          <input
            id="name"
            className="form-input w-full py-2"
            type="text"
            placeholder="John Doe"
            {...register("address.name")}
          />
          {errors.address?.name?.message && (
            <p className="text-red-700">{errors.address?.name?.message}</p>
          )}
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            CEP
          </label>
          <input
            id="cep"
            className="form-input w-full py-2"
            type="text"
            placeholder="CEP"
            {...register("address.zipCode")}
            maxLength={9}
          />
          {errors.address?.zipCode?.message && (
            <p className="text-red-700">{errors.address?.zipCode?.message}</p>
          )}
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Rua
          </label>
          <input
            id="rua"
            className="form-input w-full py-2"
            type="text"
            placeholder="Rua"
            {...register("address.street")}
          />
          {errors.address?.street?.message && (
            <p className="text-red-700">{errors.address?.street?.message}</p>
          )}
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Bairro
          </label>
          <input
            id="bairro"
            className="form-input w-full py-2"
            type="text"
            placeholder="Bairro"
            {...register("address.district")}
          />
          {errors.address?.district?.message && (
            <p className="text-red-700">{errors.address?.district?.message}</p>
          )}
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Número
          </label>
          <input
            id="numero"
            className="form-input w-full py-2"
            type="text"
            placeholder="Número"
            {...register("address.number")}
            minLength={1}
          />
          {errors.address?.number?.message && (
            <p className="text-red-700">{errors.address?.number?.message}</p>
          )}
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Complemento
          </label>
          <input
            id="complemento"
            className="form-input w-full py-2"
            type="text"
            placeholder="Complemento"
            {...register("address.complement")}
          />
          {errors.address?.complement?.message && (
            <p className="text-red-700">
              {errors.address?.complement?.message}
            </p>
          )}
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Cidade
          </label>
          <input
            id="cidade"
            className="form-input w-full py-2"
            type="text"
            placeholder="Cidade"
            {...register("address.city")}
          />
          {errors.address?.city?.message && (
            <p className="text-red-700">{errors.address?.city?.message}</p>
          )}
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Estado
          </label>
          <input
            id="estado"
            className="form-input w-full py-2"
            type="text"
            placeholder="Estado"
            {...register("address.state")}
          />
          {errors.address?.state?.message && (
            <p className="text-red-700">{errors.address?.state?.message}</p>
          )}
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            className="form-input w-full py-2"
            type="email"
            placeholder="johndoe@email.com"
            {...register("address.mail")}
          />
          {errors.address?.mail?.message && (
            <p className="text-red-700">{errors.address?.mail?.message}</p>
          )}
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Celular
          </label>
          <input
            id="phone"
            className="form-input w-full py-2"
            type="text"
            placeholder="(+55) 21 99999 9999"
            {...register("address.phone")}
          />
          {errors.address?.phone?.message && (
            <p className="text-red-700">{errors.address?.phone?.message}</p>
          )}
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            id="password"
            className="form-input w-full py-2"
            type="password"
            autoComplete="on"
            placeholder="••••••••"
            {...register("address.password")}
          />
          {errors.address?.password?.message && (
            <p className="text-red-700">{errors.address?.password?.message}</p>
          )}
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <button
          type="submit"
          className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
        >
          Criar minha conta
        </button>
      </div>
    </form>
  );
}
