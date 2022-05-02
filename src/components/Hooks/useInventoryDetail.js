import { useEffect, useState } from "react";

const useInventoryDetail = inventoryId =>{
    const [inventory, setInventroy] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setInventroy(data));
    }, [inventoryId]);
    return [inventory] 
}

export default useInventoryDetail;