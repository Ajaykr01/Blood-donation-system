import React from "react";
import Form from "../components/shared/form/Form";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import { toast } from "react-toastify";

const Signup = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className=" flex items-center justify-center bg-black">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
            <Form
              formTitle={"Create Your Account"}
              submitBtn={"Sign Up"}
              formType={"signUpType"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
