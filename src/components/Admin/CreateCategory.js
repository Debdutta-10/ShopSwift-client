import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminMenu from './AdminMenu';
import axios from 'axios';
import CategoryForm from '../Form/CategoryForm';
import { Modal } from 'antd';
import '../Form/CategoryForm.css'

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:8000/api/v1/category/create-category', { name });
            if (data?.success) {
                toast.success(`${name} is created`);
                getAllCategories();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

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

    useEffect(() => {
        getAllCategories();
    }, []);

    const handleUpdate = async (e) => {
        try {
            const { data } = await axios.put(`http://localhost:8000/api/v1/category/update-category/${selected._id}`, { name: updatedName });
            if (data.success) {
                toast.success("Category Updated Successfully");
                setSelected(null);
                setUpdatedName("");
                setVisible(false);
                getAllCategories();
            } else {
                toast.error("Couldn't update..Try Again");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:8000/api/v1/category/delete-category/${id}`);
            if (data.success) {
                toast.success(`${name} Deleted Successfully`);
                getAllCategories();
            } else {
                toast.error("Couldn't delete..Try Again");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className='mob-form-container'>
                        <div className="col-md-9">
                            <h2>Create Category</h2>
                            <div className="p3">
                                <CategoryForm handleSubmit={handleSubmit} value={name} setvalue={setName} butvisible={true} />
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map(c => (
                                        <tr key={c._id}>
                                            <td>{c.name}</td>
                                            <td>
                                                <button className='btn btn-primary mx-2' onClick={() => { setVisible(true); setUpdatedName(c.name); setSelected(c) }}>Edit</button>
                                                <button className='btn btn-danger mx-2' onClick={() => handleDelete(c._id)}>Delete</button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Modal onCancel={() => setVisible(false)} onOk={handleUpdate} visible={visible}>
                            <CategoryForm value={updatedName} setvalue={setUpdatedName} butvisible={false} />
                        </Modal>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateCategory;
