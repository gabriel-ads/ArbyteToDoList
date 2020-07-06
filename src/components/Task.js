import React from 'react';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import { Button, ThemeProvider, Avatar, Badge, Icon, CheckBox } from 'react-native-elements';


export default function TextBox(props) {
    return (
        <View style={{
            height: 43, flexDirection: 'row', width: 310, backgroundColor: '#F4F1DE', marginTop: props.marginTop, marginBottom: props.marginBottom, flex: 1
        }}>
            <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
                <CheckBox
                    checked={props.checked}
                    onPress={props.completed}
                />
            </View>
            <View style={{ alignItems: "center", flex: 1, marginBottom: 10, paddingBottom: 10 }}>
                <TextInput onChangeText={props.description} ref={props.ref} editable={props.editable} placeholderTextColor={'black'} placeholder={props.placeholder} style={{
                    // backgroundColor: "transparent",
                    width: 250,
                    height: 43,
                    textAlign: "left",
                    fontSize: 19,
                    justifyContent: "center",
                }}
                />
            </View>
            <View style={{ alignItems: "flex-end", justifyContent: "center", paddingRight: 10 }}>
                <Icon
                    name={props.name}
                    type='font-awesome'
                    style={{ justifyContent: "center", }}
                    onPress={props.edit}
                   iconStyle={false}
                   
                />
            </View>
            <View style={{ alignItems: "flex-end", justifyContent: "center", paddingRight: 5 }}>
                <Icon
                    name='trash'
                    type='font-awesome'
                    color='red'
                    style={{ justifyContent: "center" }}
                    onPress={props.delete}
                />
            </View>
        </View>
    )
}
