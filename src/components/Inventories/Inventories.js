import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    return (
        <div id="inventories" className='container'>
        <div className="row">
            <h1 className='text-success text-center mt-5 mb-5'>Inventory Items</h1>
            <div className="p-2 gap-5 inventories-container">
                {
                    inventories.slice(0,6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    >
                    </Inventory>)
                }
            </div>
        </div>
    </div>
    );
};

export default Inventories;