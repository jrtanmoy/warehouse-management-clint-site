import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';


const AddNewItem = () => {
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user);
    }

    const addItem = event => {
        event.preventDefault();
        const item = {
            supplierName: user.displayName,
            email: user.email,
            name: event.target.itemName.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            description: event.target.description.value,
            img: event.target.img.value

        }
        axios.post('http://localhost:5000/inventory', item)
            .then(response => {
                // console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    toast('Your item is added!!');
                    event.target.reset();
                }
            })

    }


    return (
        <div className='w-50 mx-auto mt-4'>
            <h1>Please add new item.</h1>
            <form onSubmit={addItem}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder="name" required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder="email" required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="itemName" placeholder="Item name" required />
                <br />
                <input className='w-100 mb-2' type="number" name="price" placeholder="Price" required />
                <br />
                <input className='w-100 mb-2' type="number" name="quantity" placeholder="Quantity" required />
                <br />
                <input className='w-100 mb-2' type="text" name="description" placeholder="Description" required />
                <br />
                <input className='w-100 mb-2' type="text" name="img" placeholder="Photo URl" required />
                <br />
                <input className='btn btn-primary' type="submit" value="Add Item" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddNewItem;