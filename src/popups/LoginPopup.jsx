import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import TextInput from "../components/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../redux/slices/users/usersActions";

const LoginPopup = ({ closeHandler, signUpHandler }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const { isAuthenticated } = useSelector((state) => state.users);

  const submitHandler = () => {
    if (email === "" || password === "") {
      toast.warning("All fields are required!");
      return;
    }
    const user = { email, password };
    dispatch(loginUser({ user }));
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    closeHandler();
  }, [isAuthenticated]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-primary-950/25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[35rem] p-4 bg-white  dark:bg-primary-950 dark:border-primary-700 dark:border">
        <div className="flex w-full justify-between items-start">
          <h3 className="text-primary-950 dark:text-primary-200 font-semibold text-2xl">
            Login
          </h3>
          <button
            className="dark:text-white text-primary-950"
            onClick={closeHandler}
          >
            <IoClose size={24} />
          </button>
        </div>
        <div>
          <p className="dark:text-primary-400 text-center my-6">
            You need to authenticate before continuing
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <TextInput placeholder="email" type="email" />
          <TextInput placeholder="password" type="password" />
        </div>
        <div className="flex w-full items-center justify-center py-4">
          <button
            className="px-4 rounded-md bg-primary-950 text-white h-[2.4rem] font-semibold dark:bg-primary-100 dark:text-primary-950"
            onClick={submitHandler}
          >
            Login
          </button>
        </div>
        <div className="flex  items-end justify-end w-full">
          <button
            className="text-primary-950 dark:text-primary-200"
            onClick={signUpHandler}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
