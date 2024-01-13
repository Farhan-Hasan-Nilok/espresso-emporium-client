import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";


const EditCoffee = () => {
    const location = useLocation();
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chefName = form.chef.value;
        const supplier = form.supplier.value;
        const price = form.price.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chefName, supplier, price, taste, details, photo }

        fetch(`https://espresso-emporium-server-rho.vercel.app/edit-coffee/${location.state?.coffeeData?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Successfull!",
                        text: "Coffee information updated successfully!",
                        icon: "success"
                    });
                }
                form.reset();
            })
    }
    return (
        <div>
            <Link to='/' className="text-[#374151] text-xl flex items-center mx-10 py-5"><FaArrowLeft /> Back to home</Link>
            <div className="bg-[#F4F3F0] p-6 w-1/2 mx-auto lg:my-16 rounded-md">
                <h2 className="text-3xl text-[#374151] font-semibold text-center py-4">Edit Coffee Info</h2>
                <p className="text-center font-sans font-light mb-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                <form className="grid lg:grid-cols-2 gap-5" onSubmit={handleAddCoffee}>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Name</label>
                        <input type="text" name="name" className="max-w-xs w-full h-8 font-sans p-2" defaultValue={location.state?.coffeeData?.name} />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Chef</label>
                        <input type="text" name="chef" className="max-w-xs w-full h-8 font-sans p-2" defaultValue={location.state?.coffeeData?.chefName} />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Supplier</label>
                        <input type="text" name="supplier" className="max-w-xs w-full h-8 font-sans p-2" defaultValue={location.state?.coffeeData?.supplier} />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Price</label>
                        <input type="text" name="price" className="max-w-xs w-full h-8 font-sans p-2" defaultValue={location.state?.coffeeData?.price} />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Taste</label>
                        <input type="text" name="taste" className="max-w-xs w-full h-8 font-sans p-2" defaultValue={location.state?.coffeeData?.taste} />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Details</label>
                        <input type="text" name="details" className="max-w-xs w-full h-8 font-sans p-2" defaultValue={location.state?.coffeeData?.details} />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Photo URL</label>
                        <input type="text" name="photo" className="w-full h-8 font-sans p-2" defaultValue={location.state?.coffeeData?.photo} />
                    </div>
                    <br />
                    <div className="">
                        <button type="submit" className="col-span-2 bg-[#D2B48C] lg:w-[56rem] text-lg lg:h-[3rem]">Edit coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCoffee;