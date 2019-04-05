import React from 'react'
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import {Header, Text, Button} from 'react-native-elements'

const Buy = () => {
  const {wrapper, textStyleHeaderRight, textStyleHeaderLeft, container, buttonStyle} = styles
  return (
    <View style={wrapper}>
      <Header
        statusBarProps={{ barStyle: 'dark-content', translucent: true }}
        backgroundColor='#f9f9f9'
        leftComponent={<Text style={textStyleHeaderLeft}>Мои покупки</Text>}
        rightComponent={
          <TouchableWithoutFeedback>
            <Text style={textStyleHeaderRight}>Создать</Text>
          </TouchableWithoutFeedback>
        }
      />
      <View style={container}>
        <Button
          title="ДОБАВИТЬ ПОКУПКУ"
          buttonStyle={buttonStyle}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    padding: 10
  },
  textStyleHeaderRight: {
    fontSize: 16,
    color: '#00d3ef'
  },
  textStyleHeaderLeft: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600'
  },
  buttonStyle: {
    backgroundColor: '#007aff',
    borderRadius: 5
  }

})

export {Buy}
