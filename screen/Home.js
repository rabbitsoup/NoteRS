import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
    ImageBackground
} from 'react-native'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.sate = {}
    }
    render() {
        return (
            <View style ={styles.container}>
                <Text>
                    Home Page
                </Text>


            </View>
        )
    }
}

class ListNote extends React.Component{
    render(){
        return(
            <View>
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});