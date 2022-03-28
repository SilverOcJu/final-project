import React from 'react';
import { Box, Center, Avatar, Heading, Button, VStack, Icon, Divider, Text } from 'native-base';
// Íconos
import { Ionicons } from '@expo/vector-icons';
// Componentes
import AccountInfo from './AccountInfo';

const Profile = ({navigation}) => {
  return(
    <Box h="90%">
    <Center>
      <Box mt="10" w="90%">
          <Avatar
            alignSelf="center"
            size="xl"
            bg="info.800">JO</Avatar>
          <Heading mt={3} textAlign="center" size="xl" color="black">Juan Ocampo</Heading>
          <Heading mt={2} mb={10} textAlign="center" size="md" color="black">Información de la cuenta</Heading>
        <VStack>
          <Box>
            <AccountInfo />
            <Divider bg="muted.200"/>
            <Button
              colorScheme="coolGray"
              textAlign="left"
              leftIcon={<Icon as={Ionicons}
              name="card-outline"
              size="sm" />}
              my={2}
              justifyContent="flex-start"
              variant="ghost">
                Método de pago
            </Button>
            <Divider bg="muted.200"/>
            <Button
              colorScheme="coolGray"
              textAlign="left"
              leftIcon={<Icon as={Ionicons}
              name="location-outline"
              size="sm" />}
              my={2}
              justifyContent="flex-start"
              variant="ghost">
                Ubicaciones
            </Button>
            <Divider bg="muted.200"/>
            <Button
              colorScheme="danger"
              textAlign="left"
              leftIcon={<Icon as={Ionicons}
              name="alert-circle-outline"
              size="sm" />}
              my={2}
              justifyContent="flex-start"
              variant="ghost">
                Eliminar mi cuenta
            </Button>
            <Divider bg="muted.200"/>
            <Button
              colorScheme="danger"
              textAlign="left"
              leftIcon={<Icon as={Ionicons}
              name="exit-outline"
              size="sm" />}
              my={2}
              justifyContent="flex-start"
              variant="ghost"
              onPress={() => navigation.navigate("Login")}
            >
                Cerrar sesión
            </Button>
            <Text _dark={{ color: "white" }} mt={35} mb={3}>Platería Aumentada</Text>
            <Text textAlign="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis finibus mi et efficitur. Praesent eu enim at tellus fermentum accumsan in at neque.</Text>
          </Box>
        </VStack>
      </Box>
    </Center>
    </Box>
  )
}

export default Profile
