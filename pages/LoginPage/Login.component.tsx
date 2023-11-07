/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
 
  Box,
  
  Text,
  Image,
  FormControl,
  Input,
  Button
} from 'native-base';
import {useColorScheme, View, StyleSheet,Text as NativeText, ImageBackground, KeyboardAvoidingView, Dimensions} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const {Label} = FormControl

type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Marketplace: undefined;
  };

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type LoginScreenProps = {
    navigation: LoginScreenNavigationProp;
  };

function App({navigation}:LoginScreenProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const handleLoginPress = () => {
    navigation.navigate('Marketplace');
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  
    <Box
        style={styles.backgroundContainer}>
        <Box style={styles.appContainer}>
          <Box alignItems="center" mt={'-12%'}  style={{flex: 1}}>
          <Image
              source={require('../../assets/logo.jpg')}
              alt={'logo'}
              style={styles.imageContainer}
            />
          </Box>
          <Box style={{flex:5}}  justifyContent='flex-start'>
  <Box mt={"33%"} mx={"3%"} style={{flex:1}} >
    <Label>Email</Label>
    <Input  backgroundColor='#F9F9F9' borderColor={'#e4e3f3'} borderWidth={1} height={50} />
    <Label>Password</Label>
    <Input  backgroundColor='#F9F9F9' borderColor={'#e4e3f3'} borderWidth={1} height={50} type="password" />
    <Button  mt={"5%"} backgroundColor={'#121212'} borderRadius={'6px'} onPress={handleLoginPress} borderWidth={1} height={50}>
      <Text color="#FFFFFF">Log In</Text>
    </Button>
    <Box style={{flex:1}} mx={'3%'}>
      <NativeText style={{textAlign:'center', lineHeight:17, marginTop:'5%', color:'#6E7191'}}>By continuing you agree to Dome’s <NativeText style={{color:'#000000'}}>Terms & Conditions
        and Privacy Policy</NativeText>, and to receiving 
        emails with updates.</NativeText>
    </Box>
  </Box>
</Box>
        </Box>
      </Box>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  imageContainer: {
    resizeMode: 'contain',
    marginTop:'-40%',
    width: 300,
  },

  backgroundContainer:{
    flex: 1,
    marginTop: '30%',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

export default App;
