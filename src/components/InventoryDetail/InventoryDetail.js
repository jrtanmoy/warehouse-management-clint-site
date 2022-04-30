import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    return (
        <div className='container mt-4'>
            <h2>Welcome to detail: {inventoryId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;