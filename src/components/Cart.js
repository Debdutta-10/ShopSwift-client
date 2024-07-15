import React from 'react'
import { useCart } from '../context/cart'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const [cart, setCart] = useCart();
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart];
            let index = myCart.findIndex((item) => item._id === pid);
            myCart.splice(index, 1);
            setCart(myCart);
            localStorage.setItem("cart", JSON.stringify(myCart));
        } catch (error) {
            console.log(error);
        }
    };

    const totalPrice = () => {
        try {
            let total = 0;
            cart?.map((item) => {
                total = total + item.price;
            });
            return total.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
            });
        } catch (error) {
            console.log(error);
            return "Error calculating total";
        }
    };


    return (
        <>
            <div className="container">
                <div className="col-md-12">
                    <h1 className="text-center bg-light p-2 mb-1">
                        {!auth?.user
                            ? "Hello Guest"
                            : `Hello  ${auth?.token && auth?.user?.name}`}
                        <p className="text-center">
                            {cart?.length
                                ? `You Have ${cart.length} items in your cart ${auth?.token ? "" : "please login to checkout !"
                                }`
                                : " Your Cart Is Empty"}
                        </p>
                    </h1>
                    <div className="row">
                        <div className="col-md-9">
                            Cart Items
                            {
                                cart?.map(p => (
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img className="card-img-top" src={`http://localhost:8000/api/v1/product/product-photo/${p._id}`} alt="Product" />
                                        </div>
                                        <div className="col-md-8">
                                            <p><strong>Name:</strong> {p.name}</p>
                                            <p><strong>Description:</strong> {p.description}</p>
                                            <p><strong>Price:</strong> Rs. {p.price}</p>
                                            <p><strong>Category:</strong> {p.category ? p.category.name : "N/A"}</p>
                                            <button className='btn btn-danger' onClick={() => { removeCartItem(p._id) }} >Remove</button>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-md-3">
                            <h2>Cart Summary</h2>
                            <p>Total | Checkout | Payment</p>
                            <hr />
                            <h4>Total : {totalPrice()} </h4>
                            {auth?.user?.address ? (
                                <>
                                    <div className="mb-3">
                                        <h4>Current Address</h4>
                                        <h5>{auth?.user?.address}</h5>
                                        <button
                                            className="btn btn-outline-warning"
                                            onClick={() => navigate("/dashboard/user/profile")}
                                        >
                                            Update Address
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="mb-3">
                                    {auth?.token ? (
                                        <button
                                            className="btn btn-outline-warning"
                                            onClick={() => navigate("/dashboard/user/profile")}
                                        >
                                            Update Address
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-outline-warning"
                                            onClick={() =>
                                                navigate("/login", {
                                                    state: "/cart",
                                                })
                                            }
                                        >
                                            Plase Login to checkout
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
