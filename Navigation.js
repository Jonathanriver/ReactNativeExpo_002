import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';

// screens
import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/SettingScreen'
import StackScreen from './screens/StackScreen'

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName='HomeScreen'
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen} />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen} />

        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='home'
            screenOptions={{
                tabBarInactiveTintColor: 'red'
            }}
        >
            <Tab.Screen
                name="home"
                component={MyStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                    tabBarBadge: 3,
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="setting"
                component={SettingScreen}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="setting" size={24} color="black" />
                    ),
                    tabBarBadge: 3
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}