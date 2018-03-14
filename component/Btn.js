import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet, Dimensions,TouchableOpacity} from 'react-native'


export default class Btn extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={this.props.style}>
                <Text style= {{alignSelf:'center'}}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

const {width, height} = Dimensions.get("window");
