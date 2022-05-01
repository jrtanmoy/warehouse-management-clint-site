import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Inventory/Inventory.css'

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventroy] = useState({});
    

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setInventroy(data));
    })

    const handleUpdateRestock = event =>{
        event.preventDefault();
        const { quantity } = inventory;
        const oldquantity = parseInt(quantity);
        const restockquantity = parseInt(event.target.quantity.value);
        const totalQuantity = oldquantity+ restockquantity;

        const updatedStock = {totalQuantity};

        // send data to the server
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Restock the item quantity successfully!!!');
            event.target.reset();
        })
    }

    const handleUpdateDelivered = () =>{
        
        const { quantity } = inventory;
        const oldquantity = parseInt(quantity);
        
        const totalQuantity = oldquantity - 1;

        const updatedStock = {totalQuantity};

        // send data to the server
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Delivered successfully!!!');
        })
    }


    return (
        <div className='container'>
            <h2 className='text-center  mt-4 mb-4'>Welcome to detail</h2>
            <div className='row gx-2 d-flex align-items-center justify-content-center'>
                <div className='col inventory'>
                    <img className='img-fluid' src={inventory.img} alt="" />
                    <div className='inventory-info mt-4'>
                        <h2 className='text-primary'>{inventory.name}</h2>
                        <h4>Supplier Name: {inventory.supplierName}</h4>
                        <p>Price: ${inventory.price}</p>
                        <p>Quantity: {inventory.quantity}</p>
                        <p><small>{inventory.description}</small></p>
                    </div>
                </div>

                <div className='col text-center mt-4 mb-5 '>
                    <div className='mb-4'>
                        <form onSubmit={handleUpdateRestock}>
                            <h5>Restock the items</h5>
                            <input className='mb-2' type="number" name="quantity" placeholder='Quantity' required />
                            <br />
                            <input type="submit" value="Add" />
                        </form>
                    </div>
                    <div className='mb-4'>
                        <button onClick={handleUpdateDelivered} className='btn btn-primary w-25 mx-auto'>Delivered</button>
                    </div>
                    <div className='mb-4'>
                        <Link to='/checkout'>
                            <button className='btn btn-primary w-25 mx-auto'>Proceed Checkout</button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/manageinventories'>
                            <button className='btn btn-primary w-25 mx-auto'>Manage Inventories</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;