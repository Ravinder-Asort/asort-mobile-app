import React,{ Component } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Button,Header,Left,Body,Right,Title ,Text,StyleProvider} from 'native-base';

import { StyleSheet, View,Image } from 'react-native';
import Carousel from './Imageslider.js';
import {StatusBar} from 'react-native';
import { getSupportedVideoFormats } from 'expo/build/AR';



export default class App extends React.Component {

  constructor(props)
  {

    super(props);
    this.state = {loading:true};
  }

 async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    this.setState({loading:false});
  }

  render() {
    if (this.state.loading) {
        
    
    
    return (

      

      <View style={styles.container}>

{console.log(StatusBar.currentHeight)}
      <View style={styles.slider}>

      <Carousel pageStyle={{backgroundColor : '#eee' ,height:'58%' ,marginTop:64 , border:'none'}} swipeThreshold = {0.2} currentPage={1} initialPage={1}> 

      <Image style={{width:100+'%',height:100+'%'}} source={require('./assets/3.jpg')}/>
      <Image style={{width:100+'%',height:100+'%'}} source={require('./assets/2.jpg')}/>
      <Image style={{width:100+'%',height:100+'%'}} source={require('./assets/1.jpg')}/>


            
        </Carousel> 

       

       <Text style={styles.text}>WELCOME TO ASORT</Text>

      
      <Text style={styles.cont}>Asort is a fashion e-commerce and lifestyle platform working 
to change the way people shop fashion online</Text>

      
      <View style={styles.buttonView}>

     

          <Button style={styles.signin}><Text style={{textAlign:'center' , flex:1}}>SIGN IN</Text></Button>  
          <Button style={styles.signin}><Text style={{textAlign:'center', flex:1}}>SIGN UP</Text></Button>  

      </View>
          
       
      </View>

      </View>
     
    );
  }
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    
  },
  welcome:{
    flex:0,
    width:100+'%',
    alignItems: 'center',
    justifyContent:'center',
  },
text : {
  top: 550,
  position: "absolute",
  backgroundColor: "transparent",
 fontFamily:'Roboto',
  fontSize: 20,
  lineHeight: 140,
  left:25+'%',
  letterSpacing: 5
},


cont:{

  top: 650,
  width:80+'%',
  position: "absolute",
 left:10+'%',
  backgroundColor: "transparent",
  fontSize: 14,
  textAlign:'center',
  lineHeight:30,
  color:'#ccc',

},

signin:{
width:'50%',
position: 'relative',
textAlign:'center',
backgroundColor:'#717171',
height:60,
borderRadius:0,
borderRightWidth:0.5,
borderColor:'#fff',
fontFamily:'Roboto_medium'
},

buttonView: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  position:'absolute',
  textAlign:'center',
  bottom:0
},
 
});
