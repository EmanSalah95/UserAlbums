import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UserId from './src/screens/UserId/UserId';
import Albums from './src/screens/Albums/Albums';
import Album from './src/screens/Album/Album';

import {StyleSheet} from 'react-native';
const Stack = createStackNavigator();

const App = () => {
  //Hide Splash screen on app load.
  React.useEffect(() => {
    SplashScreen.hide();
  });

  // return <UserId />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#7a42f4'},
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="UserId"
          component={UserId}
        />
        <Stack.Screen name="Albums" component={Albums} />
        <Stack.Screen name="Album" component={Album} />
      </Stack.Navigator>
      {/* <UserId /> */}
    </NavigationContainer>
  );
};

export default App;
