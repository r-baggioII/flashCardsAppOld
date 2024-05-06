import { View,Text, TextInput,StyleSheet, TouchableOpacity } from "react-native"; 
import React from "react";
import { useState, useEffect, useContext } from "react";
import { DecksContext } from "../App";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
export default function CreateDeck() {
    
    const [deckTitle, setDeckTitle] = useState(''); 
    const { decks,setDecks } = useContext(DecksContext);
    const navigation = useNavigation(); 

    useEffect (() => {
        console.log(decks); 
    },[decks]); 
    
    const handleCreateDeck = () => {
        
        if (!deckTitle.trim()) {
            // Alert the user if the deck title is empty
            Alert.alert('Error', 'Please enter a valid deck title');
            return;
        }
        
        const newDeck = {
            title: deckTitle, 
            flashcards: [], 
        }; 
        setDecks([... decks, newDeck]); 
        setDeckTitle(''); 
        navigation.navigate('Decks');
    }

    return (
        <View style = {styles.container}>
            <TextInput 
            style = {styles.input}
            placeholder="Enter deck title"
            onChangeText={(value) => setDeckTitle(value)} 
            value= {deckTitle}
            />
            
            <TouchableOpacity style = {styles.newDeckButton} onPress = {handleCreateDeck}>
                <Text style = {styles.deckButtonText}>Create New Deck</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1, 
        alignItems: 'center', 
        marginTop: 90,
    }, 

    input: {
        borderWidth: 1, 
        borderColor: "#D3D3D3", 
        padding: 12, 
        margin: 10, 
        width: 300,
    }, 
    newDeckButton: {
        backgroundColor: '#E83F6F', 
        width: 300, 
        padding: 12, 
        margin: 10, 
        alignItems: 'center', 
        borderRadius: 10, 
    }, 
    deckButtonText: {
        fontWeight: 'bold', 
        fontSize: 15,
    }, 

}); 
