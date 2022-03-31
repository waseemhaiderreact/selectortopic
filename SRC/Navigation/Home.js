import React from 'react';
import {View,Text,Button} from 'react-native';
import Notification from './Notification';
import { connect, useSelector, shallowEqual } from 'react-redux';
import { counterselector } from '../Redux/Selector';
import { Increament } from '../Redux/Home/action';



const Home = ({navigation,action})=>{
    const counter = useSelector(counterselector, shallowEqual);
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Button title='Increament'  onPress={action}/>
            <Text style={{fontSize:50}}>{counter||0}</Text>
            <Button title='Next Screen'  onPress={()=>navigation.navigate('Notification')}/>
        </View>
    )
} 

const mapDispatchToProps={
    action:Increament
}

export default connect(null,mapDispatchToProps)(Home);