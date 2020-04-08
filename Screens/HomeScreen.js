import React, { Component } from 'react'
import { Text, StyleSheet, View, Button,Image } from 'react-native';
// import * as firebase from 'firebase';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment'

const posts=

[
    {
        id:1,
        name:"Shhabaz",
        text:'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium',
        timestap:1234457898,
        avatar:require('../assets/download.png'),

    },
    {
        id:2,
        name:"Ali",
        text:'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium',
        timestap:1234457898,
        avatar:require('../assets/download.png'),

    },
    {
        id:3,
        name:"Ladla",
        text:'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium',
        timestap:1234457898,
        avatar:require('../assets/download.png'),

    },
    {
        id:4,
        name:"Siddique",
        text:'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium',
        timestap:1234457898,
        avatar:require('../assets/download.png'),

    },
    {
        id:5,
        name:"Taha",
        text:'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium',
        timestap:1234457898,
        avatar:require('../assets/download.png'),
    },
    {
        id:6,
        name:"Hasan",
        text:'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium',
        timestap:1234457898,
        avatar:require('../assets/download.png'),

    },
    {
        id:7,
        name:"Yusuf",
        text:'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium',
        timestap:1234457898,
        avatar:require('../assets/download.png'),

    },
]
 
  
  export default class HomeScreen extends Component {
      state={
          count:0,
         
      }
     
    Item= post  =>{
        return (
          <View style={styles.feedItem}>
            <Image source={post.avatar} style={styles.avatar}/>
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                    <View>
                        <Text style={styles.name}>{post.name}</Text>
                        <Text style={styles.timestap}>{moment(post.timestamp).fromNow()}</Text>
                            </View>
                            <Ionicons name='ios-more' size={24} color="#737888" />
                                </View>
                                <Text style={styles.post}>{post.text}</Text>
                                <Image source={post.avatar} style={styles.postImage} resizeMode='cover'/>
                            <View style={{flexDirection:'row'}}>
                           <TouchableOpacity>
                           <Ionicons name="ios-heart-empty" size={20} color='red' style={{marginRight:16}}>
                           </Ionicons>
                           </TouchableOpacity>
                           <Text style={{marginLeft:10}}>{this.state.count}</Text>
                           <Ionicons name="ios-chatboxes" size={20} color='red' style={{paddingLeft:20}}/>
                          
                    </View>
            </View>
          </View>
        );
      }
      render(){
    return (
      <View style={styles.container}>
        <FlatList style={styles.feed}
          data={posts}
          renderItem={({ item }) =>this.Item(item)}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    feed:{
        marginHorizontal:15
    },
    feedItem:{
        backgroundColor:"#fff",
        borderRadius:5,
        padding:8,
        flexDirection:"row",
        marginVertical:10
    },
    avatar:{
        width:36,
        height:36,
        borderRadius:18,
        marginRight:16,
    },
    name:{
        fontSize:15,
        fontWeight:"700",
        color:"#454D65",
    },
    timestap:{
        fontSize:11,
        color:"#C4C6CE",
        marginTop:4,
    },
    post:{
        marginTop:16,
        fontSize:14,
        color:"#838899"
    },
    postImage:{
        width:undefined,
        height:100,
        borderRadius:5,
        marginTop:15,
        marginBottom:10,
        marginHorizontal:16
    }
  });


// state={
   
// }
// 
// render() {
//     return(
//         <View style={styles.container}>
//        <Text>Hello {firebase.auth().currentUser ? firebase.auth().currentUser.email : "unknown user"} </Text>
//         <TouchableOpacity style={{marginTop:32}} onPress={this.signOutUser}>
//             <Text>LogOut</Text>
//         </TouchableOpacity>
//      </View>

//     )
    
// }