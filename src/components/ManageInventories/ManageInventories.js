import React from 'react';
import useInventories from '../Hooks/useInventories';
import ManageInventory from '../ManageInventory/ManageInventory';
import '../Inventories/Inventories.css'
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories([]);
    return (
        <div id="inventories" className='container'>
            <div className="row">
                <h1 className='text-success text-center mt-5 mb-5'>Inventory Items</h1>
                <div className="p-2 gap-5 inventories-container">
                    {
                        inventories.map(inventory => <ManageInventory
                            key={inventory._id}
                            inventory={inventory}
                            ui = {{inventories,setInventories}}
                        >
                        </ManageInventory>)
                       
                    }
                </div>
                <Link
                    to='/addnewitem'
                    className='btn btn-primary w-25 mx-auto mt-5 mb-5 fs-4'
                >
                    Add New Item
                </Link>
            </div>
        </div>
    );
};

export default ManageInventories;