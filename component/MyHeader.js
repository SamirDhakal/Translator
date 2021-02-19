import * as React from 'react';
import { Text, View } from 'react-native';

export default class MyHeader extends React.Component {
    render() {
        return(
            <View style = {{backgroundColor : 'orange', flex : 1}}>
                <Text style = {{marginTop : 15, fontSize : 25, alignSelf : 'center', fontWeight : 'bold'}}>Translator</Text>
            </View>
        )
    }
}