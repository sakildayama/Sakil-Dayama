import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native'
import React from 'react'
import { useRef,useEffect } from 'react';
import { FULL_HEIGHT, FULL_WIDTH,RADIUS } from '../../constants/layout'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constants/colors'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import Input from '../../components/UI/Input'
import UiButton from '../../components/UI/UiButton'
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage';
AsyncStorage

const SignUp = ({navigation}) => {
  const navigate = useRef(null)
  console.log('=====>',navigate.current);
  
  const getToken = async()=>{

    let token = await AsyncStorage .getItem('TOKEN')
    if(token){
      navigate.current.reset({
        index:0,
        routes:[{name: 'Home'}]
      })
    }
    setTimeout(()=>{          // SplashScreen
      SplashScreen.hide()
    },5000);
  
   
  }
  useEffect(()=>{
    getToken()
  
  },[])
  return (
    <SafeAreaView>
      <View style={styles.BoxONEContainer}>
       <Image style={styles.ImagePlate} source={icons.deliveryboy} />
        </View>
        <View  style={styles.BoxTWOContainer}>
          <View>
               <Paragraph style={styles.LoginText}>SIGN UP</Paragraph>
          </View>
          <Input style={{backgroundColor:'#fff5ee'}} placeholder='Enter Email id/ Phone No.' />
          <Input style={{backgroundColor:'#fff5ee'}} placeholder='Password'/>
          <Input style={{backgroundColor:'#fff5ee'}} placeholder='Cofirm Password'/>

         <UiButton text='SIGN UP' 
         style={styles.UiButton}
         />
   <View style={styles.Register_red}>
   <Paragraph>Don't have an account ?<Paragraph color={'red'} style={styles.Register_red}> Register</Paragraph></Paragraph>
   </View>
        </View>
    </SafeAreaView>
  )
}
  
export default SignUp

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
    marginVertical:-100,
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