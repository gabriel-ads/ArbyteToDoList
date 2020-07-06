import React from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native'
import Styles from '../style/styles'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      token:'',
    }
  }

  

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={Styles.background}>
          <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
            <View style={{ marginBottom: 50 }}>
              <Text style={Styles.title}>Login</Text>
            </View>
            <TextInput placeholder='seuEmail@gmail.com' marginBottom={40} onChangeText={text => { this.setState({ email: this.state.email = text }) }} />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Button backgroundColor='#81B29A' text='Entrar' marginTop={30} onPress={() => {
              axios.post('https://arbyte-todo-list-api.herokuapp.com/users/login', {
                email: this.state.email,
              })

                .then(res => {
                  this.setState({token: res.data.token})
                  return (
                    AsyncStorage.setItem('userData', JSON.stringify(res.data))
                  )
                })

                .then(() => {
                  this.props.navigation.navigate('Main')
                })

                .catch(e => {
                  Alert.alert('Email não existe ou está incorreto')
                })

            }} />
            <Button backgroundColor='#F2CC8F' text='Cadastrar' marginTop={20} onPress={() => this.props.navigation.navigate('Register')} />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default Login