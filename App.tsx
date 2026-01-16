import './global.css'
import { Alert, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import Toolbar from 'components/Toolbar'
import Banner from 'components/Banner'
import { ImagenBanner, ImagenBannerNula, Peliculas } from 'model/Types'
import { cargarBanners } from 'helpers/CargadorBanners'
import Buscador from 'components/Buscador'
import VisorPeliculas from 'components/VisorPeliculas'
import { cargarPeliculas } from 'helpers/CargadorPeliculas'

export default function App() {

  const [banners, setBanners] = useState<Array<ImagenBanner>>([])
  const [peliculas, setPeliculas] = useState<Peliculas>([])

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
  
  function getBanner(id: string) {
    return banners.find(bannerEncontrado => bannerEncontrado.id === id)?.urlFoto || ImagenBannerNula.urlFoto
  }
  
  function mostrarError(mensaje: string) {
    Alert.alert("Error", mensaje.toString())
  }

  return (
    <View>
      <ScrollView>
        <Toolbar />
      </ScrollView>
      <Banner source={getBanner("central")} className='h-56 md:h-80' />
      <Buscador />
      <VisorPeliculas peliculas={peliculas} />
    </View>
  )
}