import React from 'react'
import {View, StyleSheet, Text, Image, Alert, TouchableOpacity} from 'react-native'
import SvgUri from 'react-native-svg-uri';

const Footer = ({router}) => {
  const {wrapper, item, styleProfile} = styles
  return (
      <View style={wrapper}>
          <TouchableOpacity onPress={() => router.push.Cards()}  style={item}>
            <View>
                <Image source={require('../images/cards_active.png')}></Image>
                <Text>Карты</Text>
            </View>
          </TouchableOpacity>
          <View style={item}>
            <TouchableOpacity onPress={()=>router.push.Chat()}>
              <SvgUri width="25" height="20" source={require('../images/chat.svg')} />
            </TouchableOpacity>
            <Text>Чат</Text>
          </View>
          <View style={item}>
            <TouchableOpacity onPress={()=>router.push.Buy()}>
              <Image source={require('../images/buyings_active.png')}></Image>
            </TouchableOpacity>
            <Text>Покупки</Text>
          </View>
          <View style={item}>
            <TouchableOpacity onPress={()=>router.push.Profile()}>
              <Image source={require('../images/profile.png')} style={styleProfile}></Image>
            </TouchableOpacity>
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
    justifyContent: 'center',
    backgroundColor:'#f9f9f9'
  },
  styleProfile:{
    width: 25,
    height: 20
  }
})

export {Footer}
