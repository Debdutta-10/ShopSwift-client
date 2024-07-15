import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/product/get-product/${slug}`);
                setProduct(response.data.product);
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch product details");
                console.error("Error fetching product:", error);
                setLoading(false);
            }
        };

        if (slug) {
            getProduct();
        }
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2 style={{textAlign:"center"}}>Product Details</h2>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly", marginTop: "20px" }}>
                <div>
                    <img src={`http://localhost:8000/api/v1/product/product-photo/${product._id}`} alt="Product" style={{ width: "100%" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Price:</strong> Rs. {product.price}</p>
                    <p><strong>Category:</strong> {product.category ? product.category.name : "N/A"}</p>
                    <button className="btn btn-primary" onClick={() => navigate(`/product/${product.slug}`)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
