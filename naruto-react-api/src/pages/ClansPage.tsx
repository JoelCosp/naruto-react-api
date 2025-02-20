import React, { useEffect, useState } from 'react'
import { getClans, Object } from "../services/Services";

import CardListComponent from "../components/CardListComponent";

const ClansPage = () => {

    const [clans, setClans] = useState<Object[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getClans();
            setClans(data.clans);
            setLoading(false);
        }

        fetchData();
    }, [])

  return (
    <div>
      {loading === true ? <p className="text-center p-[70px] font-semibold">Loading...</p> : <CardListComponent data={clans}/>}
    </div>
  )
}

export default ClansPage
