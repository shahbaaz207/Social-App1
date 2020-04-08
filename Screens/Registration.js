import React, { Component } from 'react'
import { Text, StyleSheet, View, Button,Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import Constant from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Fire from './File'

export default class RegisterScreen extends Component {
    state = {
        user: {
          name: '',
          email: '',
          password: '',
          avatar: ''
        },
       error : null
    }
    componentDidMount(){
        this.getPhotoPermission()
    }
    getPhotoPermission=async()=>{
        if(Constant.platform.ios){
            const status=await Permissions.askAsync(Permissions.CAMERA_ROLL)
        }
        if(status!="granred"){
            alert('we need to persmission to access your camera')
        }
    }

    handlePickAvatar = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [6, 7]
        });
    
        if (!result.cancelled) {
            this.setState({ user: { ...this.state.user, avatar: result.uri } });
        }
      };

     
     handleSignUp=()=>{
        Fire.shared.createUser(this.state.user)
   }
    render() {
        return (
            <View style={styles.container}>
               
                <Text style={styles.gretting}> {'hello Again.. \n Sign up to get started'}</Text>
                <TouchableOpacity  style={styles.avatarPlaceholder}
                    onPress={this.handlePickAvatar}>
                    <Image
                    source={{ uri: this.state.user.avatar }}
                     style={styles.avatar}
                    />
                    <Ionicons name="ios-image" color="#fff" size={10}
                     style={{marginTop:1,marginLeft:0}}>
                    </Ionicons>
                </TouchableOpacity>
                <View style={styles.error}>
                  {this.state.error &&  <Text style={{color:'red'}}>{this.state.error}</Text>}
                </View>
                <View>
                <View style={styles.form}>
                    <Text style={styles.inputfield}>Name</Text>
                    <TextInput style={styles.input}
                     onChangeText={name=>this.setState({user:{...this.state.user,name}})}
                      value={this.state.user.name}
                     autoCapitalize='none' placeholder="Enter your name"></TextInput>
                </View>
                <View style={styles.form}>
                    <Text style={styles.inputfield}>Email Address</Text>
                    <TextInput style={styles.input}
                    onChangeText={email=>this.setState({user:{...this.state.user,email}})}
                    value={this.state.user.email}
                     autoCapitalize='none' placeholder="Email address"></TextInput>
                </View>
                <View style={styles.form}>
                    <Text style={styles.inputfield}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry
                     onChangeText={password=>this.setState({user:{...this.state.user,password}})}
                      value={this.state.user.password}
                     autoCapitalize='none' placeholder="Enter your new password"></TextInput>
                </View>
                </View>
                <TouchableOpacity style={styles.buttom} onPress={this.handleSignUp}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center',marginTop:30}}
                     onPress={()=>this.props.navigation.navigate('Login')}
                    >
                    <Text>
                        New to SocialApp?<Text style={{color:'red'}}>Sign In</Text>
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
    },
    avatar:{
            width:60,
            backgroundColor:'gray',
            height:60,
            borderRadius:50,
            marginTop:20,           
            position:'absolute'
    },
    avatarPlaceholder:{
        width:70,
        height:70,
        backgroundColor:'white',
        borderRadius:50,
        marginTop:20,
        left:170,
        justifyContent:'center',
        alignItems:'center'
    }
})
