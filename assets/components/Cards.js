import React from 'react'
import {View, ScrollView, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import {Header, Icon, Text} from 'react-native-elements'
import {Footer} from './Footer'

const Cards = ({router}) => {
  const {wrapper, textStyleHeaderRight, textStyleHeaderLeft, container} = styles
  return (
    <View style={wrapper}>
      <Header
        backgroundColor='#f9f9f9'
        leftComponent={<Text style={textStyleHeaderLeft}>Plus</Text>}
        rightComponent={
          <TouchableWithoutFeedback>
            <Text style={textStyleHeaderRight}>Добавить</Text>
          </TouchableWithoutFeedback>
        }
      />
      <View style={container}>
      </View>
      <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container:{
    flex: 1
  },
  textStyleHeaderRight:{
    fontSize: 16,
    color:'#00d3ef'
  },
  textStyleHeaderLeft:{
    fontSize: 16,
    color:'#000',
    fontWeight: '600'
  }
})

export {Cards}
