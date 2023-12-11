import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Swal from 'sweetalert2'
const AddCoffee = () => {

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

        fetch('http://localhost:3000/add-coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId){
                Swal.fire({
                    title: "Successfull!",
                    text: "New Coffee Added!",
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
                <h2 className="text-3xl text-[#374151] font-semibold text-center py-4">Add New Coffee</h2>
                <p className="text-center font-sans font-light mb-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                <form className="grid lg:grid-cols-2 gap-5" onSubmit={handleAddCoffee}>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Name</label>
                        <input type="text" name="name" className="max-w-xs w-full h-8 font-sans p-2" placeholder="Enter coffee name" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Chef</label>
                        <input type="text" name="chef" className="max-w-xs w-full h-8 font-sans p-2" placeholder="Enter coffee chef " />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Supplier</label>
                        <input type="text" name="supplier" className="max-w-xs w-full h-8 font-sans p-2" placeholder="Enter supplier name " />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Price</label>
                        <input type="text" name="price" className="max-w-xs w-full h-8 font-sans p-2" placeholder="Enter coffee price" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Taste</label>
                        <input type="text" name="taste" className="max-w-xs w-full h-8 font-sans p-2" placeholder="Enter your opinion" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Details</label>
                        <input type="text" name="details" className="max-w-xs w-full h-8 font-sans p-2" placeholder="Enter coffee details" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-sans mb-2">Photo URL</label>
                        <input type="text" name="photo" className="w-full h-8 font-sans p-2" placeholder="Enter photo url" />
                    </div>
                    <br />
                    <div className="">
                        <button type="submit" className="col-span-2 bg-[#D2B48C] lg:w-[56rem] text-lg lg:h-[3rem]">Add coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;

// https://ibb.co/V2dQZ51
// https://ibb.co/12yf65Z
// https://ibb.co/Qbfzyng
// https://ibb.co/hYRyZpQ
// https://ibb.co/dLhfmyW
// https://ibb.co/R9c15df