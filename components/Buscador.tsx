import '../global.css'
import { View, TextInput, Text} from 'react-native'
import React from 'react'
import Boton from './Boton'
import clsx from 'clsx'

export default function Buscador() {
  return (
    <View className={clsx(styles.padding, 'bg-gray-200 gap-2')}>
      <Boton texto={"YA A LA VENTA"} relleno={true} />
      <Boton texto={"HOY"} relleno={false} />
      <Boton texto={"PRÓXIMAMENTE"} relleno={false} />

      <Text className={styles.text}>Cine</Text>
      <TextInput 
        placeholder='- SELECCIONA UN CINE -'
        className={clsx(styles.textInput, styles.padding)}
      />

      <Text className={styles.text}>Fecha</Text>
      <TextInput 
        placeholder='- ELEGIR FECHA -'
        className={clsx(styles.textInput, styles.padding)}
      />
    </View>
  )
}

const styles = {
  padding: 'px-4 py-2',
  text: 'text-[#b4a494] font-bold',
  textInput: 'border-gray-400 border bg-white color-[#7782b7] rounded text-sm',
}