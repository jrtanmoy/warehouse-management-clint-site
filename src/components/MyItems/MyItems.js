import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItem?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        }
        getMyItems();

    }, [user])
    return (
        <div>
            <h1>Your items: {myItems.length}</h1>
        </div>
    );
};

export default MyItems;