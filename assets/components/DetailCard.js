import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Text} from 'react-native-elements'
import {Transition} from 'react-navigation-fluid-transitions'

class DetailCard extends React.Component {
  render() {
    const {wrapper, textStyle, viewStyleOTwo} = styles
    return (
      <View style={wrapper}>
        <View style={{width: '100%', height: '50%', backgroundColor: this.props.navigation.state.params.bgcolor, alignItems: 'center', justifyContent: 'center'}}>
          <Transition shared={`logo${this.props.navigation.state.params.item}`}>
            <Image resizeMode='contain' style={{flex: 1, width: 150, height: 100}} source={{uri: this.props.navigation.state.params.image}} />
          </Transition>
        </View>
        <View style={viewStyleOTwo}>
          <Text style={textStyle}>Описание продуктов</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  textStyle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '400'
  },
  viewStyleOTwo: {
    width: '100%',
    height: '50%'
  }
})

export {DetailCard}
