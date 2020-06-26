import React from 'react';
import { SafeAreaView, Text, View } from 'react-native'
import Styles from '../style/styles'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import axios from 'axios';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
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
                  const name = res.data.user.fullName
                  const token = res.data.token
                  
                  console.log(name, token)
                  this.props.dispatch({ type: 'TODO_USER', user: { name, token } })
                })
                .finally(() => { this.props.navigation.navigate('Main') })
                .catch(e => {
                  console.log(e)
                })
            }} />
            <Button backgroundColor='#F2CC8F' text='Cadastrar' marginTop={20} onPress={() => this.props.navigation.navigate('Register')} />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStoreToProps = ({ user }) => {
  return { user }
}

export default connect(mapStoreToProps)(Login)