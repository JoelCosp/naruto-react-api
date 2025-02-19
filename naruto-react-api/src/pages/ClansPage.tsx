import React, { useEffect, useState } from 'react'
import { getClans, Object } from "../services/Services";

import CardListComponent from "../components/CardListComponent";

const ClansPage = () => {

    const [clans, setClans] = useState<Object[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getClans();
            setClans(data.clans);
        }

        fetchData();
    }, [])

  return (
    <CardListComponent data={clans}/>
  )
}

export default ClansPage
