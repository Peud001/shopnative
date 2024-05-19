import { View, Text, Image, } from 'react-native'
import React from 'react'

interface propsType {
    title: string
    subtitle: string
}

const EmptyState = ({title, subtitle}: propsType) => {
  return (
    <View className='justify-center items-center px-4'>
      <Image
      source={require('../assets/empty.jpg')}
      className='w-[270px] h-[210px] rounded-2xl'
      resizeMode='contain'
      />
      <Text className='text-ash text-sm font-semibold'>{subtitle}</Text>
      <Text className='text-xl text-white text-center font=semibold'>{title}</Text>
    </View>
  )
}

export default EmptyState