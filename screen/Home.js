import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    ToastAndroid,
    Modal,
    TouchableHighlight
} from 'react-native'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            data:[
                {
                    key:'a',
                    detail:'Detail'
                },
                {
                    key:'b',
                    detail:'Detail b'
                },
                {
                    key:'c',
                    detail:'Detail c'
                },
            ]
        }
    }
    _OpenModalAdd(){
        this.setState({modalVisible:true})
    }
    _OkAdd(){}
    _CancelAdd(){
        this.setState({modalVisible:false})
    }
    render() {
        return (
            <View style ={styles.container}>
                {/* Modal add note  */}
                    <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({modalVisible:false})
                    }}>
                        <AddForm/>
                        <View style = {styles.viewButtonForm}>
                        <ButtonModalAdd
                            onPress = {()=>{this._OkAdd()}}
                            text = 'OK'/>
                        <ButtonModalAdd
                            onPress = {()=>{this._CancelAdd()}}
                            text = 'Close'/>
                        </View>
                    </Modal>
                <Text>
                    List Note
                </Text>
                   <ScrollView style= {styles.flatList}>
                    <FlatList
                            data={this.state.data}
                            renderItem={({item}) =>
                            <View>
                                <Text>{item.key}</Text>
                                <Text>{item.detail}</Text>
                            </View>
                            }
                            extraData={this.state}
                        />
                   </ScrollView>
                    <FloatButton
                    onPress = {()=>{this._OpenModalAdd()}}
                    />
            </View>
        )
    }
}

var title;
var detail;
var time;
class AddForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'Title',
            detail:'Detail',
            time:'Time'
        }
    }
    render(){
        return(
            <View style={styles.containerModalAdd}>
                <Input
                    title = {this.state.title}
                />
                <Input
                    title = {this.state.detail}
                />
                <Input
                    title = {this.state.time}
                />
                
            </View>
        );
    }
}
class Input extends React.Component{
    render(){
        return(
            <View>
                <Text>{this.props.title}</Text>
                <TextInput
                    value = {this.props.value}
                    onChangeText = {this.props.onChangeText}
                    secureTextEntry = {this.props.secureTextEntry}
                    style = {styles.input}
                />
            </View>
        );
    }
}
class ButtonModalAdd extends React.Component{
    render(){
        return(
            <TouchableOpacity
                onPress = {this.props.onPress}
                style={styles.buttonModalAdd}
            >
                <Text style = {styles.txtButtonModalAd}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}

class FloatButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            add :"+"
        }
    }
    render(){
        return(
            <TouchableOpacity 
            onPress = {this.props.onPress}
            style= {styles.floatbutton}>
                <Text style = {styles.txtFloatButton}>
                    {this.state.add}
                </Text>
            </TouchableOpacity>
        );
    }
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    viewButtonForm:{
        width: width - 120,
        backgroundColor:'pink',
        alignSelf:'center',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    buttonModalAdd:{
        justifyContent:'center',
        height:50,
        width: 100,
        backgroundColor:'yellow',
        alignItems: 'center',
    },
    containerModalAdd:{
        flex:1,
        justifyContent:'center',
        // backgroundColor:'red',
        width:width - 20,
        alignSelf: 'center',
    },
    floatbutton:{
        height: 50,
        width:50,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems: 'center',
        position: 'absolute',
        bottom:20,
        right:10,
    },
    txtFloatButton:{},
    flatList:{
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
});