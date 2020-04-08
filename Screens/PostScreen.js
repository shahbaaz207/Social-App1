import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constant from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Fire from './File';

const firebase=require('firebase');
require('firebase/firestore');


export default class PostScreen extends Component {
    
    state={
        text:'',
        image:null
    };
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
    handlePost = () => {
        Fire.shared
          .addPost({ text: this.state.text.trim(), localUri: this.state.image })
          .then(ref => {
            this.setState({ text: '', image: null });
            this.props.navigation.goBack();
          })
          .catch(error => {
            alert(error);
          });
      };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [6, 7]
        });
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                  {/* <TouchableOpacity onPress={this.handlePost}>
                  <Text style={{fontWeight:'bold'}}> Post </Text>
                  </TouchableOpacity> */}
                </View>
                <View style={styles.inputField}>
                    <Image source={require('../assets/download.png')} style={styles.avatar}/>
                    <TextInput autoFocus={true} placeholder="Do you Want to share somethings." numberOfLines={4}
                        multiline
                        style={{flex:1,paddingLeft:10}}
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
                <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                    <Ionicons name={'ios-camera'} size={40}/>
                </TouchableOpacity>
                <Button title="Post" onPress={this.handlePost}/>

                <View style={{marginHorizontal:32,marginTop:32,height:350}}>
                <Image
                    source={{ uri: this.state.image }}
                    style={{ width: '100%', height: '100%' }}
                     ></Image>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-around',     
    },
    avatar:{
            width:48,
            height:48,
            borderRadius:50,
            marginLeft:-25
    },
    inputField:{
        margin:32,
        flexDirection:'row'
    },
    photo:{
        alignItems:'flex-end',
        marginHorizontal:20,
        
    }
})
