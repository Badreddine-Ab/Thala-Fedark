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
                    </div> 


                    <div className="col-span-4 border border-gray-200 p-4 rounded">
                        <div className='mt-7'>Payment methode by </div>
                        <div id="paypal-button-container"></div>
                   </div>

                </div>
            </>
        );
    }
}