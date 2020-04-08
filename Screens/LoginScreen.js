import React, { Component } from 'react'
import { Text, StyleSheet, View, Button,StatusBar,LayoutAnimation} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'

export default class LoginScreen extends Component {
    static navigationOption={
        header:null
    }
    state={
        email:'',
        password:'',
        error:null
    }

    handleLogin=()=>{
        const {email,password}=this.state
        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .catch(error=>this.setState({error:error.message}))
    }
    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content'></StatusBar>
                <Text style={styles.gretting}> {'hello again..\nwelcome back'}</Text>
                <View style={styles.error}>
                  {this.state.error &&  <Text style={{color:'red'}}>{this.state.error}</Text>}
                </View>
                <View>
                <View style={styles.form}>
                    <Text style={styles.inputfield}>Email Address</Text>
                    <TextInput style={styles.input}
                    onChangeText={email=>this.setState({email})}
                    value={this.state.email}
                     autoCapitalize='none' placeholder="Email address"></TextInput>
                </View>
                <View style={styles.form}>
                    <Text style={styles.inputfield}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry
                     onChangeText={password=>this.setState({password})}
                      value={this.state.password}
                     autoCapitalize='none' placeholder="Email address"></TextInput>
                </View>
                </View>
                <TouchableOpacity style={styles.buttom} onPress={this.handleLogin}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center',marginTop:30}}
                     onPress={()=>this.props.navigation.navigate('Register')}
                    >
                    <Text>
                        New to SocialApp?<Text style={{color:'red'}}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    gretting:{
        marginTop:20,
        fontSize:18,
        fontWeight:'400',
        textAlign:'center'
    },
    error:{
      height:70,
      alignItems:'center',
      justifyContent:'center',
      marginHorizontal:38  
    },
    inputfield:{
        textTransform:'uppercase',
        fontSize:15,
        color:'gray',
    },
    form:{
        marginHorizontal:30,
        marginBottom:48
    },
    input:{
        borderBottomColor:'gray',
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:'black'
    },
    buttom:{
        marginHorizontal:30,
        backgroundColor:'green',
        borderRadius:4,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    }
})
