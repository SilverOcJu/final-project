import {useState} from 'react';
import {NativeBaseProvider, Box, Center, HStack, Pressable, Icon, Text} from 'native-base';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { } from 'react-native';

const AppFooter = () => {
  const [seleccionado, setSeleccionado] = useState(0);

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center">
        <Center flex={1}></Center>
        <HStack bg="info.800" alignItems="center" safeAreaBottom shadow={6}>
          {/* Para el botón de Home */}
          <Pressable opacity={seleccionado === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSeleccionado(0)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={seleccionado === 0 ? 'home' : 'home-outline'}/>} color="white" size="sm" />
              <Text color="white" fontSize="12">Página principal</Text>
            </Center>
          </Pressable>
          {/* Para el botón de Carrito */}
          <Pressable opacity={seleccionado === 1 ? 1 : 0.5} py="3" flex={1} onPress={() => setSeleccionado(1)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={seleccionado === 1 ? 'cart' : 'cart-outline'}/>} color="white" size="sm" />
              <Text color="white" fontSize="12">Carrito</Text>
            </Center>
          </Pressable>
          {/* Para el botón de Mi cuenta*/}
          <Pressable opacity={seleccionado === 2 ? 1 : 0.5} py="3" flex={1} onPress={() => setSeleccionado(2)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={seleccionado === 2 ? 'account-circle' : 'account-circle-outline'}/>} color="white" size="sm" />
              <Text color="white" fontSize="12">Mi cuenta</Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default AppFooter;
