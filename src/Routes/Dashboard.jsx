import axios from 'axios';
import { useEffect, useState } from "react";
import React from 'react'
import { Box } from '@chakra-ui/react';
import ProductCard from '../Components/ProductCard';

const Dashboard = () => {
const [data,setData]=useState([])
    useEffect(() => {
        getData()
      }, []);  
    const getData = async () => {
        const response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=2`);
        const { data } = response;
        setData(data.data)
        console.log(data.data)


    };

  return (
    <div>
    <Box bg='tomato' w='100%' p={4} color='white' textAlign='center'>Welcome To Dashboard</Box>
    <div style={{display:"flex", gap:"20px",marginTop:"30px"}}>
    {data.map((item)=> {
            return(
                        <div style={{display:"flex"}}>
                        <ProductCard 
                        image={item.image}
                        title={item.title}
                        brand={item.brand}
                        price={item.price}
                        category={item.category}
                        ></ProductCard>
                        </div>
            )
})}
    </div>
    </div>
  )
}

export default Dashboard