import React from 'react';
import {View,Text,Button} from 'react-native';
import Home from './Home';
const Profile = ({navigation})=>{
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Notification</Text>
        <Button title='Next Screen'  onPress={()=>navigation.navigate('Notification')}/>
    </View>
    )
} 

export default Profile;