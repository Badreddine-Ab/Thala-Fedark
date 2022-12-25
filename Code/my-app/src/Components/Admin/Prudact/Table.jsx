import { useQuery, useMutation } from "@apollo/client";
import { Get_PRODUITS } from "../../../Api/Query/Query";
import { Delete_Prduct } from "../../../Api/Mutation/MutationProduct";
import Modal from './addCommand'

export default function Table() {
  const { loading, data, error } = useQuery(Get_PRODUITS);
  const [deleteProduct] = useMutation(Delete_Prduct);

  const deleteproduct = (deleteProductId) => {
    deleteProduct({
      variables: {
        deleteProductId,
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
        <Modal ModelName="Add Product" />

          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400">
                <th className="px-4 py-3" hidden>
                  Id
                </th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Prix</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Ventes</th>
                <th className="px-4 py-3">Ventes promo</th>
                <th className="px-4 py-3">Categorie</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {data.products.map((product, i) => {
                return (
                  <tr key={i} className="text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3 text-sm" hidden>
                      {product.id}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={product.images}
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
                      {product.name} 
                    </td>

                    <td className="px-4 py-3 text-sm">{product.prix}</td>
                    <td className="px-4 py-3 text-sm">
                      {product.stock} 
                    </td>
                    <td className="px-4 py-3 text-sm">{product.ventes}</td>
                    <td className="px-4 py-3 text-sm">{product.ventes_promo}</td>
                    <td className="px-4 py-3 text-sm">{product.categorie.name}</td>

                   
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-4 text-sm">
                        <button
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
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
                        <button
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Delete"
                          onClick={() => deleteproduct(product.id)}
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