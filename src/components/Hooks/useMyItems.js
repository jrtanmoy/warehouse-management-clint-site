import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const useMyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/inventoryForUser?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        }
        getMyItems();

    }, [user])
    return [myItems, setMyItems]
};

export default useMyItems;