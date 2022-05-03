import React from 'react';
import allactivity from '../../images/warehouseallproduction.png';
import './Distribution.css'

const Distribution = () => {
    return (

        <div className="clearfix container mt-5 pb-5 fs-5">

            <div id="div2" className='css-animation mb-5'>
                <h2 className=" text-white text-center">All Activity</h2>
            </div>
            <img src={allactivity} className="col-md-6 float-md-end mb-3 ms-md-3 w-50" alt="..." />

            <p>
                <h3>
                    1. Receiving
                </h3>
                <p>
                    Receiving is the first warehouse process and one of the most crucial. To perform the receiving process properly, our warehouse is able to verify that it has received the right product, in the right quantity, in the right condition, and at the right time. Failing to do so will have consequent impacts on all subsequent operations.
                </p>
            </p>
            <p>
                <h3>
                    2. Put-Away
                </h3>
                <p>
                    Put-away is the second warehouse process and is the movement of goods from the receiving dock to the most optimal warehouse storage location. Failing to place goods in their most ideal location can impair the productivity of warehouse operation.
                </p>
            </p>
            <p>
                <h3>
                    3. Storage
                </h3>
                <p>
                    Storage is the warehouse process in which goods are placed into their most appropriate storage space. When done properly, the storage process fully maximizes the available space in our warehouse and increases labor efficiency.
                </p>
            </p>
            <p>
                <h3>
                    4. Packing
                </h3>
                <p>
                    Packing is the warehouse process that consolidates picked items in a sales order and prepares them for shipment to the customer. One of the primary tasks of packing is to ensure that damages are minimized from the time items leave the warehouse.
                </p>
            </p>
            <p>
                <h3>
                    5. Shipping
                </h3>
                <p>
                    To optimize the shipping process, our software systems handle many of the tasks is critical. Labor management systems let us allocate the right amount of resources to prevent over or under allocation.
                </p>
            </p>

        </div>
    );
};

export default Distribution;