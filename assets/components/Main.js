import React, {Component} from 'react'
import {Image} from 'react-native'
import {Cards} from './Cards'
import {Chat} from './Chat'
import {Buy} from './Buy'
import {Profile} from './Profile'
import SvgUri from 'react-native-svg-uri';
import {createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator(
  {
    Карты: { screen: Cards },
    Чат: { screen: Chat },
    Покупки: { screen: Buy },
    Профиль: { screen: Profile }
  },
  {
    initialRouteName:'Карты',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Карты') {
            return <Image source={require('../images/cards_active.png')}></Image>
        } else if (routeName === 'Чат') {
          return <SvgUri width="25" height="20" source={require('../images/chat.svg')} />
        }else if (routeName === 'Покупки') {
          return <Image source={require('../images/buyings_active.png')}></Image>
        }else if (routeName === 'Профиль') {
          return <Image source={require('../images/profile.png')}></Image>
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#00d3ef',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 14
      },
      tabStyle:{
        paddingTop:5,
        paddingBottom:5
      },
      style:{
        height:60,
        borderTopWidth: 1,
        borderTopColor:'#f5f5f5',
        backgroundColor:'#f9f9f9'
      }
    }
  });

const Main = createAppContainer(TabNavigator);

export {Main}
