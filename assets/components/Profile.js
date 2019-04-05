import React from 'react'
import {View, StyleSheet} from 'react-native'
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

class Profile extends React.Component {
  state={
    data: ''
  }

  componentWillMount = async () => {
    try {
      const response = await fetch(
        'http://backend.pluscards.ru/api/account', {
          headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBjZjc5MzU2NzA2MGI2ODQ2YzJjZjRmZTMxNTQ0MDFiYmYxY2U3ZjAzODUwNGQxYzBiMGI0YjgzY2E0ODkxNmM5YTczZmU1M2Q4NDM1NjI2In0.eyJhdWQiOiIzIiwianRpIjoiMGNmNzkzNTY3MDYwYjY4NDZjMmNmNGZlMzE1NDQwMWJiZjFjZTdmMDM4NTA0ZDFjMGIwYjRiODNjYTQ4OTE2YzlhNzNmZTUzZDg0MzU2MjYiLCJpYXQiOjE1NTM0MDIwMTEsIm5iZiI6MTU1MzQwMjAxMSwiZXhwIjoxNTg1MDI0NDExLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.WdJvG_hwF65m_P8TL7tH-Za6pOQOgtOehJe7BNMK12Z36KhL68sZO2llHRQ2bFPyQdciLGQ82L90wLztlkWpPH_VkScLWovUMa7KdJmTVG1b4Hw0B76gBgTwhzkPjS3YlosABurbrrYkfL2Lodo1fi3l2vIfS-hII4XzHDjBM33rsHI3mb20OgIpOrKclDOjp5EgwCpuznpDc_L1hzoNLNJ9mHiT6uFZhoQwPsBTM9SX3-CcJpJVA1SPmf_oncImPHfxK5YAE_aWHDS9yZ4HuC-1f8TjOFqxCPbs0ZtV7aa1yCOd50lBxi_V_gGvw6-HMQGGdJxaoJFqBBpnhV-R1GtZ7j_NmbVXgk6rttPNXl6OpS_kPYe_j5AXZqwFXo5emwDc9N4gsxX2sRATTZEHkw0tYYFqKuo8AE9faAfAl7UHFr0IvtmJDL_FKHsXWxjjS6PY9RkSdsFAK16Z9e-6vi_VWqfQ7_fuvukl7P-LXf52B0eZIC74aUHDL6vJFJoa0A7rPNm4Bz1AkSCYzqrrAd6uOkOgFNR9B6p145JavluoZ9UO3sP1dZz12U3bSw7DNLVp6treBtJJdaMZ_XaMLYMlxqnWLFNKp6f1giUFunH4a6Ep3uUNZcWHyfuP5ciwpQ393QVgf0_pihMbM9S0aeOZsoJ_reXP1B2oIGVDNfM'
          }
        }
      )
      const responseJson = await response.json()
      this.setState({data: responseJson[0].owner})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {wrapper, textStyle, viewStyleOne, viewStyleOTwo} = styles
    return (
      <View style={wrapper}>
        <View style={viewStyleOne}>
          <Avatar
            size='large'
            rounded
            source={{uri: this.state.data.avatar}}
          />
          <Text style={textStyle}>{this.state.data.name} {this.state.data.lastname}</Text>
        </View>
        <View style={viewStyleOTwo}>
          {
            list.map((value, i) => (
              <ListItem
                key={i.toString()}
                title={value.name}
              />
            ))
          }
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
  viewStyleOne: {
    width: '100%',
    height: '50%',
    backgroundColor: '#00d3ef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewStyleOTwo: {
    width: '100%',
    height: '50%'
  }
})

export {Profile}
