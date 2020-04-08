import React, { Component } from 'react'
// import { Tex e from './File';
import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Profile extends Component {
    
    state={
        email:'',
      displayName:''
    }
    signOutUser=()=>{
        firebase.auth().signOut()
     }
    render() {
        return (
            <View style={styles.container}>
                     <View style={styles.container}>
                            <Text>Hello {firebase.auth().currentUser ? firebase.auth().currentUser.email : "unknown user"} </Text>
                            <TouchableOpacity style={{marginTop:32}} onPress={this.signOutUser}>
                                <Text>LogOut</Text>
                            </TouchableOpacity>
                          </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
