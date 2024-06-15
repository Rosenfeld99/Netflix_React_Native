import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CheckboxFromUtil from '../../utils/CheckboxFromUtil'

export default function ShopFavoriteProductsScreen() {
  const [checked, setChecked] = useState(false);

  return (
    <View className=" bg-shop_primary flex-1 items-center justify-center">
      <Text>ShopFavoriteProductsScreen</Text>
      <CheckboxFromUtil title={"some text"} checked={checked} setChecked={setChecked} color={"red"}/>
    </View>
  )
}