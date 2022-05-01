import React from 'react';
import { Link } from 'react-router-dom';
import useInventories from '../Hooks/useInventories';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories] = useInventories([]);

    return (
        <div id="inventories" className='container'>
            <div className="row">
                <h1 className='text-success text-center mt-5 mb-5'>Inventory Items</h1>
                <div className="p-2 gap-5 inventories-container">
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        >
                        </Inventory>)
                    }
                </div>
                <Link
                    to='/manageinventories'
                    className='btn btn-primary w-25 mx-auto mt-4 fs-4'
                >
                    Manage Inventories
                </Link>
            </div>
        </div>
    );
};

export default Inventories;