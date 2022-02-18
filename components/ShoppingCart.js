import React from 'react';
import { Box, Heading, Center, Image, Text, Button } from 'native-base';

const ShoppingCart = () => {
  return(
    <Center>
      <Box w="90%">
        <Image
          alignSelf="center"
          size="xl"
          alt="carrito"
          my={7}
          source={{
            uri: "https://cdn-icons.flaticon.com/png/512/4201/premium/4201454.png?token=exp=1645154129~hmac=374e416cb66fcb41fd04ccdd2a060258"
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

        <Text my={2} alignSelf="center">Los artículos agregados al carrito aparecerán aquí</Text>
        <Button mt={4} variant="subtle" size="lg" colorScheme="indigo">Ir a la página principal</Button>
      </Box>
    </Center>
  )
}

export default ShoppingCart
