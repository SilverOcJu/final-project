import React from 'react';
// import Realm from 'realm';
import { NativeBaseProvider, Heading, Input, Icon, Box, Center, Image, FormControl, Button } from 'native-base';

// Iconos
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = ({navigation}) => {
  return (
    <NativeBaseProvider>
    <Center>
      <Box w="90%" mt="10">
        <Image 
          alignSelf="center"
          size="xl"
          alt="loginimage"
          my={7}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3004/3004088.png"
          }}
        />
        <Heading
          alignSelf="center"
          size="xl"
          fontWeight="600"
          color="black"
          _dark={{ color: "white" }}
        >
          Joyería Aumentada
        </Heading>
        <Box my="5" alignItems="center">
        <FormControl w="80%">
          <FormControl.Label my="2">Usuario</FormControl.Label>
          <Input placeholder="Ingresar su nombre de usuario" InputLeftElement={<Icon ml="2" as={<MaterialIcons name="person" />}/>}/>

          <FormControl.Label my="2">Contraseña</FormControl.Label>
          <Input placeholder="Ingresar la contraseña" InputLeftElement={<Icon ml="2" as={<MaterialIcons name="lock-outline" />}/>}/>

          <Button mt="10" my="1" onPress={() => navigation.navigate("Tab")}>Iniciar sesión</Button>
          <Button my="1" colorScheme="secondary" onPress={() => navigation.navigate("Registration")}>Registrarse</Button>
        </FormControl>
        </Box>
      </Box>
    </Center>
    </NativeBaseProvider>
  ) 
}

export default LoginScreen
