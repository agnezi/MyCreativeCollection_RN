/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllCollections} from '@views/AllCollections';
import {Login} from '@views/Login';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {CreateAccount} from '@views/CreateAccount';
import {useColorScheme} from 'react-native';
import {RootStackParamList} from '@utils/routeTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

function App(): JSX.Element {
  const scheme = useColorScheme();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              navigationBarHidden: true,
              headerTitle: '',
              headerStyle: {
                backgroundColor: 'transparent',
              },
            }}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{
              navigationBarHidden: true,
              headerTitle: '',
              headerStyle: {
                backgroundColor: 'transparent',
              },
            }}
          />
          <Stack.Screen name="AllCollections" component={AllCollections} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
