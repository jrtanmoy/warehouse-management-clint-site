import React from 'react';
import useMyItems from '../Hooks/useMyItems';
import '../Inventories/Inventories.css'
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [myItems, setMyItems] = useMyItems([])
    return (
        <div id="inventories" className='container'>
            <div className="row">
                <h1 className='text-success text-center mt-5 mb-5'>My Items:{myItems.length}</h1>
                <div className="p-2 gap-5 inventories-container">
                    {
                        myItems.map(myItem => <MyItem
                            key={myItem._id}
                            myItem={myItem}
                            ui={{ myItems, setMyItems }}
                        >
                        </MyItem>)

                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;