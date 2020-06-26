import React from 'react';
import { SafeAreaView, Text, View } from 'react-native'
import Styles from '../style/styles'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import axios from 'axios';
import { set } from 'react-native-reanimated';

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={Styles.background}>
          <View style={{ flex: 1.2, justifyContent: "flex-end", alignItems: "center" }}>
            <View style={{ marginBottom: 50 }}>
              <Text style={Styles.title}>Cadastro</Text>
            </View>
            <TextInput placeholder='Nome' marginBottom={20} onChangeText={text => { this.setState({name: this.state.name = text}) }} />
            <TextInput placeholder='E-mail' marginBottom={0} onChangeText={text => { this.setState({email: this.state.email = text}) }} />
            {console.log(this.state.name)}
            {console.log(this.state.email)}
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Button backgroundColor='#F2CC8F' text='Cadastrar' marginTop={80} onPress={() => {
              axios.post('https://arbyte-todo-list-api.herokuapp.com/users', {
                fullName: this.state.name,
                email: this.state.email
              })
                .then(res => {
                  console.log(res)
                })
                .catch(e => {
                  console.log(e)
                })


              // this.props.navigation.navigate('Login')
            }} />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default Register