import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                backgroundColor: props.backgroundColor,
                width: 178,
                height: 45,
                marginTop: props.marginTop
            }}
        >
            <Text style={{
                paddingTop: 5,
                alignSelf: "center",
                color: 'black',
                fontSize: 24
            }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}