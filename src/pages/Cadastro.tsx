import { Header } from "../components/Header";

export function Cadastro() {
  return (
    <>
      <Header />
      <div className="w-[100%] max-w-[80%] my-0 mx-auto mt-[120px] flex flex-row justify-between items-center">
        <h2 className="font-bold text-[32px] w-[320px] mb-5 leading-[44px]">
          A plataforma para você aprender com experts, dominar as principais
          tecnologias e entrar mais rápido nas empresas mais desejadas.
        </h2>
        <div className="max-w-[300px]">
          <p className="font-bold text-3xl mb-5 leading-[44px]">
            Comece agora grátis
          </p>
          <p className="text-lg mb-[35px] leading-[25px]">Crie sua conta e make the change._</p>
        </div>
      </div>
    </>
  );
}
