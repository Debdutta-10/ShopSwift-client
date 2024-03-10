import React from 'react'
import './CategoryForm.css'
const CategoryForm = ({ handleSubmit, value, setvalue, butvisible }) => {
    return (
        <>
            <form onSubmit={handleSubmit} className='mob-form'>
                <input type="text" className="form-control" placeholder="Enter new Category" value={value} onChange={(e) => {
                    setvalue(e.target.value)
                }} />
                {butvisible && <button type="submit" className="btn btn-primary my-3">Submit</button>}
            </form>
        </>
    )
}

export default CategoryForm;
