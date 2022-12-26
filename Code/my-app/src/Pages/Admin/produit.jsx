
import React from 'react';
import Profile from '../../images/Profile.JPG'
import { Link } from 'react-router-dom'
import { FaCog, FaHome, FaUser } from 'react-icons/fa';
import image  from "../../images/products/product6.jpg"


export default function Produit() {
    return (
   <>
        <div className="container py-4 flex items-center gap-3">
        <a href="#" className="text-primary text-base">
        {/* <i className="fa-solid fa-house"></i>  */}
        </a>
        <span className="text-sm text-gray-400">
            {/* <i className="fa-solid fa-chevron-right"></i> */}
        </span>
        <p className="text-gray-600 font-medium">Profile</p>
    </div>
    
    
    <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">

        
        <div className="col-span-3">
            <div className="px-4 py-3 shadow flex items-center gap-4">
                <div className="flex-shrink-0">
                    <img src={Profile} alt="profile"
                        className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover" />
                </div>
                <div className="flex-grow">
                    <p className="text-gray-600">Hello,</p>
                    <h4 className="text-gray-800 font-medium">Anas nafea</h4>
                </div>
            </div>

            <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <div className="space-y-1 pl-8">
                    <a href="#" className="block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            {/* <i className="fa-regular fa-address-card"></i> */}
                        </span>
                        Manage account
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Profile information
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Manage addresses
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Change password
                    </a>
                </div>

                <div className="space-y-1 pl-8 pt-4">
                    <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            {/* <i className="fa-solid fa-box-archive"></i> */}
                        </span>
                        My order history
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        My returns
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        My Cancellations
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        My reviews
                    </a>
                </div>

                <div className="space-y-1 pl-8 pt-4">
                    <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            {/* <i className="fa-regular fa-credit-card"></i> */}
                        </span>
                        Payment methods
                    </a>
                    <a  className="relative hover:text-primary block capitalize transition">
                        <Link to='command'>command</Link>
                    </a>
                </div>

                <div className="space-y-1 pl-8 pt-4">
                    <a  className="relative text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            {/* <i className="fa-regular fa-heart"></i> */}
                        </span>
                        Produit 
                    </a>
                </div>

                <div className="space-y-1 pl-8 pt-4">
                    <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            {/* <i className="fa-solid fa-right-from-bracket"></i> */}
                        </span>
                        Logout
                    </a>
                </div>

            </div>
        </div>
        {/* <!-- ./sidebar -->}

        {<!-- wishlist --> */}
        <div className="col-span-9 space-y-4">
            <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="">
                <h2 className="text-gray-800 text-xl font-medium uppercase">Img</h2>
                </div>
                <div className="">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">Nome De Produit</h2>
                </div>
                <div className="">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">prix</h2>
                </div>
                <div className="">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">Promotion</h2>
                </div>
                <div className="">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">stock</h2>
                </div>
                

                <div className="text-gray-600 cursor-pointer hover:text-primary">
                    {/* <i className="fa-solid fa-trash"></i> */}
                </div>
            </div>

            <div className="flex items-center justify-between border border-gray-200 rounded">
                <div className="w-28">
                    <img src={image} alt="product 6" className="w-full" />
                </div>
                <div className="1/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">Italian L shape</h2>
                    <p className="text-gray-500 text-sm">YUSOKI Luxury Double Sided </p>
                </div>
                <div className="1/3">
                    <p className="text-gray-500 text-sm">120$  </p>
                </div>
                <span className="text-red-600 bg-red-100 rounded-xl">-12%</span>
                <div className="">
                    <p className="text-gray-500 text-sm">2000  </p>
                </div>
                {/* <a href="#"
                    className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">update
                    </a> */}

                <div className="text-gray-600 cursor-pointer hover:text-primary">
                    {/* <i className="fa-solid fa-trash"></i> */}
                </div>
            </div>

            <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28">
                    <img src={image} alt="product 6" className="w-full" />
                </div>
                <div className="w-1/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">Italian L shape</h2>
                    <p className="text-gray-500 text-sm">YUSOKI Luxury Double Sided </p>
                </div>
                <div className="w-1/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">Promotion :</h2>
                    <p className="text-gray-500 text-sm">50$  <span className="text-red-600 bg-red-100 rounded-xl">-4%</span></p>
                </div>
                <a href="#"
                    className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">update
                    </a>

                <div className="text-gray-600 cursor-pointer hover:text-primary">
                    {/* <i className="fa-solid fa-trash"></i> */}
                </div>
            </div>

            <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28">
                    <img src={image} alt="product 6" className="w-full" />
                </div>
                <div className="w-1/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">Italian L shape</h2>
                    <p className="text-gray-500 text-sm">YUSOKI Luxury Double Sided </p>
                </div>
                <div className="w-1/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">Promotion :</h2>
                    <p className="text-gray-500 text-sm">610$  <span className="text-red-600 bg-red-100 rounded-xl">-55%</span></p>
                </div>
                <a href="#"
                    className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">update
                    </a>

                <div className="text-gray-600 cursor-pointer hover:text-primary">
                    {/* <i className="fa-solid fa-trash"></i> */}
                </div>
            </div>
        </div>
        {/* <!-- ./wishlist --> */}

    </div>
    {/* <!-- ./wrapper -->}

    {<!-- footer --> */}
  


   </>
    )
}

