import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const FarmerLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='FarmerIndex' />
    </Stack>
  )
}

export default FarmerLayout;