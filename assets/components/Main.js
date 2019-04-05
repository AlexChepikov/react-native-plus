import React from 'react'
import {Image} from 'react-native'
import SvgUri from 'react-native-svg-uri'
import {createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { zoomIn } from 'react-navigation-transitions'
import {Cards} from './Cards'
import {Chat} from './Chat'
import {Buy} from './Buy'
import {Profile} from './Profile'

const CardsStack = createStackNavigator({
  Карты: Cards,
  Детали: Profile
},
{
  headerMode: 'none',
  mode: 'modal',
  defaultNavigationOptions: {
    gesturesEnabled: false
  },
  transitionConfig: () => (
    zoomIn()
    // {
    //   transitionSpec: {
    //     duration: 250,
    //     easing: Easing.out(Easing.poly(4)),
    //     timing: Animated.timing
    //   },
    //   screenInterpolator: sceneProps => {
    //     const { layout, position, scene } = sceneProps
    //     const { index } = scene
    //
    //     const height = layout.initHeight
    //     const translateY = position.interpolate({
    //       inputRange: [index - 1, index, index + 1],
    //       outputRange: [height, 0, 0]
    //     })
    //
    //     const opacity = position.interpolate({
    //       inputRange: [index - 1, index - 0.99, index],
    //       outputRange: [0, 1, 1]
    //     })
    //
    //     return { opacity, transform: [{ translateY }] }
    //   }
    // }
    // {
    //   transitionSpec: {
    //     duration: 750,
    //     easing: Easing.out(Easing.poly(4)),
    //     timing: Animated.timing,
    //     useNativeDriver: true
    //   },
    //   screenInterpolator: sceneProps => {
    //     const { layout, position, scene } = sceneProps
    //
    //     const thisSceneIndex = scene.index
    //     const width = layout.initWidth
    //
    //     const translateX = position.interpolate({
    //       inputRange: [thisSceneIndex - 1, thisSceneIndex],
    //       outputRange: [width, 0]
    //     })
    //
    //     return { transform: [{ translateX }] }
    //   }
    // }
  //   {
  //   transitionSpec: {
  //     duration: 300,
  //     easing: Easing.out(Easing.poly(4)),
  //     timing: Animated.timing
  //   },
  //   screenInterpolator: sceneProps => {
  //     const { layout, position, scene } = sceneProps
  //     const { index } = scene
  //
  //     const height = layout.initHeight
  //     const translateY = position.interpolate({
  //       inputRange: [index - 1, index, index + 1],
  //       outputRange: [height, 0, 0]
  //     })
  //
  //     const opacity = position.interpolate({
  //       inputRange: [index - 1, index - 0.99, index],
  //       outputRange: [0, 1, 1]
  //     })
  //
  //     return { opacity, transform: [{ translateY }] }
  //   }
  // }
  )
})

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
