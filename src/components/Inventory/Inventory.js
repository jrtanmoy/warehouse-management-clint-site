import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    console.log(inventory);
    const { _id, name, supplierName, img, description, price, quantity } = inventory;
    const navigate = useNavigate();
    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='inventory'>
            <img className='img-fluid' src={img} alt="" />
            <div className='inventory-info mt-4'>
                <h2 className='text-primary'>{name}</h2>
                <h4>Supplier Name: {supplierName}</h4>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p><small>{description}</small></p>
            </div>
            <button onClick={() => navigateToInventoryDetail(_id)} className='btn-cart'>Update</button>
        </div>
    );
};

export default Inventory;