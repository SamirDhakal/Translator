import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import MyHeader from '../component/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
        }
    }

    goToTranslateScreen() {
        this.props.navigation.navigate('TranslateScreen')
    }

    login = async (username, password) => {
        if (username && password){
            try{
              const response = await firebase.auth().signInWithEmailAndPassword(username,password)
              if(response){
                this.props.navigation.navigate('TranslateScreen')
              }
            }
            catch(error){
              switch (error.code) {
                case 'auth/user-not-found':
                  Alert.alert("user dosen't exists")
                  console.log("doesn't exist")
                  break
                case 'auth/invalid-email':
                  Alert.alert('incorrect username or password')
                  console.log('invaild')
                  break
              }
            }
          }
          else{
              Alert.alert('enter username and password');
          }
    }

    render() {
        return(
            <View style = {styles.container}>
                <MyHeader/>
                <TextInput style = {styles.textInputBox}
                placeholder = "Username"
                onChangeText = {(text) => {
                    this.setState({
                        username : text
                    })
                }}
                value = {this.state.username}/>
                
                <TextInput style = {styles.textInputBox}
                placeholder = "password"
                secureTextEntry = {true}
                onChangeText = {(text) => {
                    this.setState({
                        password : text
                    })
                }}
                value = {this.state.password}/>

                <TouchableOpacity style = {styles.loginButton}  onPress={()=>{this.login(this.state.username ,this.state.password)}}>
                    <Text style = {styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    textInputBox : {
        width : '30%',
        height : 40,
        borderWidth : 1,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'center',
        marginTop : 70
    },
    loginButton : {
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'center',
        backgroundColor : 'orange',
        marginTop : 50,
        width : 300,
        height : 40,
        borderWidth : 1,
        borderRadius : 10
    },
    loginButtonText : {
        alignSelf : 'center',
        fontSize : 15,
        fontWeight : 'bold'
    }
})