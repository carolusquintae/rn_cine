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
    'bg-[#FF4F2E]': relleno === true,
    'bg-white border-2 border-[#FF4F2E]': relleno === false
  }

  const estilosTexto = {
    'text-white': relleno === true,
    'text-[#FF4F2E] font-semibold': relleno === false,
  }

  return (
    <View className={clsx(estilosBase, estiloBoton, className)}>
      <Text className={clsx(estilosTexto)}>{texto}</Text>
    </View>
  )
}