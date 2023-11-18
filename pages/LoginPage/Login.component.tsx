/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Box, Text, Image, FormControl, Input, Button} from 'native-base';
import {
  useColorScheme,
  View,
  StyleSheet,
  Text as NativeText,
  Dimensions,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useForm, Controller} from 'react-hook-form';
import {LoginRequest} from '../../models';
import {useMutation} from 'react-query';
import {login} from '../../services/AuthService';

const {Label} = FormControl;

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Marketplace: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

function App({navigation}: LoginScreenProps) {
  const handleLoginPress = () => {
    navigation.navigate('Marketplace');
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginRequest>();
  const loginMutation = useMutation<boolean, Error, LoginRequest, unknown>(
    login,
  );

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const submit = async (data: LoginRequest) => {
    console.log(data);
    try {
      const res = await loginMutation.mutateAsync(data);
      if (res) {
        handleLoginPress();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box style={styles.backgroundContainer}>
      <Box style={styles.appContainer}>
        <Box alignItems="center" mt={'-12%'} style={{flex: 1}}>
          <Image
            source={require('../../assets/logo.jpg')}
            alt={'logo'}
            style={styles.imageContainer}
          />
        </Box>
        <Box style={{flex: 5}} justifyContent="flex-start">
          <Box mt={'33%'} mx={'3%'} style={{flex: 1}}>
            <Label>Email</Label>
            <Controller
              control={control}
              name="username"
              rules={{required: 'First Name is required'}}
              defaultValue=""
              render={({field}) => (
                <Input
                  backgroundColor="#F9F9F9"
                  borderColor={'#e4e3f3'}
                  borderWidth={1}
                  height={50}
                  onChangeText={field.onChange}
                  value={field.value}
                />
              )}
            />
            {errors.username && (
              <Text color={'red.300'} fontSize={'10px'}>
                *{errors.username.message}
              </Text>
            )}
            <Label>Password</Label>
            <Controller
              control={control}
              name="password"
              rules={{required: 'First Name is required'}}
              defaultValue=""
              render={({field}) => (
                <Input
                  backgroundColor="#F9F9F9"
                  borderColor={'#e4e3f3'}
                  borderWidth={1}
                  height={50}
                  onChangeText={field.onChange}
                  value={field.value}
                />
              )}
            />
            {errors.password && (
              <Text color={'red.300'} fontSize={'10px'}>
                *{errors.password.message}
              </Text>
            )}
            <Button
              mt={'5%'}
              backgroundColor={'#121212'}
              borderRadius={'6px'}
              onPress={handleSubmit(submit)}
              borderWidth={1}
              height={50}>
              <Text color="#FFFFFF">Log In</Text>
            </Button>
            <Box style={{flex: 1}} mx={'3%'}>
              <NativeText
                style={{
                  textAlign: 'center',
                  lineHeight: 17,
                  marginTop: '5%',
                  color: '#6E7191',
                }}>
                By continuing you agree to Dome’s{' '}
                <NativeText style={{color: '#000000'}}>
                  Terms & Conditions and Privacy Policy
                </NativeText>
                , and to receiving emails with updates.
              </NativeText>
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
    marginTop: '-40%',
    width: 300,
  },

  backgroundContainer: {
    flex: 1,
    marginTop: '30%',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;
