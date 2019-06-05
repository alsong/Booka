import React from 'react';
import {Text} from 'react-native';
import styles from './SearchBoxStyles';
import {View,InputGroup,Input} from 'native-base';

export const SearchBox =()=>{
    return(
        <View style={styles.searchBox}>
        <View style={styles.inputWrapper}>
        <Text style={styles.label}>PICK UP</Text>
            <InputGroup>
            <Input style={styles.inputSearch} placeholder='Choose pick-up location'/>
            </InputGroup>
        </View>
        <View style={styles.secondInputWrapper}>
        <Text style={styles.label}>DROP 0FF</Text>
            <InputGroup>
            <Input style={styles.inputSearch} placeholder='Choose drop-off location'/>
            </InputGroup>
        </View>
        </View>
    );
};

export default SearchBox;