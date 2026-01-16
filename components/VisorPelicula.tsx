import '../global.css'
import { View, Text } from 'react-native'
import React from 'react'
import { Pelicula } from 'model/Types'
import { Image } from 'expo-image'
import { MaterialIcons } from '@expo/vector-icons'

type VisorPeliculaProps = {
  pelicula: Pelicula
}

export default function VisorPelicula({pelicula}: VisorPeliculaProps) {
  return (
    <View className='w-1/2 p-2'>
      <View className='w-full h-auto'>
        <Image
          source={pelicula.urlFoto}
          className='w-full aspect-2/3'
        />
      </View>

      <View className='w-full h-28 bg-white border-gray-200'>
        <Text className='text-xl font-bold'>{pelicula.titulo}</Text>
        <View className='flex-row justify-between'>
          <MaterialIcons name={"visibility"} size={24} color={"#ff4f2e"}/>
          <MaterialIcons name={"favorite"} size={24} color={"#ff4f2e"}/>
        </View>
      </View>
    </View>
  )
}