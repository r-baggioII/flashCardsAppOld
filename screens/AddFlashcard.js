import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { DecksContext } from '../App';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useRoute } from "@react-navigation/native";

export default function AddFlashcard() {
    const { decks, setDecks } = useContext(DecksContext);
    
    const navigation = useNavigation();
    const route = useRoute(); 
    const { index } = route.params;

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');


    useEffect( () => {
        decks.forEach(deck => {
            console.log(deck); 
        });
    },[decks]); 


    const handleAddFlashcard = (index) => {

        if (handleNoInput()) {
            return;
        }; 

        const newFlashcard = {
            question: question,
            answer: answer
        };
        const updatedDecks = decks.map((deck, i) => {
            if (i === index) {
                return {
                    ...deck,
                    flashcards: [...deck.flashcards, newFlashcard]
                };
            }
            return deck; 
        });

        setDecks(updatedDecks);

        navigation.navigate("DeckDetails", { index }); 

    };

    const handleNoInput = () => {
        if (!question.trim() || !answer.trim()) {
            Alert.alert('Error', 'Please enter a valid question and answer');
            return true; // Return true if there's no valid input
        }
        return false; // Return false if there's valid input
    };

    return (
        <View style={styles.container}>
            <Text>Add a new Flashcard </Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setQuestion(text)}
                value={question}
                placeholder="Enter question"
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setAnswer(text)}
                value={answer}
                placeholder="Enter answer"
            />
            <TouchableOpacity style = {styles.button} onPress={() => handleAddFlashcard(index)}>
                <Text style = {styles.buttonText}>ADD FLASHCARD</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 55,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 5,
        width: '80%',
    },
    button: {
        backgroundColor: "#E83F6F", 
        padding: 10,
        borderRadius: 10,
    }, 
    buttonText: {
        fontWeight: 'bold', 
    }, 
});
