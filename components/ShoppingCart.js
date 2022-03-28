import React from 'react';
import { Box, Heading, Center, Image, Text } from 'native-base';

const ShoppingCart = () => {
  return(
    <Box h="90%" style={{justifyContent: 'center'}}>
    <Center>
      <Box w="90%">
        <Image
          alignSelf="center"
          size="xl"
          alt="carrito"
          my={7}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
          }} />
        <Heading
          alignSelf="center"
          size="xl"
          fontWeight="600"
          color="black"
          _dark={{ color: "white" }}>
            Carrito de compras
        </Heading>

        <Heading
          alignSelf="center"
          size="md"
          fontWeight="400"
          color="black"
          _dark={{ color: "white" }}>
            ¡No tienes artículos en tu carrito!
        </Heading>

        <Text my={2} alignSelf="center">Agrega articulos a tu carrito desde la página principal</Text>
      </Box>
    </Center>
    </Box>
  )
}

export default ShoppingCart
