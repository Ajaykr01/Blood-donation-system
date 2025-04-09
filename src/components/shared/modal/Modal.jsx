import React, { useState } from "react";
import InputType from "../form/InputType";
import API from "./../../../services/API";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => state.auth);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleModalSubmit = async () => {
    try {
      if (!bloodGroup || !quantity) {
        return toast.error("Please Provide All Fields");
      }
      const { data } = await API.post("/inventory/create-inventory", {
        email,
        organisation: user?._id,
        inventoryType,
        bloodGroup,
        quantity,
      });
      if (data?.success) {
        toast.success("New Record Added");
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.response.data.message);
      window.location.reload();
    }
  };

  return (
    <div className="p-5">
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <i className="fa-solid fa-plus pr-1"></i>
        Add Inventory
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            {" "}
            <h2 className="text-2xl font-bold mb-4">Manage Blood Record</h2>
            <div className="mb-4">
              <div className="flex">
                <label
                  htmlFor="bloodGroup"
                  className="block text-gray-700  mb-2"
                >
                  Blood Type:
                </label>
                <div className="mb-3 ms-10">
                  <input
                    type="radio"
                    name="inRadio"
                    defaultChecked
                    value={"in"}
                    onChange={(e) => {
                      setInventoryType(e.target.value);
                    }}
                  />
                  <label htmlFor="in" className="">
                    IN
                  </label>
                </div>
                <div className="ms-3">
                  <input
                    type="radio"
                    name="inRadio"
                    value={"out"}
                    onChange={(e) => {
                      setInventoryType(e.target.value);
                    }}
                  />
                  <label htmlFor="out" className="">
                    OUT
                  </label>
                </div>
              </div>
              <select
                onChange={(e) => setBloodGroup(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              >
                <option defaultChecked>Select blood type</option>
                <option value="O-">O-</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="A+">A+</option>
                <option value="B-">B-</option>
                <option value="B+">B+</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
              </select>
              <InputType
                labelText={"Donar Email:"}
                labelFor={"donarEmail"}
                inputType={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputType
                labelText={"Quantity (ML):"}
                labelFor={"quantity"}
                inputType={"Number"}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              >
                Close
              </button>
              <button
                onClick={handleModalSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
