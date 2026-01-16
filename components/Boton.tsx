import '../global.css'
import { View, Text } from 'react-native'
import React from 'react'
import { clsx } from 'clsx'

type BotonProps = {
  texto: string,
  relleno: boolean,
  className?: string
}

export default function Boton({texto, relleno, className}: BotonProps) {
  
  const estilosBase = 'flex-column items-center py-2 px-8 mt-2 rounded-lg'

  const estiloBoton = {
    'bg-primary dark:bg-darkPrimary': relleno === true,
    'bg-white border-2 border-primary dark:border-darkPrimary': relleno === false
  }

  const estilosTexto = {
    'text-white': relleno === true,
    'text-primary dark:text-darkPrimary font-semibold': relleno === false,
  }

  return (
    <View className={clsx(estilosBase, estiloBoton, className)}>
      <Text className={clsx(estilosTexto)}>{texto}</Text>
    </View>
  )
}