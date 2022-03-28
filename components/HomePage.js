import React from 'react';
import { ScrollView, Box, Pressable } from 'native-base';
import CardProduct from './CardProduct';
import { useEffect, useState } from 'react';
// Funciones de la API
import axios from 'axios';

const HomePage = () => {
//  axios.get(`https://us-east-1.aws.data.mongodb-api.com/app/movies-qiyir/endpoint/shopproducts`).then((response) => {
//    const productos = response.data;
//    console.log(productos);
//  });

  const [list, setList] = useState([]);
  const link = `https://us-east-1.aws.data.mongodb-api.com/app/movies-qiyir/endpoint/shopproducts`;

  async function getProducts () {
    try {
      const response = await axios.get(link);
      setList([...list, ...response.data]);
    } catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])
  
  return (
    <Box h="90%">
    <ScrollView>
      {console.log(list)}
      {
        list.map((product) => (
          <Pressable onPress={() => console.log(product.nombre)}>
          <CardProduct
            url={product.url}
            nombreProducto={product.nombre}
            precioProducto={product.precio.$numberLong}
            descripcion={product.descripcion}
          />
          </Pressable>))
      }
    </ScrollView>
    </Box>
  );
};

export default HomePage;
