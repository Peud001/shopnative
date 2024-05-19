import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import EmptyState from '../../components/EmptyState'
import Trending from '../../components/Trending'
import { RefreshControl } from 'react-native'

const Home = () => {

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    //re call items -> if any new item appear
    setRefreshing(false)
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
      data={[{id:1}, {id:2}, {id:3}]}
      keyExtractor={(item: any) => item.id}
      renderItem={({item}) => 
        <Text className='text-tertiary'>{item.id}</Text>
      }
      ListHeaderComponent={() => <View className='my-6 px-6 space-y-6'>
        <View className='mb-2'>
        <SearchInput/>
        </View>
        <View>
        <Trending
          posts={[{id:1}, {id:2}, {id:3}] ?? []}
          />
        </View>
      </View>}
      ListEmptyComponent={() => (
        <EmptyState
        title="No Item Found"
        subtitle="No item added yet"
        />
      )}
      refreshControl={<RefreshControl refreshing ={ refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Home