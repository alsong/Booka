//Main component for the home route that has state
import React from 'react';
import {View,Text} from 'react-native';
import MapContainer from './MapContainer';
import {Container} from 'native-base';

export default class Home extends React.Component{
    componentDidMount(){
        //call GetCurrentLocation action
        this.props.GetCureentLocation();
    }
    render(){
        const region = {
            latitude:3.146642,
            longitude:101.695845,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
        }
        return(
            <Container>
                //map only loads when the region is loaded
                {this.props.region.latitude && 
                <MapContainer region={this.props.region}/>
                }
            </Container>
        )
    }
}
