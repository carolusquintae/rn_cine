import './global.css'
import { Alert, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Toolbar from 'components/Toolbar'
import Banner from 'components/Banner'
import { ImagenBanner, ImagenBannerNula, Peliculas } from 'model/Types'
import { cargarBanners } from 'helpers/CargadorBanners'
import Buscador from 'components/Buscador'
import VisorPeliculas from 'components/VisorPeliculas'
import { cargarPeliculas } from 'helpers/CargadorPeliculas'
import { useColorScheme } from 'nativewind'

export default function App() {

  const [banners, setBanners] = useState<Array<ImagenBanner>>([])
  const [peliculas, setPeliculas] = useState<Peliculas>([])
  const {colorScheme, setColorScheme} = useColorScheme()

  function accionCargarBanner() {
    cargarBanners()
      .then(banner => setBanners(banner))
      .catch(error => mostrarError(error.toString()))
  }
  
  function accionCargarPeliculas() {
    cargarPeliculas()
    .then(pelicula => setPeliculas(pelicula))
    .catch(error => mostrarError(error.toString()))
  }
  
  useState(accionCargarBanner)
  useState(accionCargarPeliculas)
  useEffect(() => setColorScheme("system"), [])
  
  function getBanner(id: string) {
    return banners.find(bannerEncontrado => bannerEncontrado.id === id)?.urlFoto || ImagenBannerNula.urlFoto
  }
  
  function mostrarError(mensaje: string) {
    Alert.alert("Error", mensaje.toString())
  }

  return (
    <ScrollView className='flex-1 bg-blue-50'>
      <View className='bg-background dark:bg-darkBackground lg:w-full lg:max-w-[1200] lg:mx-auto lg:px-4'>
        <Toolbar />
        <Banner source={getBanner("central")} className='h-56 md:h-80' />
        {
          <Banner source={getBanner("superior")} className='lg:h-48' />
        }
        <Buscador />
        <VisorPeliculas peliculas={peliculas} />
      </View>
    </ScrollView>
  )
}