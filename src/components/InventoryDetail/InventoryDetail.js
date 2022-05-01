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
                        <Link to='/checkout'>
                            <button className='btn btn-primary'>Proceed Checkout</button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/manageinventories'>
                            <button className='btn btn-primary'>Manage Inventories</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;