import '../global.css'
import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import Boton from 'components/Boton'

export default function Toolbar() {
  return (
    <View className='flex-row h-full bg-[#3782a3] px-4 pt-8 pb-2 justify-between'>
      <View className='flex-row gap-2 justify-start items-center'>
        <MaterialIcons name={"menu"} size={24} color={"white"} />
        <MaterialIcons name={"star"} size={50} color={"gold"} />
        <Text className='font-bold text-2xl color-white tracking-[0.5em]'>CINÉPOLIS</Text>
      </View>

      <View className='flex-row gap-2 items-center'>
        <MaterialIcons name={"search"} size={24} color={"white"} />
        <Boton texto={"Entrar"} relleno={true} />
      </View>
    </View>
  )
}