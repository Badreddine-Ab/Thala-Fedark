import { useEffect, useState } from "react";
export default function component_card(props) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let product = JSON.parse(localStorage.getItem("cartProducts"));

    if (!product) {
        product = []
    }
    if (!cart) {
        cart = []
    }

    let thisCartQuant = cart.find(e => e.id == props.id)?.quant || 1
    let thisCartPrixTotal = cart.find(e => e.id == props.id)?.prixTotal || props.prix


    const [quant, setQuant] = useState(thisCartQuant)
    const [prixTotal, setPrixTotal] = useState(thisCartPrixTotal)

    function changeQuantity(e) {
        const quantity = e.target.value
        setPrixTotal(props.prix * quantity)
        setQuant(e.target.value)
    }


    //get total price from cart
    let thisTotalPrice = cart.find(e => e.id == props.id)?.totalPrice || prixTotal
    const [totalPrice, setTotalPrice] = useState(thisTotalPrice)


    useEffect(() => {
        const products_ = {
            name: props.name,
            prix: props.prix,
            quant: quant,
            prixTotal: prixTotal,
            id: props.id,
            images: props.images,
        }
        if (!cart) {
            cart = [products_]
        } else {
            if (cart.some(e => e.id == props.id)) {
                cart = cart.map(p => {
                    if (p.id == props.id) {
                        return products_
                    }
                    return p
                })
            } else {
                cart.push(products_)
            }
            //get total price from cart
            let total = 0
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].prixTotal
            }
            setTotalPrice(total)
            console.log(total);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [quant])

    localStorage.setItem('total', totalPrice)
    console.log(totalPrice)


    //delete from cart
    const deleteFromCart = (id) => {
        let newProducts = product.filter((data) => data.id !== id);
        localStorage.setItem("cartProducts", JSON.stringify(newProducts));
        window.location.reload();
    }

    return (
        <div className="flex justify-center my-6 container" >
            <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                <div className="flex-1">
                    <table className="w-full text-sm lg:text-base" cellspacing="0">
                        <thead>
                            <tr className="h-12 uppercase">
                                <th className="md:table-cell"></th>
                                <th className="md:table-cell"></th>
                                <th className="text-left">Product</th>
                                <th className="">
                                    <span className="lg:inline">Quantity</span>
                                </th>
                                <th className="text-right">price</th>
                                <th className="text-right">Total price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button type="button" className="text-gray-700 md:ml-4" onClick={() => { deleteFromCart(props.id) }}>
                                        <i class="fa-regular fa-circle-xmark" style={{ fontSize: "40px" }}></i>
                                    </button>
                                </td>
                                <td className="pb-4 md:table-cell">
                                    <a href="#">
                                        <img src={props.images} className="w-20 rounded" alt="Thumbnail" />
                                    </a>
                                </td>
                                <td>
                                    <a href="#">
                                        <p className="mb-2 md:ml-4">{props.name}</p>
                                    </a>
                                </td>
                                <td className="justify-center md:justify-end md:flex mt-6">
                                    <div className="w-20 h-10">
                                        <div className="relative flex flex-row w-full h-8">
                                            <input id={props.id} type="number" onChange={changeQuantity} max={100} min={1} value={quant}
                                                className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-right">
                                    <input size="1"
                                        value={props.prix}
                                        readOnly>
                                    </input>
                                </td>
                                <td className="text-right">
                                    <span className="text-sm lg:text-base font-medium">
                                        <p className='total_price'> {prixTotal} €
                                        </p>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr className="pb-6 mt-6" />
                </div>
            </div>
        </div>
    )
}