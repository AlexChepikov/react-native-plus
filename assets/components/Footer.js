import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'

const Footer = ({router}) => {
  const {wrapper, item} = styles
  return (
      <View style={wrapper}>
          <View style={item}>
            <Text>Карты</Text>
          </View>
          <View style={item}>
            <Text>Чат</Text>
          </View>
          <View style={item}>
            <Text>Покупки</Text>
          </View>
          <View style={item}>
            <Text>Профиль</Text>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:'#f9f9f9'
  },
  item:{
    width: '25%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export {Footer}
