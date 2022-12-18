import logo from "../assets/logo-dio.png";
import { Button } from "./Button";

export function Header() {
  return (
    <div className="bg-[#151515] w-[100%] h-[47px] flex justify-center items-center">
      <div className="w-[100%] max-w-[80%] h-[47px] flex justify-between items-center my-0 mx-auto">
        <img src={logo} alt="Logo da Dio" />
        <div className="flex flex-row items-center">
          <>
            <a
              className="text-sm leading-[25px] text-white mr-3 no-underline"
              href=""
            >
              Home
            </a>
            <Button title="Entrar" />
            <Button title="Cadastrar" />
          </>
        </div>
      </div>
    </div>
  );
}
