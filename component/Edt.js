import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet,Dimensions} from 'react-native'
export default class Edt extends React.Component {
    render() {
        return (
            <View style={styles.EDT}>

                <Text style={styles.labelEdt}>{this.props.label}</Text>

                <TextInput
                    isFocus = {true}
                    secureTextEntry={this.props.secureTextEntry}
                    keyboardType={this.props.keyboardType}
                    placeholder={this.props.placeholder}
                    style={styles.txtInputEdt}
                    onChangeText={this.props.onChangeText}/>

            </View>
        );
    }
}

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    txtInputEdt: {
        width: width - 200,
        marginLeft: 20,
        paddingLeft: 10
    },
    EDT: {
        flexDirection: 'column',
        justifyContent: 'center'
    },  
  
});