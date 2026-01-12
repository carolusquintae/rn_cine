import './global.css'
import { Alert, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import Toolbar from 'components/Toolbar'
import Banner from 'components/Banner'
import { ImagenBanner, ImagenBannerNula } from 'model/Types'
import { cargarBanners } from 'helpers/CargadorBanners'

export default function App() {

  const [banners, setBanners] = useState<Array<ImagenBanner>>([])

  function accionCargarBanner() {
    cargarBanners()
      .then(banner => setBanners(banner))
      .catch(error => mostrarError(error))
  }

  useState(() => accionCargarBanner)

  
  function getBanner(id: string) {
    return banners.find(bannerEncontrado => bannerEncontrado.id === id)?.id || ImagenBannerNula.id
  }
  
  function mostrarError(mensaje: string): any {
    Alert.alert("Error", mensaje.toString())
  }

  return (
    <View>
      <ScrollView>
        <Toolbar />
      </ScrollView>
      <Banner source={getBanner("central")} className='h-56' />
    </View>
  )
}