//Main component for the home route that has state
import React from 'react';
import {View,Text} from 'react-native';

export default class Home extends React.Component{
    componentDidMount(){
        //call setName action
        this.props.setName();
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>Booka {this.props.name}</Text>
            </View>
        )
    }
}
