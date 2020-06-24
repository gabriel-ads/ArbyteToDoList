import React from 'react';
import { SafeAreaView, Text, View } from 'react-native'
import Styles from './src/style/styles'
import Button from './src/components/Button'
import TextInput from './src/components/TextInput'

class Login extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={Styles.background}>
          <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
            <View style={{marginBottom:50}}>
              <Text style={Styles.title}>Login</Text>
            </View>
            <TextInput placeholder='seu_email@gmail.com' marginBottom={40} />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Button backgroundColor='#81B29A' text='Entrar' marginTop={30}/>
            <Button backgroundColor='#F2CC8F' text='Cadastrar' marginTop={20} />
          </View>
        </View>
      </SafeAreaView >
    )
  }
}

export default Login