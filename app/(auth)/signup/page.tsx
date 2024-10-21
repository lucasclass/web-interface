export const metadata = {
  title: "Cadastre-se",
  description: "Page description",
};

export default function SignUp() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Cadastre-se gratuitamente e tenha acesso imediato ao nosso sistema
        </h1>
      </div>

      {/* Form */}
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
          <button className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
            Criar minha conta
          </button>
        </div>
      </form>

      {/* Bottom link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Ao se inscrever, você concorda com os{" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Termos de serviço
          </a>{" "}
          e a{" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Política de Privacidade
          </a>
          .
        </p>
      </div>
    </>
  );
}
