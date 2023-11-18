import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashPage, LoginPage, ProfilePage, PolicyPage, RegisterPage, PropertyPage, BidComponent} from './pages';
import {NativeBaseProvider} from 'native-base';
import {Marketplace} from './pages/MarketplacePage';
import {SettingsPage} from './pages/SettingsPage';
import { QueryClient,QueryClientProvider  } from 'react-query'
import { AuthContextProvider } from './context';

const Stack = createNativeStackNavigator();

const client = new QueryClient()

const App = () => {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={client}>
        <AuthContextProvider>
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

          <Stack.Screen
            name="BidScreen"
            component={BidComponent}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
        </AuthContextProvider>
    
      </QueryClientProvider>
      
    </NativeBaseProvider>
  );
};

export default App;
