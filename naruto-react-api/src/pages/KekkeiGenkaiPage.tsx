import React, { useEffect, useState } from 'react'
import { getKekkeiGenkai, Object } from "../services/Services";

import CardListComponent from "../components/CardListComponent";

const ClansPage = () => {

    const [kekkei, setKekkeiGenkai] = useState<Object[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getKekkeiGenkai();
            setKekkeiGenkai(data.kekkeiGenkai);
            setLoading(false);
        }

        fetchData();
    }, [])

  return (
    <div>
        {loading === true ? <p className="text-center p-[70px] font-semibold">Loading...</p> : <CardListComponent data={kekkei}/>}
    </div>
  )
}

export default ClansPage
