import { useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import { Add_Produit } from "../../../Api/Mutation/MutationProduct";
import { FIND_ALL_CATGORIE } from "../../../Api/Query/Query";
import Upload from "../../Client/upload";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [createProduct] = useMutation(Add_Produit);
  const [Data, SetData] = useState({});
  const [Error, SetError] = useState("");
  const { loading, data, error } = useQuery(FIND_ALL_CATGORIE);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>something went wrong...</div>;
  const handleChange = (e) => {
    SetData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    try {
      const { description, name, prix, stock, categorieId } = Data;
      e.preventDefault();

      if (description || name || prix || stock) {
        createProduct({
          variables: {
            input: {
              description: description,
              images: "Image",
              name: name,
              prix: parseFloat(prix),
              stock: parseInt(stock),
              categorieId: parseInt(categorieId),
            },
          },
        });
        setShowModal(false);
      } else {
        SetError("Tous les champs sont obligatoires");
        setShowModal(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
                {Error && (
                  <div
                    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <span class="block sm:inline">{Error}</span>
                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        class="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label for="first">Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className="input-box"
                          />
                        </div>
                        <div>
                          <label for="last">Categorie</label>
                          <select
                            className="input-box"
                            name="categorieId"
                            onChange={handleChange}
                          >
                            {data.categories.map((categorie, i) => {
                              return (
                                <option value={categorie.id}>
                                  {categorie.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label for="birthday">Prix</label>
                          <input
                            type="text"
                            name="prix"
                            onChange={handleChange}
                            className="input-box"
                          />
                        </div>

                        <div>
                          <label for="phone">stock</label>
                          <input
                            type="text"
                            name="stock"
                            onChange={handleChange}
                            className="input-box"
                          />
                        </div>

                        {/* <div>
                          <label for="phone">Image</label>
                          <Upload />
                        </div> */}
                      </div>
                      <div>
                        <label for="last">Description</label>
                        <textarea
                          name="description"
                          onChange={handleChange}
                          className="input-box"
                          rows="5"
                          cols="33"
                        ></textarea>
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
