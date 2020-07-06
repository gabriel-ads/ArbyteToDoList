import React from 'react';
import { TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function TextBox(props) {
    return (
        <View style={{
            height: 43, flexDirection: 'row', width: 310, margin: 10, padding: 4, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F4F1DE', marginTop: props.marginTop, marginBottom: props.marginBottom,
        }}>
            <TextInput onChangeText={props.onChangeText} placeholder={props.placeholder} style={{
                backgroundColor: "transparent",
                width: 310,
                height: 43,
                textAlign: "center",
                fontSize: 19,
                paddingLeft: 40,
                paddingTop: 11,
            }}
            />
            <Icon
                name='plus'
                type='font-awesome'
                color='green'
                onPress={props.addTask}
                iconStyle={{ paddingRight: 35 }} />
        </View>
    )
}