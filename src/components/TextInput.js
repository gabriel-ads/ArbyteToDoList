import React from 'react';
import { TextInput } from 'react-native';

export default function TextBox(props) {
    return (
        <TextInput placeholder={props.placeholder} style={{
            backgroundColor: 'white',
            width: 310,
            height: 43,
            textAlign: "center",
            fontSize: 19,
            marginTop: props.marginTop,
            marginBottom: props.marginBottom,
        }}
        />
    )
}