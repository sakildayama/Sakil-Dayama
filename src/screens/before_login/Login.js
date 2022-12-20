import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native'
import React from 'react'
import { useRef,useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native'
import { FULL_HEIGHT, FULL_WIDTH,RADIUS } from '../../constants/layout'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constants/colors'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import Input from '../../components/UI/Input'
import UiButton from '../../components/UI/UiButton'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation,}) => {
  let token = 'demo_token'
  const setlogins = async()=>{
 
    await AsyncStorage.setItem('TOKEN',token)
     navigation.reset({
      index: 0,
      routes: [{name: 'SignUp'}]
     })
  }
  useEffect(()=>{
    setlogins()
  },[])
  return (
    <SafeAreaView>
      <View style={styles.BoxONEContainer}>
       <Image style={styles.ImagePlate} source={icons.mixxchaimin} />
        </View>
        <View  style={styles.BoxTWOContainer}>
          <View>
               <Paragraph style={styles.LoginText}>Login</Paragraph>
          </View>
          <Input style={{backgroundColor:'#fff5ee'}} placeholder='Email' />
          <Input style={{backgroundColor:'#fff5ee'}} placeholder='Password'/>
          <View style={styles.forgat_Text}>
               <Paragraph>Forgat Password</Paragraph>
          </View>
          <View style={styles.Ematy_Container}></View>
          <View style={styles.OR_VIEW}>
          <Paragraph size={12}>OR</Paragraph>
          </View>
          <View style={styles.IconsVIEW} >
          <Image  style={styles.facebookImage} source={icons.facebook} />
          <Image  style={styles.googleImage} source={icons.google} />
          </View>
         <UiButton text='LOGIN' 
         style={styles.UiButton}
         onPress={()=>navigation.navigate('SignUp')}
         />
   <View style={styles.Register_red}>
   <Paragraph>Don't have an account ?<Paragraph color={'red'} style={styles.Register_red}> Register</Paragraph></Paragraph>
   </View>
        </View>
    </SafeAreaView>
  )
}
  
export default Login

const styles = StyleSheet.create({
  BoxONEContainer:{
    width:FULL_WIDTH,
    // height:FULL_HEIGHT*0.50,
    backgroundColor:colors.pink,
    justifyContent:"center",
    alignItems:"center",
  },
  ImagePlate:{
    resizeMode:"contain",
    marginBottom:40,
  },
  BoxTWOContainer:{
    height:FULL_HEIGHT*0.55,
    width:FULL_WIDTH*0.86,
    marginHorizontal:28,
    marginVertical:-60,
   borderWidth:1,
   backgroundColor:colors.white,
   borderRadius:9,
   elevation:10,

  },
  LoginText:{
   fontSize:30,
   marginVertical:13,
   marginHorizontal:10,
  },
  forgat_Text:{
  //  borderWidth:1,
   width:FULL_WIDTH*0.80,
  alignItems:'flex-end', 
  },
  Ematy_Container:{
    marginHorizontal:50,
    borderBottomWidth:0.2,
    width:FULL_WIDTH*0.60,
    marginVertical:30,

  },
  OR_VIEW:{
  //  borderWidth:1,
   borderRadius:9, 
  // position:'relative',
  marginHorizontal:155,
  marginVertical:-38,
  alignItems:"center",
  backgroundColor:colors.grey,

  },
  IconsVIEW:{
   flexDirection:"row",
   justifyContent:'flex-end',
   alignContent:'flex-end',
   marginVertical:40,
  //  borderWidth:1,
   width:FULL_WIDTH*0.45,
   marginHorizontal:30,

   
  },
  facebookImage:{
  marginVertical:3,
  marginHorizontal:5,
   
  },
  UiButton:{
   backgroundColor:colors.red,
   alignItems:"center",
   alignSelf:"center",
   width:FULL_WIDTH*0.80,
   padding:15,
   borderRadius:10,
   
  },
  Register_red:{
    alignItems:"center",
    marginVertical:10,
  },
 
})