import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormData }) {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    if(data.email==""||data.name==""||data.image==""){
        return
    }
    handleFormData(data);
    reset();
  };
  return (
    <div
      className="bg-zinc-200 rounded-md mb-5"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <form className="h-[100%] flex flex-col p-3 items-center " action="">
        <input
          {...register("name")}
          className="w-[80vmin] mt-[2vmax] px-2 py-1 font-semibold text-sm  rounded-md border-cyan-300 lg:text-lg"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          className="w-[80vmin] mt-[2vmax] px-2 py-1 font-semibold text-sm rounded-md border-cyan-300  lg:text-lg"
          type="email"
          placeholder="email"
        />
        <input
          {...register("image")}
          className="w-[80vmin] mt-[2vmax] px-2 py-1 font-semibold text-sm  rounded-md border-cyan-300 lg:text-lg"
          type="text"
          placeholder="image"
        />
        <input
          className="text-center w-20 text-zinc-100 rounded-md bg-red-600 mx-2 my-4"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
