import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MyHeader from '../component/MyHeader';
import db from '../localdb';

export default class TranslateScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            english : '',
            nepali : ''
        }
    }

    translateWord = () => {
        
    }

    render() {
        return(
            <View style = {styles.container}>
                <MyHeader/>
                <View style = {styles.row}>
                    <View>
                        <Text style = {[styles.languageText, {marginLeft : 300}]}>English</Text>

                        <TextInput style = {[styles.textInput, {marginLeft : 300}]}
                        placeholder = "Enter Text"
                        onChangeText = {(text) => {
                            this.setState({
                                english : text
                            })
                        }}
                        value = {this.state.english}/>
                    </View>
                    
                <View style = {styles.inputWrap}>
                    <Text style = {styles.languageText}>Nepali</Text>
                    
                    <TextInput style = {styles.textInput}
                    placeholder = "Translation"
                    value = {this.state.nepali}/>

                    <TouchableOpacity style = {{justifyContent : 'center', width : 70, height : 40, borderRadius : 5, borderWidth : 1, backgroundColor : 'red'}} onPress = {() => {
                        this.setState({
                            nepali : db[this.state.english].nepali
                        })
                    }}>
                        <Text style = {{color : 'black', fontWeight : 'bold', justifyContent : 'center', alignSelf : 'center'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
                    

                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    languageText : {
        marginTop : 50,
        fontSize : 20,
        fontWeight : 'bold'
    },
    textInput : {
        marginTop : 30,
        width : 150,
        height : 120,
        borderWidth : '1',
        borderRadius : 10
    },
    row : {
        flex : 1,
        flexDirection : "row"
    },
    inputWrap : {
        flex : 1,
        marginLeft : 500
    }
})