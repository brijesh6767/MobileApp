import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ROUTE_NAME } from '../../../constants/enums/routeNamesEnums'

const Login = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={()=> navigation.navigate(ROUTE_NAME.PAGE2 as never)}>
      <Text>index</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Login

