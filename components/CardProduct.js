import React from 'react';
import {
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  Text,
  HStack 
} from 'native-base';

const CardProduct = (props) => {
  return(
    <Box /* Estilo producto */
      mb="3"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'gray.700',
      }}
      light={{backgroundColor: 'gray.50'}}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image source={{
            uri: props.url, /* Colocando la imagen del producto */
          }}
          alt="image" />
        </AspectRatio>
        <Center
          bg="teal.500"
          _dark={{bg: 'violet.400'}}
          _text={{
            color: 'warmGray.50',
            fontWeight: '700',
            fontSize: 'xs',
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          Productos nuevos
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {props.nombreProducto}
          </Heading>
          <Text fontSize="xs" _light={{
            color: 'teal.500',
          }} _dark={{
            color: 'violet.400',
          }} fontWeight="500" ml="-0.5" mt="-1">
            Precio: ${props.precioProducto}.00
          </Text>
        </Stack>
        <Text fontWeight="400">
          {props.descripcion}
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="coolGray.600" _dark={{
              color: 'warmGray.200',
            }} fontWeight="400">
              Publicado hace 50 minutos
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  ) 
}

export default CardProduct
