import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
    const coffee = useLoaderData();
    return (
        <div>
            <Link to='/' className="text-[#374151] text-xl flex items-center mx-14 py-5"><FaArrowLeft /> Back to home</Link>
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-1/2 bg-[#F5F4F1] lg:flex lg:justify-around justify-center items-center p-8 rounded-md">
                    <div>
                        <img src={coffee.photo} alt="" />
                    </div>
                    <div className="text-xl">
                        <h2 className="text-3xl text-[#331A15] font-semibold mb-4">{coffee.name} ( {coffee.price} tk )</h2>
                        <p><span className="text-[#331A15] font-semibold mb-2">Chef: </span>{coffee.chefName}</p>
                        <p><span className="text-[#331A15] font-semibold mb-2">Supplier: </span>{coffee.supplier}</p>
                        <p><span className="text-[#331A15] font-semibold mb-2">Taste: </span>{coffee.taste}</p>
                        <p><span className="text-[#331A15] font-semibold mb-2">Details: </span>{coffee.details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;