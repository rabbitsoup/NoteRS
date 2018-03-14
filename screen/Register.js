import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    ToastAndroid
} from 'react-native';

import {Firebase} from '../component/firbase/Config';
import Edt from '../component/Edt';
import Btn from '../component/Btn';

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lbName: "Name:",
            lbPass: "Password:",
            lbRePass: "Retype:",
            labelBTN: 'Register',
            checkName: '',
            checkPass: '',
            checkRePass: ''
        }
        var email = ''
        var password = ''
    }

    _Register() {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (this.state.checkName == '') {
            ToastAndroid.show("Type your User Name, please", ToastAndroid.SHORT);
        } else if (this.state.checkName.toLowerCase != re) {
            ToastAndroid.show("Please enter Email correct email format", ToastAndroid.SHORT);
        } else if (this.state.checkPass == '') {
            ToastAndroid.show("Type your Password, please", ToastAndroid.SHORT);
        } else if (this.state.checkRePass == '') {
            ToastAndroid.show("Type your Password, please", ToastAndroid.SHORT);
        } else if (this.state.checkPass != this.state.checkRePass) {
            ToastAndroid.show("Passwords are not same", ToastAndroid.SHORT// Check format Email

            );
        } else {
            email = this.state.checkName;
            password = this.state.checkPass;

            Firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                });

            ToastAndroid.show("Success , please wait ... ", ToastAndroid.SHORT)

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Register Page
                </Text>

                <Edt
                    label={this.state.lbName}
                    onChangeText={(value) => {
                    this.setState({checkName: value})
                }}/>
                <Edt
                    label={this.state.lbPass}
                    secureTextEntry={true}
                    onChangeText=
                    {(value)=>{this.setState({checkPass:value})}}/>
                <Edt
                    secureTextEntry={true}
                    onChangeText=
                    {(value)=>{this.setState({checkRePass:value})}}
                    label={this.state.lbRePass}/>

                <Btn
                    onPress={() => {
                    this._Register()
                }}
                    label={this.state.labelBTN}
                    style={styles.btnLogin}/>

            </View>
        );
    }
}

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    btnLogin: {
        alignSelf: 'center',
        backgroundColor: 'red',
        height: height * (6 / 100),
        justifyContent: 'center',
        width: width - 200,
        marginTop: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
