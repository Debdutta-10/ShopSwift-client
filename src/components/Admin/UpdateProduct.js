import React, { useState, useEffect } from 'react'
import AdminMenu from './AdminMenu'
import './CreateProduct.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate ,useParams} from "react-router-dom";
import { Select } from 'antd';
const { Option } = Select;



const UpdateProduct = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [shipping, setShipping] = useState(false);
    const [id,setId] = useState();

    const getAllCategories = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/api/v1/category/get-category');
            if (data?.success) {
                setCategories(data?.categories);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong in getting Categories');
        }
    };
    //Updating a product
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const productData = new FormData();
            productData.append("name", name);
            productData.append("description", description);
            productData.append("price", price);
            productData.append("quantity", quantity);
            photo && productData.append("photo", photo);
            productData.append("category", category);
            const { data } = axios.put(
                `http://localhost:8000/api/v1/product/update-product/${id}`,
                productData
            );
            if (data?.success) {
                toast.error(data?.message);
            } else {
                toast.success("Product Updated Successfully");
                navigate("/dashboard/admin/products");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    //Deleting a product
    const handleDelete = async()=>{
        try {
            let ans = window.prompt("Do you want to delete this product ?");
            if(!ans) return;
            const {data} = await axios.delete(`http://localhost:8000/api/v1/product/delete-product/${id}`)
            toast.success("Product Deleted Successfully");
            navigate("/dashboard/admin/products");
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }
    const getSingleProduct= async()=>{
        try {
            const {data} = await axios.get(`http://localhost:8000/api/v1/product/get-product/${params.slug}`);
            setId(data.product._id);
            setName(data.product.name);
            setDescription(data.product.description);
            setPrice(data.product.price);
            setQuantity(data.product.quantity);
            setShipping(data.product.shipping);
            setCategory(data.product.category._id)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllCategories();
    }, []);
    useEffect(() => {
        getSingleProduct();
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu></AdminMenu>
                    </div>
                    <div className="col-md-9">
                        <h2 className='mob-heading'>Update products</h2>
                        <div className="m-1">
                            <Select
                                variant={false}
                                placeholder="Select a category"
                                size="large"
                                showSearch
                                className="form-select mb-3 w-75 mob-input"
                                onChange={(value) => {
                                    setCategory(value);
                                }}
                                value={category}

                            >
                                {categories?.map((c) => (
                                    <Option key={c._id} value={c._id}>
                                        {c.name}
                                    </Option>
                                ))}
                            </Select>
                            <div className="mb-3">
                                <label
                                    className='btn btn-outline-secondary w-75 mob-input'>
                                    {photo ? photo.name : "Upload Photo"}
                                    <input type="file" name="photo" accept='image/*' onChange={(e) => setPhoto(e.target.files[0])}
                                        hidden />
                                </label>
                            </div>
                            <div className="mb-3">
                                {photo ? (
                                    <div className="text-center">
                                        <img src={URL.createObjectURL(photo)} alt="product-photo" height={'200px'} className='img img-responsive' />
                                    </div>
                                ):(
                                    <div className="text-center">
                                    <img src={`http://localhost:8000/api/v1/product/product-photo/${id}`} alt="product-photo" height={'200px'} className='img img-responsive' />
                                </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={name}
                                    placeholder='Write a Name'
                                    onChange={(e) => setName(e.target.value)}
                                    className='input-group form-control w-75 mob-input'
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={description}
                                    placeholder='Enter Description'
                                    onChange={(e) => setDescription(e.target.value)}
                                    className='input-group form-control w-75 mob-input'
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Write a price</label>
                                <input
                                    type="number"
                                    value={price}
                                    placeholder="Write a Price"
                                    className="form-control w-75 mob-input"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Write a quantity</label>
                                <input
                                    type="number"
                                    value={quantity}
                                    placeholder="Write a quantity"
                                    className="form-control w-75 mob-input"
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <Select
                                    variant={false}
                                    placeholder="Select Shipping "
                                    size="large"
                                    showSearch
                                    className="form-select mb-3 w-75 mob-input"
                                    onChange={(value) => {
                                        setShipping(value);
                                    }}
                                    value={shipping?"Yes":"No"}
                                >
                                    <Option value="0">No</Option>
                                    <Option value="1">Yes</Option>
                                </Select>
                            </div>
                            <div className="mb-3 mob-input">
                                <button className="btn btn-primary mob-input" onClick={handleUpdate}>
                                    Update Product
                                </button>
                            </div>
                            <div className="mb-3 mob-input">
                                <button className="btn btn-danger mob-input" onClick={handleDelete}>
                                    Delete Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct;
