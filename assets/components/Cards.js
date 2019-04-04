import React from 'react'
import {View, ScrollView, StyleSheet, TouchableWithoutFeedback, Text, Image} from 'react-native'
import {Header} from 'react-native-elements'

class Cards extends React.Component{
  state={
    data:''
  }

  componentWillMount = async () =>{
    try {
      const response = await fetch(
        'http://backend.pluscards.ru/api/account', {
            headers: {
              "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBjZjc5MzU2NzA2MGI2ODQ2YzJjZjRmZTMxNTQ0MDFiYmYxY2U3ZjAzODUwNGQxYzBiMGI0YjgzY2E0ODkxNmM5YTczZmU1M2Q4NDM1NjI2In0.eyJhdWQiOiIzIiwianRpIjoiMGNmNzkzNTY3MDYwYjY4NDZjMmNmNGZlMzE1NDQwMWJiZjFjZTdmMDM4NTA0ZDFjMGIwYjRiODNjYTQ4OTE2YzlhNzNmZTUzZDg0MzU2MjYiLCJpYXQiOjE1NTM0MDIwMTEsIm5iZiI6MTU1MzQwMjAxMSwiZXhwIjoxNTg1MDI0NDExLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.WdJvG_hwF65m_P8TL7tH-Za6pOQOgtOehJe7BNMK12Z36KhL68sZO2llHRQ2bFPyQdciLGQ82L90wLztlkWpPH_VkScLWovUMa7KdJmTVG1b4Hw0B76gBgTwhzkPjS3YlosABurbrrYkfL2Lodo1fi3l2vIfS-hII4XzHDjBM33rsHI3mb20OgIpOrKclDOjp5EgwCpuznpDc_L1hzoNLNJ9mHiT6uFZhoQwPsBTM9SX3-CcJpJVA1SPmf_oncImPHfxK5YAE_aWHDS9yZ4HuC-1f8TjOFqxCPbs0ZtV7aa1yCOd50lBxi_V_gGvw6-HMQGGdJxaoJFqBBpnhV-R1GtZ7j_NmbVXgk6rttPNXl6OpS_kPYe_j5AXZqwFXo5emwDc9N4gsxX2sRATTZEHkw0tYYFqKuo8AE9faAfAl7UHFr0IvtmJDL_FKHsXWxjjS6PY9RkSdsFAK16Z9e-6vi_VWqfQ7_fuvukl7P-LXf52B0eZIC74aUHDL6vJFJoa0A7rPNm4Bz1AkSCYzqrrAd6uOkOgFNR9B6p145JavluoZ9UO3sP1dZz12U3bSw7DNLVp6treBtJJdaMZ_XaMLYMlxqnWLFNKp6f1giUFunH4a6Ep3uUNZcWHyfuP5ciwpQ393QVgf0_pihMbM9S0aeOZsoJ_reXP1B2oIGVDNfM"
            }
        }
      )
      const responseJson = await response.json()
      this.setState({data: responseJson})
    } catch (error) {
      console.error(error)
    }
  }

  render(){
    const {wrapper, textStyleHeaderRight, textStyleHeaderLeft, container} = styles

    return (
      <View style={wrapper}>
        <Header
          statusBarProps={{ barStyle: 'dark-content', translucent: true }}
          backgroundColor='#f9f9f9'
          leftComponent={<Image source={require('../images/logo.png')}></Image>}
          rightComponent={
            <TouchableWithoutFeedback>
              <Text style={textStyleHeaderRight}>Добавить</Text>
            </TouchableWithoutFeedback>
          }
        />
          <View style={container}>
            {
              Object.values(this.state.data).forEach((key) => (
                  console.log(key.program.design.logo),
                  <Image source={{uri: 'http://backend.pluscards.ru/storage/resized/x_160/LWz0jhfnqayw6rNAurUs.png'}}/>
              ))
            }
          </View>
      </View>
    )
  }
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
