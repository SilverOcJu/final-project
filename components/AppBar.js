import React from 'react';
import {Box, NativeBaseProvider, StatusBar, Text, HStack, IconButton, Icon} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons';

const AppBar = () => {
  return (
    <NativeBaseProvider>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack bg="info.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
          <Text mx="2" color="white" fontSize="22" fontWeight="bold">Platería Aumentada</Text>
        </HStack>
      </HStack>
    </NativeBaseProvider>
  );
};

export default AppBar;
