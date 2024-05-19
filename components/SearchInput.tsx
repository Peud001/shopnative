import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const SearchInput = () => {

    const [value, setValue] = useState('')

  return (
    <View className='border-2 border-primary w-full h-16 px-4 bg-bgc rounded-2xl focus:border-secondary items-center flex-row space-x-4'>
      <TextInput
      className='flex-1 text-ash font-regular'
      value = {value}
      placeholder="What are you looking for?"
      placeholderTextColor='#E0E0E0'
      />
      <TouchableOpacity>
        <FontAwesome
        name='search'
        color='#808080'
        size={24}
        />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput