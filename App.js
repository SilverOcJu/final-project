import { useState } from 'react';
import {NativeBaseProvider, Center, Box, Text, HStack, Pressable, Icon} from 'native-base';
import {MaterialCommunityIcons} from '@expo/vector-icons';

// Componente que manipula la navegación de la aplicación
import Routes from './navigation/Routes';

export default function App() {
  const [seleccionado, setSeleccionado] = useState(0);
  
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
