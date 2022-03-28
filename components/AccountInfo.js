import {useState} from 'react'
import { Icon, Button, Modal, Input, Stack } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const AccountInfo = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  return(
  <>
    <Button
      colorScheme="coolGray"
      textAlign="left"
      leftIcon={<Icon as={Ionicons}
      name="person-circle-outline"
      size="sm" />}
      my={2}
      justifyContent="flex-start"
      onPress={ () => {
        setMostrarModal(true);
        console.log("Abierto el modal!")
      } }
      variant="ghost">
        Información de la cuenta
    </Button>
    <Modal isOpen={mostrarModal} onClose={() => setMostrarModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Información de la cuenta</Modal.Header>
        <Modal.Body>
          <Stack space={4}>
            <Input variant="underlined" placeholder="Nombre" InputRightElement={<Icon as={<MaterialIcons name="edit" size={24} color="black" />}/>}/>
            <Input variant="underlined" placeholder="Apellidos" InputRightElement={<Icon as={<MaterialIcons name="edit" size={24} color="black" />}/>}/>
            <Input variant="underlined" placeholder="Correo electrónico" InputRightElement={<Icon as={<MaterialIcons name="edit" size={24} color="black" />}/>}/>
            <Input variant="underlined" placeholder="Contraseña" type="password" InputRightElement={<Icon as={<MaterialIcons name="edit" size={24} color="black" />}/>}/>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
            setMostrarModal(false);
          }}>
              Cancelar
            </Button>
            <Button onPress={() => {
            setMostrarModal(false);
          }}>
              Guardar
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  </>
  ) 
}

export default AccountInfo
