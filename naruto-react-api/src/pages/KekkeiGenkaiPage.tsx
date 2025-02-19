import React, { useEffect, useState } from 'react'
import { getKekkeiGenkai, Object } from "../services/Services";

import CardListComponent from "../components/CardListComponent";

const ClansPage = () => {

    const [kekkei, setKekkeiGenkai] = useState<Object[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getKekkeiGenkai();
            setKekkeiGenkai(data.kekkeiGenkai);
        }

        fetchData();
    }, [])

  return (
    <CardListComponent data={kekkei}/>
  )
}

export default ClansPage
