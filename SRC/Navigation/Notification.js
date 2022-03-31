import React from 'react';
import {View,Text,Button} from 'react-native';
import Profile from './Profile';

const Notification = ({navigation})=>{
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Notification</Text>
            <Button title='Next Screen'  onPress={()=>navigation.navigate('Profile')}/>
        </View>
    )
} 

export default Notification;