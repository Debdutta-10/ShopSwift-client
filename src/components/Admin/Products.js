import React, { useEffect, useState } from 'react';
import AdminMenu from '../Admin/AdminMenu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/api/v1/product/get-product');
            if (data?.success) {
                setProducts(data.products);
            } else {
                toast.error('Something went wrong in getting Categories');
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong in getting Categories');
        }
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu />
            </div>
            <div className='col-md-9'>
                <h1 className='text-center'>All Products List</h1>
                <div className="container">
                    <div className="row">
                        {products?.map(p => (
                            <div className="col-md-4 mb-4" key={p._id}>
                                <Link className='product-link' to={`/dashboard/admin/product/${p.slug}`}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={`http://localhost:8000/api/v1/product/product-photo/${p._id}`} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{p.name}</h5>
                                            <p className="card-text">
                                                {p.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
