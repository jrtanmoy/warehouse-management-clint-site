import React from 'react';
import useInventories from '../Hooks/useInventories';
import ManageInventory from '../ManageInventory/ManageInventory';
import '../Inventories/Inventories.css'

const ManageInventories = () => {
    const [inventories] = useInventories([]);
    return (
        <div id="inventories" className='container'>
            <div className="row">
                <h1 className='text-success text-center mt-5 mb-5'>Inventory Items</h1>
                <div className="p-2 gap-5 inventories-container">
                    {
                        inventories.map(inventory => <ManageInventory
                            key={inventory._id}
                            inventory={inventory}
                        >
                        </ManageInventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;