import Form from "@/components/form/form";

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
      <Form />
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
