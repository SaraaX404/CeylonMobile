/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  NativeBaseProvider,
  Box,
  Button,
  Text,
  Image,
  ScrollView,
} from 'native-base';
import {useColorScheme, View, StyleSheet, ImageBackground} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Marketplace: undefined;
};

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;

type SplashScreenProps = {
  navigation: SplashScreenNavigationProp;
};

function App({navigation}: SplashScreenProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Box
     
      style={styles.backgroundContainer}>
      <Box style={styles.appContainer}>
        <Box alignItems="center" mt={'-12%'} style={{flex: 1}}>
          <Text fontSize="3xl" style={styles.buttonText}>
            Welcome to
          </Text>
          <Image
            source={require('../../assets/logo.jpg')}
            alt={'logo'}
            style={styles.imageContainer}
            mt={-50}
          />
        </Box>
      </Box>
      <Box
        position="absolute"
        bottom={'6%'}
        left={0}
        right={0}
        p={4}
        flexDirection="column"
        justifyContent="center">
        <Button
          m={2}
          _pressed={{
            backgroundColor: '#F2F2F2', // Background color when the button is pressed
          }}
          borderWidth={1}
          borderColor={'rgba(209, 213, 219, 0.18);'}
          backgroundColor={'#FFFFFF'}
          borderRadius={'6px'}
          onPress={handleLoginPress}>
          <Text color="#3627DE" style={styles.buttonText}>
            Login
          </Text>
        </Button>
        <Button m={2} backgroundColor={'#121212'} borderRadius={'6px'} onPress={handleRegisterPress}>
          <Text color="#FFFFFF" style={styles.buttonText}>
            Let’s started
          </Text>
        </Button>
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
    width: 400,
  },

  backgroundContainer: {
    flex: 1,
    marginTop: '30%',
  },
  buttonText: {
    fontFamily: 'Graphik-400-Regular',
  },
});

export default App;
