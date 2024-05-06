import React from 'react';
import {CreateDeck,Decks,Study,DeckDetails,AddFlascard} from './screens'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { createContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator(); 
const Stack = createStackNavigator();

export const DecksContext = createContext();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions = {screenOptions}>
      <Tab.Screen 
      name = "Decks" 
      component={Decks}
      options={{
        tabBarLabel: '', 
        tabBarIcon: ({focused}) => {
        return(
          <View style = {{alignItems: 'center', justifyContent: 'center', marginBottom: -15}}>
            <Octicons name="stack" size={24} color={focused ? '#E83F6F' : 'black'} />
            <Text style = {{fontSize: 12, color: "black"}}>DECKS</Text>
          </View>
        )
        }
      }
      }
      />
      <Tab.Screen 
        name = "CreateDeck" 
        component={CreateDeck}
        options={{
          tabBarLabel: '', 
          tabBarIcon: ({focused}) => {
          return(
            <View style = {{alignItems: 'center', justifyContent: 'center', marginBottom: -15}}>
                <Ionicons name="create" size={24} color = {focused ? '#E83F6F' : 'black'} />      
              <Text style = {{fontSize: 12, color: "black"}}>CREATE DECK</Text>
            </View>
          )
          }
        }
        }
      />
      <Tab.Screen 
        name = "Study" 
        component={Study}
        options={{
          tabBarLabel: '', 
          tabBarIcon: ({focused}) => {
          return(
            <View style = {{alignItems: 'center', justifyContent: 'center', marginBottom: -15}}>
              <MaterialCommunityIcons name="cards-playing" size={24} color = {focused ? '#E83F6F' : 'black'} />
              <Text style = {{fontSize: 12, color: "black"}}>STUDY</Text>
            </View>
          )
          }
        }
        }
      />
    </Tab.Navigator>
  ); 
}; 

const screenOptions = {
  tabBarShowLabel: false, 
  headerShown: false, 
  tabBarStyle: {
    position: 'absolute', 
    bottom: 0, 
    right: 0, 
    left: 0, 
    elevation: 0,
    height: 60,
    backgroundColor: "#fff",
  }
}; 


export default function App() {
  const [decks,setDecks] = useState([]); 
  return (
    <DecksContext.Provider value={{ decks, setDecks }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainTabs" screenOptions={screenOptions}>
            <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
            <Stack.Screen name="DeckDetails" component={DeckDetails} />
            <Stack.Screen name="AddFlashcard" component={AddFlascard} />                       
          </Stack.Navigator>
        </NavigationContainer>
    </DecksContext.Provider>
    
  );
}

