import React, { useState } from "react";
import InputType from "./InputType";
import { Link, NavLink } from "react-router-dom";
import { handleLogin, handleSignUp } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <form
      className="mt-6"
      onSubmit={(e) => {
        if (formType === "loginType")
          return handleLogin(e, email, password, role);
        else if (formType === "signUpType")
          return handleSignUp(
            e,
            name,
            role,
            email,
            password,
            hospitalName,
            organisationName,
            address,
            phone
          );
      }}
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        {formTitle}
      </h2>
      <div className="flex mb-10 gap-5 justify-center">
        <div className="flex gap-1">
          <input
            type="radio"
            name="role"
            id="donarRadio"
            value={"donar"}
            onChange={(e) => setRole(e.target.value)}
            defaultChecked
          />
          <label htmlFor="adminRadio">Donar</label>
        </div>
        <div className="flex gap-1">
          <input
            type="radio"
            name="role"
            id="adminRadio"
            value={"admin"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="adminRadio">Admin</label>
        </div>
        <div className="flex gap-1">
          <input
            type="radio"
            name="role"
            id="hospitalRadio"
            value={"hospital"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="hospitalRadio">Hospital</label>
        </div>
        <div className="flex gap-1">
          <input
            type="radio"
            name="role"
            id="patientRadio"
            value={"patient"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="patientRadio">Patient</label>
        </div>
      </div>
      {/* switch stmt */}
      {(() => {
        switch (true) {
          case formType === "loginType": {
            return (
              <>
                <InputType
                  labelText={"Email Address"}
                  labelFor={"forEmail"}
                  inputType={"email"}
                  name={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputType
                  labelText={"Password"}
                  labelFor={"forPassword"}
                  inputType={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
            );
          }
          case formType === "signUpType": {
            return (
              <>
                {(role === "admin" ||
                  role === "donar" ||
                  role === "patient") && (
                  <InputType
                    labelText={"Name"}
                    labelFor={"forName"}
                    inputType={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}

                {role === "organisation" && (
                  <InputType
                    labelText={"Organisation Name"}
                    labelFor={"fororganisationName"}
                    inputType={"text"}
                    name={"organisationName"}
                    value={organisationName}
                    onChange={(e) => setOrganisationName(e.target.value)}
                  />
                )}

                {role === "hospital" && (
                  <InputType
                    labelText={"Hospital Name"}
                    labelFor={"forHospitalName"}
                    inputType={"text"}
                    name={"hospitalName"}
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                  />
                )}

                <InputType
                  labelText={"Email"}
                  labelFor={"forEmail"}
                  inputType={"email"}
                  name={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputType
                  labelText={"Password"}
                  labelFor={"forPassword"}
                  inputType={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <InputType
                  labelText={"Address"}
                  labelFor={"forAddress"}
                  inputType={"text"}
                  name={"address"}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <InputType
                  labelText={"Phone"}
                  labelFor={"forPhone"}
                  inputType={"text"}
                  name={"phone"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </>
            );
          }
        }
      })()}
      {/* todo:have to work on remeber and forgot */}
      {formType === "loginType" && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember Me
            </label>
          </div>
          <NavLink href="#" className="text-sm text-red-600 hover:underline">
            Forgot Password?
          </NavLink>
        </div>
      )}

      <div
        className="flex w-full py-2 px-4 bg-red-600 text-white justify-center font-semibold rounded-md hover:bg-red-700 
      transition duration-300"
      >
        <button type="submit" className="w-screen">
          {submitBtn}
        </button>
      </div>
      <div className="flex justify-between">
        {formType === "loginType" ? (
          <p className="mt-6 text-sm text-gray-600">
            Don't have an account ? Sign up
            <Link
              to="/signup"
              className="text-blue-800 ml-1 font-medium hover:underline"
            >
              {" "}
              Here!
            </Link>
          </p>
        ) : (
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account ?
            <Link
              to="/login"
              className="text-blue-800 ml-1 font-medium hover:underline"
            >
              {" "}
              Log in
            </Link>
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
