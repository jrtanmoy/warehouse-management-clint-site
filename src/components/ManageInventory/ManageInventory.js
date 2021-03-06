import React from 'react';

import '../Inventory/Inventory.css';

const ManageInventory = ({ inventory, ui }) => {
    console.log(inventory);
    const { _id, name, supplierName, img, description, price, quantity } = inventory;
    const { inventories, setInventories } = ui;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://thawing-eyrie-73299.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                })

        }
    }
    return (
        <div className='inventory'>
            <img className='img-fluid' src={img} alt="" />
            <div className='inventory-info mt-4'>
                <h2 className='text-primary'>{name}</h2>
                <h4>Supplier Name: {supplierName}</h4>
                <p>Price: ${price}/Container</p>
                <p>Quantity: {quantity} Container</p>
                <p><small>{description}</small></p>
            </div>
            <button onClick={() => handleDelete(_id)} className='btn-cart'>Delete</button>
        </div>
    );
};

export default ManageInventory;