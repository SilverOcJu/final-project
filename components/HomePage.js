import React from 'react';
import {
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  Text,
  HStack,
  ScrollView,
} from 'native-base';

const HomePage = () => {
  return (
    <ScrollView maxH="690">
      <Box /* Estilo primer producto*/
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
              uri: 'https://cdn.pixabay.com/photo/2018/11/02/16/50/gold-jewelry-3790542_960_720.jpg', /* Colocando la imagen del producto */
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
              Brazalete
            </Heading>
            <Text fontSize="xs" _light={{
              color: 'teal.500',
            }} _dark={{
              color: 'violet.400',
            }} fontWeight="500" ml="-0.5" mt="-1">
              $800.00
            </Text>
          </Stack>
          <Text fontWeight="400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus posuere semper velit hendrerit tempor. Integer
            rutrum vitae velit malesuada efficitur. Vivamus blandit
            tellus eget eros feugiat finibus.
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

      <Box /* Estilo segundo producto*/
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
              uri: 'https://cdn.pixabay.com/photo/2017/07/27/08/45/wedding-2544405_960_720.jpg', /* Colocando la imagen del producto */
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
            ¡Oferta!
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Par de anillos
            </Heading>
            <Text strikeThrough>$2000</Text>
            <Text fontSize="xs" _light={{
              color: 'teal.500',
            }} _dark={{
              color: 'violet.400',
            }} fontWeight="500" ml="-0.5" mt="-1">
              $1600
            </Text>
          </Stack>
          <Text fontWeight="400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus posuere semper velit hendrerit tempor. Integer
            rutrum vitae velit malesuada efficitur. Vivamus blandit
            tellus eget eros feugiat finibus.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
                color: 'warmGray.200',
              }} fontWeight="400">
                Publicado hace 3 horas
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>

      <Box /* Estilo tercer producto*/
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
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fk46.kn3.net%2Ftaringa%2F4%2F9%2F2%2F3%2F1%2F1%2FBeriku%2F456.jpg&f=1&nofb=1', /* Colocando la imagen del producto */
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
              Calaveras mexicanas
            </Heading>
            <Text fontSize="xs" _light={{
              color: 'teal.500',
            }} _dark={{
              color: 'violet.400',
            }} fontWeight="500" ml="-0.5" mt="-1">
              $650.00
            </Text>
          </Stack>
          <Text fontWeight="400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus posuere semper velit hendrerit tempor. Integer
            rutrum vitae velit malesuada efficitur. Vivamus blandit
            tellus eget eros feugiat finibus.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
                color: 'warmGray.200',
              }} fontWeight="400">
                Publicado hace más de un mes
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>

      <Box /* Estilo cuarto producto*/
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
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-3.expansion.mx%2Fdims4%2Fdefault%2Ff79fd27%2F2147483647%2Fstrip%2Ftrue%2Fcrop%2F2592x1728%2B0%2B0%2Fresize%2F1800x1200!%2Fquality%2F90%2F%3Furl%3Dhttps%253A%252F%252Fcdn-3.expansion.mx%252F8c%252F28%252F230af82b4f1e93db2d6b0be65480%252Fimg-0324.JPG&f=1&nofb=1', /* Colocando la imagen del producto */
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
              Molcajetes decorados
            </Heading>
            <Text fontSize="xs" _light={{
              color: 'teal.500',
            }} _dark={{
              color: 'violet.400',
            }} fontWeight="500" ml="-0.5" mt="-1">
              $650.00
            </Text>
          </Stack>
          <Text fontWeight="400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus posuere semper velit hendrerit tempor. Integer
            rutrum vitae velit malesuada efficitur. Vivamus blandit
            tellus eget eros feugiat finibus.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
                color: 'warmGray.200',
              }} fontWeight="400">
                Publicado hace más de un mes
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </ScrollView>
  );
};

export default HomePage;
