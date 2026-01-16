import '../global.css'
import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Peliculas } from 'model/Types'
import VisorPelicula from './VisorPelicula'

type VisorPeliculasProps = {
  peliculas: Peliculas
}

export default function VisorPeliculas({peliculas}: VisorPeliculasProps) {
  return (
    <View className='bg-slate-100 p-4'>
      <FlatList 
        data={peliculas}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <VisorPelicula pelicula={item} />}
        numColumns={2}
        scrollEnabled={false}
      />
    </View>
  )
}