import React from 'react'
import {View, StyleSheet, TouchableWithoutFeedback, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import {Transition} from 'react-navigation-fluid-transitions'
import {Header} from 'react-native-elements'

class Cards extends React.Component {
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
      this.setState({data: responseJson})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {wrapper, textStyleHeaderRight, container} = styles
    const item = [
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/y92vtamvlLsvI6oPVDeX.png',
        bgcolor1: '#941305',
        name: 'Пятерочка'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/YQn7txoHSpCalxMC1nHr.png',
        bgcolor1: '#9c1018',
        name: '585 Золотой'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/YQn7txoHSpCalxMC1nHr.png',
        bgcolor1: '#0c5472',
        name: '585 Золотой'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/Q1yVkYEOcbnYwTcJYTwP.png',
        bgcolor1: '#93060f',
        name: 'М.Видео'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/rZT888p58RHnu4074dRi.png',
        bgcolor1: '#203c8c',
        name: 'Лента'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/MARXOLrTsFeKXuZFD4Rm.png',
        bgcolor1: '#553a28',
        name: 'Кантата'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/EcoBUk4yYhzlgPsTtJom.png',
        bgcolor1: '#0d4177',
        name: 'Спортмастер'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/A88edLIplkwtnLajQqzR.png',
        bgcolor1: '#000000',
        name: 'ECCO'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/z7J8p4EJKTHATjOP7loj.png',
        bgcolor1: '#c63f0a',
        name: 'ТехноМакс'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/gK2HrsvZMgx6Mpf8WvaT.png',
        bgcolor1: '#75862a',
        name: 'YVES ROCHER'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/xDKwIbr8RI7UeAU2h39V.png',
        bgcolor1: '#a7270a',
        name: 'Спортугалия'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/58t0u9si4meU4AfSCLAg.png',
        bgcolor1: '#0c1f3d',
        name: 'Триал Спорт'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/uXl6UsKkaglWMH07GkT5.png',
        bgcolor1: '#071e40',
        name: 'Метро'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/JThNZGYrt3JbU3Qrk4MB.png',
        bgcolor1: '#6f0907',
        name: 'Мир пива'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/eRcr17zjfau1dRSCzRJG.png',
        bgcolor1: '#fcd10d',
        name: 'MAKK'
      },
      {
        image: 'http://backend.pluscards.ru/storage/resized/x_160/LWz0jhfnqayw6rNAurUs.png',
        bgcolor1: '#5f1a1b',
        name: 'Леонардо'
      }
    ]
    return (
      <View style={wrapper}>
        <Header
          statusBarProps={{ barStyle: 'dark-content', translucent: true }}
          backgroundColor='#f9f9f9'
          leftComponent={<Image source={require('../images/logo.png')} />}
          rightComponent={
            <TouchableWithoutFeedback>
              <Text style={textStyleHeaderRight}>Добавить</Text>
            </TouchableWithoutFeedback>
          }
        />
        <View style={container}>
          <Text style={{fontSize: 24, fontWeight: '600', marginBottom: 10}}>Мои карты</Text>
          <ScrollView horizontal='true'>
            {
              item.map((value, i) => (
                <TouchableOpacity style={{marginRight: 10}} key={i.toString()} onPress={() => this.props.navigation.navigate('Детали', {image: value.image, bgcolor: value.bgcolor1, item: i})}>
                  <View key={i.toString()} style={{width: '100%', height: 100, borderRadius: 5, padding: 20, backgroundColor: value.bgcolor1}}>
                    <Transition shared={`logo${i}`}>
                      <Image resizeMode='contain' style={{flex: 1, width: 150, height: 100}} source={{uri: value.image}} />
                    </Transition>
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  textStyleHeaderRight: {
    fontSize: 16,
    color: '#00d3ef'
  },
  textStyleHeaderLeft: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600'
  }
})

export {Cards}
