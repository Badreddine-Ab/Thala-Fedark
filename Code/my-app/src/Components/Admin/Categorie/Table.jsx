import { useQuery, useMutation } from "@apollo/client";
import { FIND_ALL_CATGORIE } from "../../../Api/Query/Query";
import { Delete_Categorie } from "../../../Api/Mutation/MutationCategorie";
import Modal from "./model";
import EditeModel from "./EditeModel";
import { useState } from "react";

export default function Table() {
  const [Name, SetName] = useState({
    id: "",
    name: "",
  });

  const { loading, data, error } = useQuery(FIND_ALL_CATGORIE);
  const [deleteCategorie] = useMutation(Delete_Categorie);

  const deleteCategories = (deleteCategorieId) => {
    deleteCategorie({
      variables: {
        deleteCategorieId,
      },
    });
    console.log("click me");
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>something went wrong...</div>;

  return (
    <>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <Modal ModelName="Add Categorie" />

          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400">
                <th className="px-4 py-3" hidden>
                  Id
                </th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {data.categories.map((categorie, i) => {
                return (
                  <tr key={i} className="text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3 text-sm" hidden>
                      {categorie.id}
                    </td>

                    <td className="px-4 py-3 text-sm" name="Name">
                      {categorie.name}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-4 text-sm">
                        <button onClick={() => SetName(categorie)}>
                          <EditeModel name={Name} />
                        </button>
                        <button
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Delete"
                          onClick={() => deleteCategories(categorie.id)}
                        >
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
