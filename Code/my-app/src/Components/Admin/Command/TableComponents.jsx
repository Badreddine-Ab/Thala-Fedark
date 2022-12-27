import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { FIND_ALL_Commande } from "../../../Api/Query/Query";
import { Delete_Command } from "../../../Api/Mutation/MutationCommand";
import EditeModel from "./Model";

export default function TableComponents() {
  const { loading, data, error } = useQuery(FIND_ALL_Commande);
  const [deleteCommande] = useMutation(Delete_Command);

  const [Etat, SetEtat] = useState({
    id: "",
    etat: "",
  });
  const deletecommand = (deleteCommandeId) => {
    deleteCommande({
      variables: {
        deleteCommandeId,
      },
    });
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>wrong...{error.message}</div>;

  return (
    <>
      {/* <AddCommand /> */}
      <div className="w-full overflow-hidden rounded-lg shadow-xs my-7">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400">
                <th className="px-4 py-3" hidden>
                  Id
                </th>
                <th className="px-4 py-3"></th>
                <th className="px-4 py-3">Prix</th>
                <th className="px-4 py-3">Quantite</th>
                <th className="px-4 py-3">TotalPrix</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {data.Querycommande.map((command, i) => {
                return (
                  <tr key={i} className="text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3 text-sm" hidden>
                      {command.id}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">Hans Burger</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            10x Developer
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-sm">
                      {command.prixTotal} Dh
                    </td>

                    <td className="px-4 py-3 text-sm">{command.quantite}</td>
                    <td className="px-4 py-3 text-sm">
                      {command.quantite * command.prixTotal} DH
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        {command.etat}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-4 text-sm">
                        <button onClick={() => SetEtat({id:command.id,etat:command.etat})}>
                          <EditeModel Etats={Etat} />
                        </button>

                        <button
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Delete"
                          onClick={() => deletecommand(command.id)}
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
