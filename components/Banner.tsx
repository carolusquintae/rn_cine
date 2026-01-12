import '../global.css'
import { View, Text } from 'react-native'
import React from 'react'
import { cssInterop } from 'nativewind'
import { Image } from 'expo-image'
import clsx from 'clsx'

cssInterop(Image, {className: "style"})

type BannerProps = {
  source: string,
  className?: string
}

export default function Banner({source, className}: BannerProps) {
  return (
    <View className={clsx(className, 'w-full')}>
      <Image source={source} contentFit={"fill"} />
    </View>
  )
}