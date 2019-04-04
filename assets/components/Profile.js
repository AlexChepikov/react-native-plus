import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Text, ListItem, Avatar} from 'react-native-elements'

const list = [
  {
    name: 'Настройки профиля'
  },
  {
    name: 'Настройки приложения'
  },
  {
    name: 'Выйти'
  }
]

const Profile = () => {
  const {wrapper, textStyle, viewStyleOne, viewStyleOTwo} = styles
  return (
    <View style={wrapper}>
        <View style={viewStyleOne}>
          <Avatar
            size='large'
            rounded
            source={require('../images/user2.png')}
          />
          <Text style={textStyle}>Иван Иванов</Text>
        </View>
        <View style={viewStyleOTwo}>
          {
            list.map((value, i) => (
              <ListItem
                key={i}
                title={value.name}
              />
            ))
          }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  textStyle:{
    color:'#fff',
    fontSize: 24,
    fontWeight: '400'
  },
  viewStyleOne:{
    width: '100%',
    height: '50%',
    backgroundColor: '#00d3ef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewStyleOTwo:{
    width: '100%',
    height: '50%'
  }
})

export {Profile}
