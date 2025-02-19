import React, { useEffect, useState } from 'react'
import { getVillages, Object } from "../services/Services";

import CardListComponent from "../components/CardListComponent";


const VillagesPage = () => {
    const [villages, setVillages] = useState<Object[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getVillages();
            setVillages(data.villages);
        }

        fetchData();
    });

    return (
        <CardListComponent data={villages}/>
    )
}

export default VillagesPage
