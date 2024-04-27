import React from 'react'
import AddProductForm from '../../forms/AddProductForm'
import { Link } from 'react-router-dom'
import logo from '/src/assets/img.jpg';

function AddProductPage() {
    return (
        
        <div>
            <img className="logo" src={logo} alt="" />

            <div className='adminheader'>
            <h1>Add product</h1>
            <Link to="/dashboard"> <button>Go To Dashboard</button></Link>
            </div>
            <AddProductForm />
        </div>
    )
}

export default AddProductPage