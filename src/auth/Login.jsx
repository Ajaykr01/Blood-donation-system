import React, { useEffect } from "react";
import Form from "../components/shared/form/Form";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-screen flex items-center justify-center bg-black">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <Form
              formTitle={"Login to Your Account"}
              submitBtn={"Login"}
              formType={"loginType"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
