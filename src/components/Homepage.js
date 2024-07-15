import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Prices } from "../components/Prices";
import { Checkbox, Radio } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import {useCart} from '../context/cart'

const Homepage = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState('');
  const [cart,setCart] = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  useEffect(() => {
    filterProduct();
  }, [checked, radio]);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('http://localhost:8000/api/v1/product/get-product');
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error('Failed to fetch products.');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/v1/category/get-category');
      if (data?.success) {
        setCategories(data?.categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Something went wrong in getting Categories');
    }
  };

  const handleFilter = (checkedValues) => {
    setChecked(checkedValues);
  };

  const handlePriceFilter = (e) => {
    setRadio(e.target.value);
  };

  const filterProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:8000/api/v1/product/product-filters", {
        checked,
        radio,
      });
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error('Failed to filter products.');
      }
    } catch (error) {
      console.error('Error filtering products:', error);
      toast.error('Failed to filter products.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <div className="row mt-3">
        <div className="col-md-3">
          <h4 style={{textAlign:"center"}} >Filter by Category</h4>
          <Checkbox.Group value={checked} onChange={handleFilter}>
            {categories.map(c => (
              <Checkbox key={c._id} value={c._id}>{c.name}</Checkbox>
            ))}
          </Checkbox.Group>

          <div className='my-3'>
            <h4 style={{textAlign:"center"}}>Filter By Price</h4>
            <Radio.Group onChange={handlePriceFilter} value={radio}>
              {Prices.map((p) => (
                <Radio key={p._id} value={p.array}>{p.name}</Radio>
              ))}
            </Radio.Group>
          </div>
          <div  className="d-flex flex-column ">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
              style={{width:"90%",display:"block",margin:"auto"}}
            >
              Reset Filters
            </button>
          </div>
        </div>


        <div className='col-md-9 mob-homepage'>
          <h1 className='text-center'>All Products</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="d-flex flex-wrap mob-homepage">
              {products.length > 0 ? (
                products.map(p => (
                  <div className="col-md-4 mb-4" key={p._id}>
                    <div className="card" style={{ width: '18rem' }}>
                      <img className="card-img-top" src={`http://localhost:8000/api/v1/product/product-photo/${p._id}`} alt="Product" />
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">
                          {p.description.substring(0, 32)}...
                        </p>
                        <p className="card-text">
                          Rs. {p.price}
                        </p>
                        <button className='btn btn-primary ms-1' onClick={()=>navigate(`/product/${p.slug}`)}>More Details</button>
                        <button className='btn btn-secondary ms-1' onClick={()=>{
                          setCart([...cart,p]); 
                          localStorage.setItem('cart',JSON.stringify([...cart,p]));
                          toast.success("Item Added to Cart")}
                          
                          }>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
