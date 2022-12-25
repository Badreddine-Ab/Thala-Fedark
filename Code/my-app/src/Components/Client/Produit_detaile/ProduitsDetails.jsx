import { useParams } from "react-router-dom";
import { Get_Product } from "../../../Api/Query/QueryFindByCtegorie";
import Button from "../button";

export default function ProduitsDetails({ children }) {
  const { loading, data, error } = Get_Product(useParams().id);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>something went wrong...</div>;
  console.log(data.product);

  return (
    <div>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {data.product.categorie.name}
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            </ol>
          </nav>
          <>
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-w-3 aspect-h-4  overflow-hidden rounded-lg lg:block">
                <img
                  src={data.product.images}
                  alt="Two each of gray, white, and black shirts laying flat."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="  lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                    alt="Model wearing plain black basic tee."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                    alt="Model wearing plain gray basic tee."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {data.product.name}
                  </h1>
                  <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl tracking-tight text-gray-900">
                      {data.product.prix} Dh
                    </p>

                    <div className="mt-6">
                      <h3 className="sr-only">Reviews</h3>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <svg
                            className="text-gray-900 h-5 w-5 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRulle="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRulle="evenodd"
                            />
                          </svg>

                          <svg
                            className="text-gray-900 h-5 w-5 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRulle="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRulle="evenodd"
                            />
                          </svg>

                          <svg
                            className="text-gray-900 h-5 w-5 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRulle="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRulle="evenodd"
                            />
                          </svg>

                          <svg
                            className="text-gray-900 h-5 w-5 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRulle="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRulle="evenodd"
                            />
                          </svg>

                          <svg
                            className="text-gray-200 h-5 w-5 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRulle="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRulle="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="sr-only">4 out of 5 stars</p>
                        <a
                          href="#"
                          className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          117 reviews
                        </a>
                      </div>
                    </div>

                    <form className="mt-10">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Color
                        </h3>

                        <fieldset className="mt-4">
                          <legend className="sr-only">Choose a color</legend>
                          <div className="flex items-center space-x-3">
                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                              <input
                                type="radio"
                                name="color-choice"
                                value="White"
                                className="sr-only"
                                aria-labelledby="color-choice-0-label"
                              />
                              <span
                                id="color-choice-0-label"
                                className="sr-only"
                              >
                                {" "}
                                White{" "}
                              </span>
                              <span
                                aria-hidden="true"
                                className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                              ></span>
                            </label>

                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                              <input
                                type="radio"
                                name="color-choice"
                                value="Gray"
                                className="sr-only"
                                aria-labelledby="color-choice-1-label"
                              />
                              <span
                                id="color-choice-1-label"
                                className="sr-only"
                              >
                                {" "}
                                Gray{" "}
                              </span>
                              <span
                                aria-hidden="true"
                                className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                              ></span>
                            </label>

                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                              <input
                                type="radio"
                                name="color-choice"
                                value="Black"
                                className="sr-only"
                                aria-labelledby="color-choice-2-label"
                              />
                              <span
                                id="color-choice-2-label"
                                className="sr-only"
                              >
                                {" "}
                                Black{" "}
                              </span>
                              <span
                                aria-hidden="true"
                                className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                              ></span>
                            </label>
                          </div>
                        </fieldset>
                      </div>
                      <div className="py-1 my-3 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 ">
                        <div>
                          <h2 className="my-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            Description
                          </h2>
                          <div className="space-y-6">
                            <p className="text-base text-gray-900">
                              {data.product.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10"></div>

                      <Button product={data.product}/>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8X "></div>
          </>
          {/* ); */}
          {/* })} */}
        </div>
      </div>
    </div>
  );
}
