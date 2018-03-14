import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    ToastAndroid,
    Keyboard
} from 'react-native';

import {Firebase} from '../component/firbase/Config';
import Edt from '../component/Edt';
import Btn from '../component/Btn';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lbName: "Email: ",
            plName: " your email ...",
            lbPass: "Password: ",
            plPass: "********",

            lbBtnLogin: 'Login',
            lbBtnRegister: 'Register',

            checkName: '',
            checkPass: ''
        }
        var email = ''
        var password = ''
    }
    _Login() {
        if (this.state.checkName == '') {
            ToastAndroid.show("Please enter User Name!", ToastAndroid.SHORT);
        } else if (this.state.checkPass == '') {
            ToastAndroid.show("Please enter password!", ToastAndroid.SHORT);
        } else {

            Firebase
                .auth()
                .signInWithEmailAndPassword(this.state.checkName, this.state.checkPass)
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);

                });
            Keyboard.dismiss();
            ToastAndroid.show("Success, please wait .....", ToastAndroid.SHORT)
            this
                .props
                .navigation
                .navigate("Home");
        }
    }
    _Register() {
        Keyboard.dismiss();
        this
            .props
            .navigation
            .navigate('Register');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Login Page
                </Text>

                <Edt
                    onChangeText
                    ={(value) => {
                    this.setState({checkName: value})
                }}
                    label={this.state.lbName}
                    placeholder={this.state.plName}/>
                <Edt
                    secureTextEntry={true}
                    onChangeText=
                    {(value) => {this.setState({checkPass:value})}}
                    label={this.state.lbPass}
                    placeholder={this.state.plPass}/>

                <Btn
                    onPress={() => {
                    this._Login()
                }}
                    label={this.state.lbBtnLogin}
                    style={styles.btnLogin}/>
                <Btn
                    onPress={() => {
                    this._Register()
                }}
                    label={this.state.lbBtnRegister}
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