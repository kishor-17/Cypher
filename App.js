// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import Home from './Home'
// import SeedPhase from './seedphase'

// const Stack = createStackNavigator();


// // const CypherStack = () => {
// //   return(
// //     <Stack.Navigator initialRouteName='Home'>
// //       <Stack.Screen
// //         name="Home"     //changed home to Seedphase
// //         component={Home}  //changed home to Seedphase
// //         options={({navigation}) => ({
// //           headerTintColor: 'white',
// //           headerStyle: { backgroundColor: 'gold' },
// //         })}
// //       />
// //     </Stack.Navigator>
// //   )
// // }

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <CypherStack/>
// //     </NavigationContainer>
// //   );
// // }

import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import SeedPhase from './seedphase';
import Address from './address';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"     //changed home to Seedphase
        component={Home}  //changed home to Seedphase
        options={({navigation}) => ({
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'gold' },
        })}
      />
      <Stack.Screen
        name="SeedPhase"
        component={SeedPhase}
        
      />
      <Stack.Screen
        name="Address"
        component={Address}
        
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

