import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Inventory/Inventory.css'
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventroy] = useState({});
    


    useEffect(() => {
        const url = `https://thawing-eyrie-73299.herokuapp.com/inventory/${inventoryId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setInventroy(data));
    })

    const handleUpdateRestock = event => {
        event.preventDefault();
        const { quantity } = inventory;
        const oldquantity = parseInt(quantity);
        const restockquantity = parseInt(event.target.quantity.value);
        const totalQuantity = oldquantity + restockquantity;

        const updatedStock = { totalQuantity };

        // send data to the server
        const url = `https://thawing-eyrie-73299.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Restock the item quantity successfully!!!');
                event.target.reset();
            })
    }

    const handleUpdateDelivered = () => {

        const { quantity } = inventory;
        const oldquantity = parseInt(quantity);

        const totalQuantity = oldquantity - 1;

        const updatedStock = { totalQuantity };

        // send data to the server
        const url = `https://thawing-eyrie-73299.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Delivered successfully!!!');
            })
    }


    return (
        <div className='container'>
            <h2 className='text-center  mt-4 mb-4'>Welcome to detail</h2>
            <div className='inventoryDetail-container'>
                
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='inventory'>
                        <img className='img-fluid' src={inventory.img} alt="" />
                        <div className='inventory-info mt-4'>
                            <h2 className='text-primary'>{inventory.name}</h2>
                            <h4>Supplier Name: {inventory.supplierName}</h4>
                            <p>Price: ${inventory.price}</p>
                            <p>Quantity: {inventory.quantity}</p>
                            <p>Item ID: {inventory._id}</p>

                            <p><small>{inventory.description}</small></p>
                        </div>
                    </div>
                </div>

                <div className='  d-flex align-items-center justify-content-center mt-4 mb-5 '>
                    <div className='text-center'>
                    <div className='mb-4'>
                        <form className='mb-5' onSubmit={handleUpdateRestock}>
                            <h5 className='mb-4'>Restock the items:</h5>
                            <div className='d-flex'>
                            <input className='mb-2 fs-5 p-2 rounded' type="number" name="quantity" placeholder='Quantity' required />
                           
                            <input className='mb-2 ms-4 fs-5 p-2 rounded' type="submit" value="Add" />
                            </div>
                        </form>
                    </div>
                    <div className='mb-4'>
                        <button onClick={handleUpdateDelivered} className='btn btn-primary w-100 mx-auto fs-5'>Delivered</button>
                    </div>
                    <div>
                        <Link to='/manageinventories'>
                            <button className='btn btn-primary w-100 mx-auto fs-5'>Manage Inventories</button>
                        </Link>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InventoryDetail;