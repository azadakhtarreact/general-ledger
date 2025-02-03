
import React from "react";
import { Link } from "react-router-dom";

// Images
// import { SignIn, Instagram, AppStore, Chat, Profile, Home, Story, GStore } from "../../assets/images";


const HomePage = (props) => {

    return (
        <>
            <div className="container py-8 mx-auto">
                <p className='font-bold bg-green-600 base-100'>The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.</p>
                <h1 className="mb-2 text-3xl font-bold text-red-600">Welcome </h1>
                <button className="btn btn-primary">One</button>

                <div className="mb-2">
                    <ul className="w-56 tabmenu bg-base-200">
                        <li><Link to=''>Item 1</Link></li>
                        <li><Link to='' className="tabactive">Item 2 </Link></li>
                        <li><Link to=''>Item 3</Link></li>
                    </ul>

                    <ul className="mb-2 tabmenu tabmenu-horizontal bg-base-200">
                        <li><Link to=''>Item 1</Link></li>
                        <li><Link to=''>Item 2</Link></li>
                        <li><Link to=''>Item 3</Link></li>
                    </ul>
                </div>

                <div className="">
                    <ul className="tabmenu xl:tabmenu-horizontal bg-base-200 tabrounded-box lg:min-w-max">
                        <li>
                            <Link to=''>Solutions</Link>
                            <ul>
                                <li><Link to=''>Design</Link></li>
                                <li><Link to=''>Development</Link></li>
                                <li><Link to=''>Hosting</Link></li>
                                <li><Link to=''>Domain register</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to=''>Enterprise</Link>
                            <ul>
                                <li><Link to=''>CRM software</Link></li>
                                <li><Link to=''>Marketing management</Link></li>
                                <li><Link to=''>Security</Link></li>
                                <li><Link to=''>Consulting</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to=''>Products</Link>
                            <ul>
                                <li><Link to=''>UI Kit</Link></li>
                                <li><Link to=''>WordPress themes</Link></li>
                                <li><Link to=''>WordPress plugins</Link></li>
                                <li>
                                    <Link to=''>Open source</Link>
                                    <ul>
                                        <li><Link to=''>Auth management system</Link></li>
                                        <li><Link to=''>VScode theme</Link></li>
                                        <li><Link to=''>Color picker app</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to=''>Company</Link>
                            <ul>
                                <li><Link to=''>About us</Link></li>
                                <li><Link to=''>Contact us</Link></li>
                                <li><Link to=''>Privacy policy</Link></li>
                                <li><Link to=''>Press kit</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="shadow-xl card card-compact bg-base-100 w-96">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div >
        </>
    );
};

export default HomePage;
