import { Link } from "react-router-dom";
import cup1 from '../assets/images/cups/Rectangle 9.png';
import cup2 from '../assets/images/cups/Rectangle 10.png';
import cup3 from '../assets/images/cups/Rectangle 11.png';
import cup4 from '../assets/images/cups/Rectangle 12.png';
import cup5 from '../assets/images/cups/Rectangle 13.png';
import cup6 from '../assets/images/cups/Rectangle 14.png';
import cup7 from '../assets/images/cups/Rectangle 15.png';
import cup8 from '../assets/images/cups/Rectangle 16.png';
import { MdRemoveRedEye, MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const ShowCoffee = () => {
    const [displayCoffees, setDisplayCoffees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/display-coffee')
            .then(res => res.json())
            .then(data => setDisplayCoffees(data))
    }, [])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/delete-coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = displayCoffees.filter(coffee => coffee._id !== id);
                        setDisplayCoffees(remaining)
                    })
            }
        });
    }
    return (
        <div>
            <p className="text-lg text-center">- - -Sip & Savor - - -</p>
            <h3 className="text-3xl text-[#331A15] font-semibold text-center py-4">Our Popular Products</h3>
            <div className="text-center mb-5"><Link to='/add'><button className='bg-[#E3B577] px-5 py-1 text-lg'>Add Coffee</button></Link></div>

            <div className="grid lg:grid-cols-2 gap-5 place-items-center">
                {
                    displayCoffees.map(coffee => <div key={coffee._id} className="grid grid-cols-3 place-items-center bg-[#F5F4F1] p-4 rounded-lg">
                        <img className="w-[193px] h-auto" src={coffee.photo} alt="" />
                        <div className="text-xl">
                            <p>Name: {coffee.name}</p>
                            <p>Chef: {coffee.chefName}</p>
                            <p>Price: {coffee.price} tk</p>
                        </div>
                        <div className="text-2xl">
                            <Link to={`/view/${coffee._id}`} state={{ coffeeData: coffee }}><MdRemoveRedEye className="text-white bg-[#D2B48C] p-1 rounded-sm cursor-pointer" /></Link>
                            <Link to={`/edit/${coffee._id}`} state={{ coffeeData: coffee }}><MdModeEdit className="text-white my-2 bg-[#3C393B] p-1 rounded-sm cursor-pointer" /></Link>
                            <Link onClick={() => handleDelete(coffee._id)}><FaTrash className="text-white bg-[#EA4744] p-1 rounded-sm cursor-pointer" /></Link>
                        </div>
                    </div>)
                }
            </div>

            <div>
                <h3 className="text-3xl text-[#331A15] font-semibold text-center py-8">Follow On Instagram</h3>
                <div className="py-8 grid lg:grid-cols-4 md:grid-cols-2 place-items-center gap-6">
                    <img src={cup1} alt="" />
                    <img src={cup2} alt="" />
                    <img src={cup3} alt="" />
                    <img src={cup4} alt="" />
                    <img src={cup5} alt="" />
                    <img src={cup6} alt="" />
                    <img src={cup7} alt="" />
                    <img src={cup8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShowCoffee;