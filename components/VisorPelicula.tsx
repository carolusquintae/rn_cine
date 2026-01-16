import '../global.css'
import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { Pelicula } from 'model/Types'
import { Image } from 'expo-image'
import { MaterialIcons } from '@expo/vector-icons'

type VisorPeliculaProps = {
  pelicula: Pelicula
}

export default function VisorPelicula({pelicula}: VisorPeliculaProps) {
  
  const {width} = useWindowDimensions()
  const tamañoIcono = width > 768 ? 32 : 24 

  return (
    <View className='w-1/2 p-2 md:w-1/4'>
      <View className='w-full h-auto'>
        <Image
          source={pelicula.urlFoto}
          className='w-full aspect-2/3'
        />
      </View>

      <View className='w-full h-28 bg-white border-gray-200 md:h-36'>
        <Text className='text-xl font-bold md:text-2xl'>{pelicula.titulo}</Text>
        <View className='flex-row justify-between'>
          <MaterialIcons name={"visibility"} size={tamañoIcono} color={"#ff4f2e"}/>
          <MaterialIcons name={"favorite"} size={tamañoIcono} color={"#ff4f2e"}/>
        </View>
      </View>
    </View>
  )
}