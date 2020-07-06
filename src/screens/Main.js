import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import Styles from '../style/styles'
import Button from '../components/Button'
import TaskInput from '../components/TaskInput'
import Task from '../components/Task'
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            token: '',
            uName: '',
            // tasks: [],
            completed: false,
            editTask: false,
            editDescription: '',
            name: 'pencil',
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userData')
            .then(userData => {
                // console.log('User:', userData)
                if (userData === null) {
                    this.props.navigation.navigate('Login')
                }
                else {
                    const user = JSON.parse(userData)
                    this.setState({ uName: user.user.fullName })
                    this.setState({ token: user.token })
                    // console.log(this.state.token)
                    this.props.dispatch({ type: 'TODO_USER', user })
                    this.getTask()

                }
            })
            .catch(e => { console.log(e) })
    }
    getTask() {
        axios.get('https://arbyte-todo-list-api.herokuapp.com/tasks', {
            headers: { Authorization: `Bearer ${this.state.token}` }
        })
            .then(res => {
                const tasklist = res.data
                this.props.dispatch({ type: 'TODO_TASKLIST', tasklist })
            })
            .catch(e => { console.log(e) })
    }
    createTask() {
        axios.post('https://arbyte-todo-list-api.herokuapp.com/tasks', {
            description: this.state.description,
            completed: this.state.completed
        },
            {
                headers: { Authorization: `Bearer ${this.state.token}` }
            })
            .then(res => {
                const task = res.data
                this.props.dispatch({ type: 'ADD_TASK', task })
                console.log(res.data)
            })
    }

    taskCompleted(id, completed) {
        axios.put(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`, {
            completed: completed
        },
            {
                headers: { Authorization: `Bearer ${this.state.token}` }
            })
            .then(res => {
                const tasklist = this.props.tasklist
                const indtask = tasklist.findIndex(task => task.id === id)
                tasklist.splice(indtask, 1)
                tasklist.push(res.data)
                this.props.dispatch({ type: 'TODO_TASKLIST', tasklist })
            })
    }

    changeDescription(id, description) {
        axios.put(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`, {
            description: description
        },
            {
                headers: { Authorization: `Bearer ${this.state.token}` }
            })
            .then(res => {
                const tasklist = this.props.tasklist
                const indtask = tasklist.findIndex(task => task.id === id)
                tasklist.splice(indtask, 1)
                tasklist.push(res.data)
                this.props.dispatch({ type: 'TODO_TASKLIST', tasklist })
                console.log(res)
            })
            .catch(e => e)
    }

    deleteTask(id) {
        axios.delete(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`, {
            headers: { Authorization: `Bearer ${this.state.token}` }
        })
            .then(res => {
                const tasklist = this.props.tasklist
                const indtask = tasklist.findIndex(task => task.id === id)
                tasklist.splice(indtask, 1)
                this.props.dispatch({ type: 'TODO_TASKLIST', tasklist })
            })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={Styles.background}>
                    <View style={{ flex: 1.2 }}>
                        <View style={{ alignItems: "flex-start", marginLeft: 38, marginTop: 39 }}>
                            <Text style={{ fontSize: 36, fontWeight: "700", }}>Olá, {this.state.uName}</Text>
                            <Text style={{ fontSize: 24, fontWeight: "300" }}>Aqui estão as suas tarefas</Text>
                        </View>
                        <View style={{ alignItems: "center", marginTop: 43 }}>
                            <TaskInput placeholder='O que você tem para fazer?'
                                marginTop={20}
                                onChangeText={text => { this.setState({ description: text }) }}
                                addTask={() => this.createTask()} />
                        </View>
                        <ScrollView>
                            <View style={{ alignItems: "center", marginTop: 20 }}>
                                {/* {console.log(this.props.tasklist)} */}

                                {this.props.tasklist.map(task =>
                                    (<Task
                                        marginBottom={10}
                                        placeholder={task.description}
                                        checked={task.completed}
                                        completed={() => {
                                            const id = task.id; const completed = !task.completed;
                                            this.taskCompleted(id, completed)
                                        }}
                                        editable={this.state.editTask}
                                        edit={() => {
                                            if (this.state.name === 'check') {
                                                this.setState({ name: 'pencil' })
                                                this.setState({ editTask: !this.state.editTask })
                                                this.setState({editDescription: task.description})
                                                const description = this.state.editDescription
                                                const id = task.id;
                                                console.log(description, id)
                                                this.changeDescription(id, description)

                                            }
                                            else {
                                                this.setState({ name: 'check' })
                                                this.setState({ editTask: !this.state.editTask })
                                            }
                                        }}
                                        delete={() => {
                                            const id = task.id;
                                            this.deleteTask(id)
                                        }}
                                        description={text => {
                                            this.setState({ editDescription: text })
                                            console.log(this.state.editDescription)
                                        }}
                                        name={this.state.name}
                                    />)
                                )}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ flex: 0.3, alignItems: "center" }}>
                        <Button backgroundColor='#F2CC8F' text='Sair' marginTop={10} onPress={() => {
                            this.props.navigation.navigate('Login')
                        }} />
                    </View>
                </View>
            </SafeAreaView >
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        tasklist: store.tasklist,
        user: store.user,
    }
}

export default connect(mapStoreToProps)(Main)