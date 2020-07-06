import React from 'react';
import { SafeAreaView, Text, View } from 'react-native'
import Styles from './src/style/styles'
import Button from './src/components/Button'
import TextInput from './src/components/TextInput'

class Register extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={Styles.background}>
          <View style={{ flex: 1.2, justifyContent: "flex-end", alignItems: "center" }}>
            <View style={{marginBottom:50}}>
              <Text style={Styles.title}>Cadastro</Text>
            </View>
            <TextInput placeholder='Nome' marginBottom={20} />
            <TextInput placeholder='E-mail' marginBottom={0} />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Button backgroundColor='#F2CC8F' text='Cadastrar' marginTop={80} />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default Register