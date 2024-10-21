"use client";
import { useForm } from "react-hook-form";

export default function form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form>
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
            required
          />
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
            required
            {...register("zipCode")}
            maxLength={9}
          />
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
            required
            {...register("street")}
          />
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
            required
            {...register("district")}
          />
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
            required
            {...register("complment")}
          />
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
            required
            {...register("city")}
          />
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
            required
            {...register("state")}
          />
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
            placeholder="corybarker@email.com"
            required
          />
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
            required
          />
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
            required
          />
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
