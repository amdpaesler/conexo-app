import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CommunicationScreen } from '../screens/CommunicationScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import type { RootTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle:
            route.name === 'Profile' || route.name === 'Login'
              ? { display: 'none' }
              : undefined,
        })}
      >
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Tab.Screen
          name="Communication"
          component={CommunicationScreen}
          options={{ title: 'Comunicação' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
