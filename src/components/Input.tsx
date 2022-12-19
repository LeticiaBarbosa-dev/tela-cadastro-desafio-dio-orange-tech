import React from "react";
import { Envelope, Lock, User } from "phosphor-react";
import { Controller } from "react-hook-form";

interface InputProps {
  leftIcon: string;
  name: string;
  control: any;
  placeholder: string;
  errorMessage?: string;
}
export function Input({
  leftIcon,
  name,
  control,
  placeholder,
  errorMessage,
  ...rest
}: InputProps) {
  return (
    <>
      <div className="w-[100%] max-w-[275px] h-[30px] border-b-[1px] border-[#383450] flex items-center mb-[20px]">
        {leftIcon === "user" ? (
          <User />
        ) : leftIcon === "email" ? (
          <Envelope />
        ) : leftIcon === "senha" ? (
          <Lock />
        ) : null}
        <div className="mr-[10px]">
            <Controller name={name} control={control} rules={{required: true}} render={({field: {value, onChange}}) => <input placeholder={placeholder} value={value} onChange={onChange} {...rest} className="bg-transparent text-white border-0 h-[30px] w-[100%]" />} />
        </div>
      </div>
      {errorMessage ? (
        <p className="text-white text-xs">{errorMessage}</p>
      ) : null}
    </>
  );
}
