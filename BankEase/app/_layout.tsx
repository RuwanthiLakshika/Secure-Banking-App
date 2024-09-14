import React from 'react'
import { Slot } from 'expo-router';
import { View } from 'react-native';
import tw from 'twrnc';

const Layout = () => {
  return (
    <View style={tw`mt-5`}>
        <Slot/>
    </View>
  )
}

export default Layout;