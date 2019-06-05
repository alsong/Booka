import React from 'react';
import {View} from 'native-base';
import MapView from 'react-native-maps';

import styles from './MapContainerStyles';
import SearchBox from '../SearchBox';

export const MapContainer = ({region}) =>{
    return(
        <View style={styles.container}>
        <MapView
        provider={MapView.PROIVDER_GOOGLE}
        style={styles.map}
        region={region}//region comes from the user's current location
        >
        <MapView.Marker
            coordinate={region}
            pinColor="green"
        />
        </MapView>
        <SearchBox/>
        </View>
    )
}

export default MapContainer;