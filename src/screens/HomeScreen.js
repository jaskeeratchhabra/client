import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import Rooms from '../components/Rooms';
import Loading from '../components/Loading';
function HomeScreen() {

  const [rooms,setRooms]=useState([]);
  const [loading,setLoading]=useState();
  const [error,setError]=useState()
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        setLoading(true);
         const data=(await axios.get('/api/rooms/getallrooms')).data;
         setRooms(data);
         setLoading(false);
      }
      catch(error){
        setError(error);
         console.log(error);
         setLoading(false)
      }
    }
    fetchData();
},[])


  return (
    <div className='flex flex-wrap  dark:bg-gray-400'>
       {loading?<Loading/>: error?(<h1>error</h1>):(
        rooms.map((room)=>{
          return <div key={room._id}>
            <Rooms room={room}/>
          </div>
        }))
       }
  </div>
)
}

export default HomeScreen
