import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashPage, LoginPage, ProfilePage, PolicyPage, RegisterPage, PropertyPage} from './pages';
import {NativeBaseProvider} from 'native-base';
import {Marketplace} from './pages/MarketplacePage';
import {SettingsPage} from './pages/SettingsPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />
           <Stack.Screen
            name="Register"
            component={RegisterPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Marketplace"
            component={Marketplace}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfilePage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Policies"
            component={PolicyPage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Property"
            component={PropertyPage}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;