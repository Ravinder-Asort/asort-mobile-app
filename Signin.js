import React,{ Component } from 'react';
import { StyleSheet, View,Image ,Text ,ScrollView,KeyboardAvoidingView , Animated, Keyboard,Platform , LoginForm,TextInput,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Item, Input, Icon ,Form ,Label,Button} from 'native-base';
import * as Font from 'expo-font';
import {StatusBar} from 'react-native';
import { relative } from 'path';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'




export default class Signin extends React.Component{

      constructor(props) {
        super(props);
    
        this.imageHeight = new Animated.Value(500);
      }
    
      async componentWillMount () {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);

          await Font.loadAsync({
            // Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
            // Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),

            Titillium: require('./assets/fonts/TitilliumWeb-Regular.ttf'),
            ...Ionicons.font,
          });
      }
    
      componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
      }
    
      keyboardWillShow = (event) => {
        Animated.timing(this.imageHeight, {
          duration: event.duration,
          toValue: 200,
        }).start();
      };
    
      keyboardWillHide = (event) => {
        Animated.timing(this.imageHeight, {
          duration: event.duration,
          toValue: 400,
        }).start();
      };
    
  

  
    render() {
      
      const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
      
       return (

        <KeyboardAvoidingView behavior="padding" style={styles.container}>

        

            <View style={styles.loginContainer}>

                    <Image resizeMode="cover" style={styles.logo} source={require('./assets/4.jpg')} />
            </View>

            <View style={{flex:0.5 , width:'90%', marginTop:40,alignSelf:'center'}}>

            <Label style={{color:'#ccc' , letterSpacing: 2 }}>Username</Label>
            <Item fixedLabel style={styles.input}>
              <Input />
            </Item>
            <Label style={{color:'#ccc' , letterSpacing: 5,marginTop:40}}>Password</Label>
            <Item fixedLabel last style={styles.input}>
              
              <Input />
            </Item>
         

            <Button block light style={{backgroundColor:'#717171' ,color:'#fff' , height:70 , marginTop:30}}>

                <Text style={{color:'#fff' , fontSize:18}}>Login</Text>

            </Button>

           
            </View>
      

       </KeyboardAvoidingView>
       
      );
   }
  
  }
  
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width:'100%'
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 0.5,
        justifyContent: 'center',
        width:'100%',
        height:'20%'
    },
    logo: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    input:{
        height:30,
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 0,
        color: '#000',
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor:'#ccc',
        
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }

})