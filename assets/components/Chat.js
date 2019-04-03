import React from 'react'
import {View, ScrollView, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import {Header, Icon, Text} from 'react-native-elements'

const Chat = ({router}) => {
  const {wrapper, textStyleHeaderRight, textStyleHeaderLeft} = styles

  return (
    <View style={wrapper}>
      <Header
        backgroundColor='#f9f9f9'
        leftComponent={<Text style={textStyleHeaderLeft}>Мои чаты</Text>}
        rightComponent={
          <TouchableWithoutFeedback>
            <Text style={textStyleHeaderRight}>Создать</Text>
          </TouchableWithoutFeedback>
        }
      />
      <View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
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

export {Chat}
