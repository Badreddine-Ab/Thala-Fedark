import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Edite_Etat } from "../../../Api/Mutation/MutationCommand";

const EditeModel = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [etat, SetEtas] = useState({});
  const [updateCommand, { data, error }] = useMutation(Edite_Etat);
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log(etat);
      updateCommand({
        variables: { updateCommandId: props.Etats.id, etat: etat },
      });
      setShowModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button
        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
        aria-label="Edit"
        onClick={() => setShowModal(true)}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
        </svg>
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Update </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label for="first">Name</label>
                          <select
                            type="text"
                            name="etat"
                            onChange={(e) => SetEtas(e.target.value)}
                            className="input-box"
                          >
                            <option value="EN coure">EN coure</option>
                            <option value="Termine">Termine</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
                        >
                          save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditeModel;
