import React from 'react'
import { KeyboardAvoidingView,Platform, View,StyleSheet } from 'react-native'
import {Button, Text,TextInput}from "react-native-paper"
import { useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import { Link } from 'expo-router'
export default function signup() {
  const [toggle,setToggle] = useState(false)
  const handleToggle =()=>{
    setToggle(pre =>!pre)
  }
  return (
    <>
    <KeyboardAvoidingView>
    <View style={style.div}>
      <ThemedText type='title'>{toggle? "Create Account":"Welcome Back"}</ThemedText>
      <TextInput style={style.p} placeholder='username' mode='outlined' label={"username"} />
      <TextInput style={style.p} placeholder='password' mode='outlined' label={"password"} />
      <Button style={style.p} mode='contained'>{toggle? "Siqn Up":"Sign In"}</Button>:
     <Button  mode='text' onPress={handleToggle}>Don't you already have an account?Click<span style={{color:"blue",textDecoration:"underlinde"}}> here to sign Up</span> </Button>
    </View>
    </KeyboardAvoidingView>
  </>)
}
const style = StyleSheet.create({
  div:{
    paddingTop:120,
    display:"flex",
    alignContent:"center",
    alignItems:"center",
    margin:"auto"
  },
  p:{
    width:300,
    margin:10
  }
  
})

