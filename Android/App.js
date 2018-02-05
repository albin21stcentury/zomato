import React,{Component} from 'react';
import { StyleSheet, Text, View ,Image,TouchableHighlight,ScrollView,TouchableOpacity} from 'react-native';
import {Avatar,Button} from 'react-native-elements';
import { EvilIcons,Entypo,Feather,Octicons,Ionicons,FontAwesome} from 'react-native-vector-icons';
import {DrawerNavigator,DrawerLayoutAndroid,TabNavigator} from 'react-navigation';
import { Tabs } from './tabs/router.js';

class App extends Component {
  render() {
var DrawerLayoutAndroid = require('DrawerLayoutAndroid');
    var navigationView = (
   <View style={styles.container}>   
   <Text style={{color:'#B8BFB6',fontSize:26}}>zomato</Text>
  <View
  style={{
    borderBottomColor: '#B8B0B6',
    borderBottomWidth: 1,
  }}
/><Text>{'\n'}</Text>
  <Avatar
  small
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
  activeOpacity={0.7}
/>
<Text style={{top:55,left:35,position:'absolute',fontSize: 26}}>vicky cena</Text>
<Text style={{top:85,left:35,position:'absolute',color:'#A6AAA5'}}>0 REVIEWS,0 FOLLOWERS</Text>
<Text>{"\n"}</Text>
<View
  style={{
    borderBottomColor: '#B8B0B6',
    borderBottomWidth: 1,
  }}
/><Text>{"\n"}</Text>
<TouchableHighlight onPress={()=>{}}>
   <View style={{height:60,width:150,left:5,backgroundColor:'#B8BFB6',}}>
    
         <Text>{"\n"}      Notifications</Text>
     </View>
 </TouchableHighlight>

  <View style={{position:'absolute',top:140,left:160,backgroundColor:'#B8BFB6',height:60,width:170}}>
        <Text>{"\n"}      Bookmarks</Text>
  </View><Text>{"\n\n"}</Text>
<Text style={{top:215,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
<Feather
 size={45}
 name='home'
 />
 <Text style={{fontSize:26,fontWeight:'bold'}}>      Home
 </Text>


</Text>
<View
  style={{
    top:40,
    borderBottomColor: '#B8B0B6',
    borderBottomWidth: 1,
  }}
/>
<View
  style={{
    top:85,
    borderBottomColor: '#B8B0B6',
    borderBottomWidth: 1,
  }}
/>
<View
  style={{
    top:140,
    borderBottomColor: '#B8B0B6',
    borderBottomWidth: 1,
  }}
/>
<View
  style={{
    top:190,
    borderBottomColor: '#B8B0B6',
    borderBottomWidth: 1,
  }}
/>
<View
  style={{
    top:240,
    borderBottomColor: '#B8B0B6',
    borderBottomWidth: 1,
  }}
/>

<Text style={{top:275,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
<Ionicons
 size={45}
 name='ios-list-box-outline'
 />
 <Text style={{fontSize:26,fontWeight:'bold'}}>        Feed
 </Text>

</Text>

<Text style={{top:325,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
<FontAwesome
 size={45}
 name='map-marker'
 />
 <Text style={{fontSize:26,fontWeight:'bold'}}>        nearby
 </Text>

</Text>
<Text style={{top:385,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
<Feather
 size={45}
 name='shopping-cart'
 />
 <Text style={{fontSize:26,fontWeight:'bold'}}>     online orders
 </Text>
</Text>
<Text style={{top:435,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
<Feather
 size={45}
 name='more-horizontal'
 />
 <Text style={{fontSize:26,fontWeight:'bold'}}>      More
 </Text>
</Text>

<Text style={{top:520,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
send feedback

 </Text>
 <Text style={{top:560,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
Rate us on the playstore

 </Text> 




  </View>
  );



    return (
      
        <DrawerLayoutAndroid
      drawerWidth={350}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
  
     
      <Tabs />
      </DrawerLayoutAndroid>
      );
  }
}





export default App;




const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
});