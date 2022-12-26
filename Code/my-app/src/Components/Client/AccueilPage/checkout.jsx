import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutCommande from './CheckoutCommande';
export default function Checkout() {
    const [products, setProducts] = useState()
    const [total, setTotal] = useState(0)
  
    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("cartProducts")))
    }, [])
    
    useEffect(() => {
        if (products) {
            let total = 0
            for (let i = 0; i < products.length; i++) {
                total += products[i].quant * products[i].prix
            }
            setTotal(total)
        }
    }, [products])

    useEffect(() => {
        //payement paypal
        if(total > 0) {
            window.paypal.Buttons({
                createOrder: function (data, actions) {
                    // This function sets up the details of the transaction, including the amount and line item details.
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: total
                            }
                        }]
                    });
                },
                onApprove: function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        // This function shows a transaction success message to your buyer.
                        alert('thanks for paying ' + details.payer.name.given_name);
                        localStorage.clear()
                    });
                }
            }).render('#paypal-button-container');
        }
    }, [total])



    if (products) {
        return (
            <>
                <div className="container py-4 flex items-center gap-3">
                    <Link to="/">
                        <a href="#" className="text-primary text-base">
                            <i className="fa-solid fa-house"></i>
                        </a>
                    </Link>
                    <span className="text-sm text-gray-400">
                        <i className="fa-solid fa-chevron-right"></i>
                    </span>
                    <p className="text-gray-600 font-medium">Checkout</p>
                </div>
                <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">

                    <div className="col-span-8 border border-gray-200 p-4 rounded">
                        <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="text-gray-600">Email address</label>
                                <input type="email" name="email" id="email" className="input-box" />
                            </div>
                            <div>
                                <label htmlFor="fullName" className="text-gray-600">Full name</label>
                                <input type="text" name="fullName" id="fullName" className="input-box" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="country" className="text-gray-600">Country</label>
                                    <input type="text" name="country" id="country" className="input-box" />
                                </div>
                                <div>
                                    <label htmlFor="city" className="text-gray-600">City</label>
                                    <input type="text" name="city" id="city" className="input-box" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="address" className="text-gray-600">Street address</label>
                                <input type="text" name="address" id="address" className="input-box" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="text-gray-600">Phone number</label>
                                <input type="number" name="phone" id="phone" className="input-box" />
                            </div>
                        </div>

                    </div>

                    <div className="col-span-4 border border-gray-200 p-4 rounded">
                        <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
                        {
                            products.map((data, i) => (

                                <CheckoutCommande
                                    name={data.name}
                                    prix={data.prix}
                                    quant={data.quant}
                                />

                            ))
                        }

                        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                            <p>subtotal</p>
                            <p>${total}</p>
                        </div>

                        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                            <p>shipping</p>
                            <p>Free</p>
                        </div>

                        <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
                            <p className="font-semibold">Total</p>
                            <p>${total}</p>
                        </div>

                        <div className='mt-7'>Payment methode by </div>

                        <div id="paypal-button-container"></div>
{/* 
                        <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                            <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                            <span className="ml-2 mt-5px">Procceed to checkout</span>
                        </button> */}
                    </div>

                </div>
            </>
        );
    }
}