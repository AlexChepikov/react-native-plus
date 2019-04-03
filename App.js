import React, {Component} from 'react'
import Router from 'react-native-easy-router'
import {Cards} from './assets/components/Cards'
import {Chat} from './assets/components/Chat'
import {Buy} from './assets/components/Buy'
import {Profile} from './assets/components/Profile'

export default class App extends Component {
  render() {
    return (
      <Router routes={{Cards, Chat, Buy, Profile}} initialRoute="Cards" />
    )
  }
}
