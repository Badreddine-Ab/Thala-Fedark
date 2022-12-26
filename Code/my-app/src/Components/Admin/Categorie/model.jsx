import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {Add_Categorie} from '../../../Api/Mutation/MutationCategorie'

const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [addCategorie,{data,error}] = useMutation(Add_Categorie);
  const [Name, SetName] = useState("");

  const handleSubmit=(e)=> {
    try {
      
      e.preventDefault()
      addCategorie({
        variables: {name: Name},
      })
      setShowModal(false)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <button
        className="bg-primary text-white  
      font-bold px-7 py-3 my-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add{" "}
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">{props.ModelName}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <form  onSubmit={handleSubmit}>
                  <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
                 
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label for="first">Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={(e) => SetName(e.target.value)}
                            className="input-box"
                          />
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

export default Modal;
