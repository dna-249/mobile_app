import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PaperProvider, Text,useTheme } from 'react-native-paper'

function home() {
    const theme = useTheme()
  return (
    <PaperProvider>
   <View >
       <ThemedText type='subtitle' style={{backgroundColor:theme.colors.surfaceVariant, 
                                       padding:20,
                                    height:100,
                                    borderRadius:30}}> Welcome!</ThemedText>
       <ThemedText  > User</ThemedText>
       <ThemedText style={{backgroundColor:theme.colors.primary,
                         height:200,
                         padding:20,
                        borderRadius:50}}> <Text>Account Balance</Text> <Text>Refarral link</Text></ThemedText>
   </View>
   </PaperProvider>
  )
}

export default home
const style = StyleSheet.create({
    div:{
        height:100,
        borderRadius:50
       


    }
})