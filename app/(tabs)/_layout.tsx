import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { Image, Text, View } from 'react-native'

interface propsType {
    icon: any
    name: string
    color: string
    focused: boolean
}

const TabsLayout = () => {

    const TabIcons = ({icon, name, color, focused}: propsType) => {
        return(
            <View className='items-center justify-center'>
                <FontAwesome size={24} name={icon} color={color}
                />
                <Text className='text-xs' style={{color: color}}>{name}</Text>
            </View>
        )
    }

  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 74
        }
    }}
    >
      <Tabs.Screen
      name='home'
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
            <TabIcons
            icon='home'
            name='Home'
            color={color}
            focused={focused}
            />
        )
      }}
      />
      <Tabs.Screen
      name='cart'
      options={{
        title: 'Cart',
        headerShown: false,
        tabBarBadge: 3,
        tabBarIcon: ({color, focused}) => (
            <TabIcons
            icon='shopping-cart'
            name='Cart'
            color={color}
            focused={focused}
            />
        )
      }}
      />
      <Tabs.Screen
      name='profile'
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
            <TabIcons
            icon='user'
            name='Profile'
            color={color}
            focused={focused}
            />
        )
      }}
      />
    </Tabs>
  )
}

export default TabsLayout