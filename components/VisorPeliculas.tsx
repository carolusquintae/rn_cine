import '../global.css'
import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import React from 'react'
import { Peliculas } from 'model/Types'
import VisorPelicula from './VisorPelicula'

type VisorPeliculasProps = {
  peliculas: Peliculas
}

export default function VisorPeliculas({peliculas}: VisorPeliculasProps) {
  
  const {width} = useWindowDimensions()
  const numColumnas = width > 768 ? 4 : 2

  return (
    <View className='bg-slate-100 p-4'>
      <FlatList 
        data={peliculas}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <VisorPelicula pelicula={item} />}
        numColumns={numColumnas}
        key={`flatlist-${numColumnas}`}
        scrollEnabled={false}
      />
    </View>
  )
}