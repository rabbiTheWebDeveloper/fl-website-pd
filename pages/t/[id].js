import axios from 'axios';
import { TrackerPage } from '../../Components/Tracker/TrackerPage';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import ErrorPage from '../../Components/Tracker/ErrorPage/ErrorPage';


export default function Tracking() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [orderTracking, setOrderTracking] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderTracking = async (id) => {
      try {
        const response = await axios.get(`${process.env.API_URL}/order-tracker/${id}`);
        if (response.status === 200 && response?.data.success===true) {
          setOrderTracking(response?.data?.data);
        }else {
          setError(response?.data?.message)
        }
      } catch (err) {
        setError(err?.message);
      } finally {
        setIsLoading(false);
      }
    };
  if(router?.query?.id){
    fetchOrderTracking(router?.query?.id);
  }  
  }, [router?.query?.id]);

  if(isLoading){
    return <h1 style={{textAlign:"center", marginTop:"80px"}}>Loading.....</h1>
  }
  if(error){
    return <ErrorPage error={error}/>
  }

  return <TrackerPage orderTracking={orderTracking} error={error} isLoading={isLoading}/>;
}

