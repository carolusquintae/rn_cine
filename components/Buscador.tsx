import '../global.css'
import { View, TextInput, Text} from 'react-native'
import React from 'react'
import Boton from './Boton'
import clsx from 'clsx'

export default function Buscador() {
  
  const styles = {
    padding: 'px-4 py-2',
    text: 'text-text dark:text-darkText font-bold',
    textInputGeneral: 'border-gray-400 border bg-white color-[#7782b7] rounded text-sm',
    textInputTablet: 'gap-4',
    estilosTablet: 'md:flex-row  md:items-center'
  }

  const estilosTextInput = clsx(styles.textInputGeneral, styles.padding, styles.estilosTablet, styles.textInputTablet)
  
  return (
    <View className={clsx(styles.padding, styles.estilosTablet, 'bg-backgroundSecondary dark:bg-darkSecondary gap-2 md:justify-between')}>
      <Boton texto={"YA A LA VENTA"} relleno={true} />
      <Boton texto={"HOY"} relleno={false} />
      <Boton texto={"PRÓXIMAMENTE"} relleno={false} />

      <Text className={styles.text}>Cine</Text>
      <TextInput 
        placeholder={"- SELECCIONA UN CINE -"}
        className={estilosTextInput}
      />

      <Text className={styles.text}>Fecha</Text>
      <TextInput 
        placeholder={"- ELEGIR FECHA -"}
        className={estilosTextInput}
      />
    </View>
  )
}