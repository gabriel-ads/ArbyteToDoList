import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import Styles from './src/style/styles'
import Button from './src/components/Button'
import TextInput from './src/components/TextInput'
import Task from './src/components/Task'

class Main extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={Styles.background}>
          <View style={{ flex: 1.2 }}>
            <View style={{ alignItems: "flex-start", marginLeft: 38, marginTop: 39 }}>
              <Text style={{ fontSize: 36, fontWeight: "700", }}>Olá, Pessoa</Text>
              <Text style={{ fontSize: 24, fontWeight: "300" }}>Aqui estão as suas tarefas</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 43 }}>
              <TextInput placeholder='Nome' marginTop={20} />
            </View>
            <ScrollView>
              <View style={{ flex: 1.2, alignItems: "center", marginTop: 43 }}>
                <Task></Task>
              </View>
            </ScrollView>
          </View>
          <View style={{ flex: 0.3, alignItems: "center" }}>
            <Button backgroundColor='#F2CC8F' text='Sair' marginTop={10} />
          </View>
        </View>
      </SafeAreaView >
    )
  }
}

export default Main