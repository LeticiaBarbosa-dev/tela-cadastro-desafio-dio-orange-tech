import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

interface FormDataProps {
  name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Email não é válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

export function Cadastro() {

  // const handleClickSignIn = () => {
  //   navigate("/login");
  // };

  const {
    control,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
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
          <p className="text-lg mb-[35px] leading-[25px]">
            Crie sua conta e make the change._
          </p>
          <form>
            <Input
              errorMessage={errors?.name?.message}
              name="name"
              control={control}
              placeholder="Nome completo"
              leftIcon="user"
            />
            <Input
              errorMessage={errors?.email?.message}
              name="email"
              control={control}
              placeholder="E-mail"
              leftIcon="email"
            />
            <Input
              errorMessage={errors?.password?.message}
              name="password"
              control={control}
              placeholder="Password"
              leftIcon="senha"
            />
            <Button
              title="Criar minha conta"
              variant="secondary"
              type="submit"
            />
          </form>
          <p className="font-bold text-sm leading-[19px] text-[#e5e044] mt-[10px]">
            Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </p>
          <p
            className="font-bold text-sm leading-[19px] text-white cursor-pointer mt-[10px] mb-5"
          >
            Já tenho conta.
            <a className="text-[#23DD7A]" href="/#">
              {" "}
              Fazer login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
