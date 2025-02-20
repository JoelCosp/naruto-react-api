import React, { useEffect, useState } from 'react'
import { getVillages, Object } from "../services/Services";

import CardListComponent from "../components/CardListComponent";


const VillagesPage = () => {
    const [villages, setVillages] = useState<Object[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getVillages();
            setVillages(data.villages);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {loading === true ? <p className="text-center p-[70px] font-semibold">Loading...</p> : <CardListComponent data={villages}/>}
        </div>
    )
}

export default VillagesPage
