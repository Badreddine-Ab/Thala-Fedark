export default function CheckoutCommande(props) {

    return (
        <div className="space-y-2">
            <div className="flex justify-between">
                <div>
                    <h5 className="text-gray-800 font-medium">name :  {props.name}</h5>
                </div>
                <p className="text-gray-600">
                    x{props.quant}
                </p>
                <p className="text-gray-800 font-medium">${props.prix * props.quant}</p>
            </div>
        </div>
    )
}