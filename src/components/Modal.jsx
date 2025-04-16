import React from "react";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import Input from "./Input";

function Modal({ setOpenModal }) {
  return (
    <div className=" fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className=" relative grid grid-cols-2 w-[85%] md:w-[55%] h-[75%] md:h-[95%] rounded-xl overflow-hidden shadow-4xl">
        <IoClose
          onClick={() => setOpenModal((open) => !open)}
          className=" absolute top-4 right-4 border-2 size-8 p-1 rounded-lg text-white cursor-pointer"
        />
        <div className=" hidden bg-primary-1300 md:flex flex-col items-center justify-center gap-6 p-8 ">
          <h2 className=" text-primary-text text-[2rem] text-center font-bold">
            Lets Get You Signed Up
          </h2>
          <p className=" text-secondary-text text-center leading-8">
            No charges, no fees. Get note taking in minutes!
          </p>
        </div>

        <div className=" bg-primary-900 dark:bg-primary-1400 p-4 flex flex-col justify-center items-center w-[90vw] md:w-full">
          <div className=" flex flex-col items-center my-24 ">
            <div className=" w-[90%] flex flex-col gap-4">
              <Input
                placeholder="janedone@gmail.com"
                id="email"
                label="Email"
              />
              <Input placeholder="*********" id="password" label="Password" />
            </div>
            <div className=" w-[90%] mt-24">
              <label htmlFor="agree" className=" text-secondary-text mx-auto">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  className=" mr-2 border-2 border-white bg-transparent"
                />
                I agree to all terms
              </label>
              <Button type="primary-btn" width="w-[100%] inline">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
