import React from 'react'
import {Image} from 'react-native'
import SvgUri from 'react-native-svg-uri'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import { FluidNavigator} from 'react-navigation-fluid-transitions'
//import { fadeIn } from 'react-navigation-transitions'
import {Cards} from './Cards'
import {Chat} from './Chat'
import {Buy} from './Buy'
import {Profile} from './Profile'
import {DetailCard} from './DetailCard'

const CardsStack = FluidNavigator({
  Карты: Cards,
  Детали: DetailCard
}
// ,
// {
//   headerMode: 'none',
//   mode: 'modal',
//   navigationOptions: {
//     gesturesEnabled: false
//   },
//   transitionConfig: () => ({
//     transitionSpec: {
//       duration: 0
//     },
//     screenInterpolator: (sceneProps) => {
//       const {position, scene} = sceneProps
//       const {index} = scene
//
//       const inputRange = [index - 1, index, index + 1]
//       const opacity = position.interpolate({
//         inputRange,
//         outputRange: [0, 1, 1]
//       })
//
//       const scaleY = position.interpolate({
//         inputRange,
//         outputRange: ([0.4, 1, 1])
//       })
//
//       return {
//         opacity,
//         transform: [
//           {scaleY}
//         ]
//       }
//     }
//   })
// }
)

const TabNavigator = createBottomTabNavigator(
  {
    Карты: CardsStack,
    Чат: Chat,
    Покупки: Buy,
    Профиль: Profile
  },
  {
    initialRouteName: 'Карты',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state
        if (routeName === 'Карты') {
          return <Image source={require('../images/cards_active.png')} />
        } else if (routeName === 'Чат') {
          return <SvgUri width="25" height="20" source={require('../images/chat.svg')} />
        } else if (routeName === 'Покупки') {
          return <Image source={require('../images/buyings_active.png')} />
        } else if (routeName === 'Профиль') {
          return <Image source={require('../images/profile.png')} />
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: '#00d3ef',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 14
      },
      tabStyle: {
        paddingTop: 5,
        paddingBottom: 5
      },
      style: {
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#f5f5f5',
        backgroundColor: '#f9f9f9'
      }
    }
  })

const Main = createAppContainer(TabNavigator)

export {Main}
