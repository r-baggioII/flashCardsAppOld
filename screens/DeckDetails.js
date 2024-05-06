import { View,Text } from "react-native"; 
import React from "react";
import { useContext, useEffect } from "react";
import { DecksContext } from "../App";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import Flashcard from "../components/flashcard";

export default function DeckDetails() {
    const { decks } = useContext(DecksContext);
    const navigation = useNavigation(); 
    const route = useRoute();
    const { index } = route.params;
    const [colorIndex, setColorIndex] = useState(0);
    
    const handleAddFlashcardPress = (index) => {
        navigation.navigate("AddFlashcard", {index});
    };

    const selectedDeck = decks[index]; 
    
    const colorPalette = ["#F8F272", "#EA526F", "#5762D5", "#3CBBB1", "#F17F29"];

    return (
        <SafeAreaView style = {styles.mainContainer}>
           <FlatList style = {styles.flatlistContainter}
                data={selectedDeck.flashcards}
                renderItem={({ item, index }) => (
                    <Flashcard
                        question={item.question}
                        answer={item.answer}
                        color={colorPalette[(index + colorIndex) % colorPalette.length]}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addFlashcardButton} onPress={() => handleAddFlashcardPress(index)}>
                    <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'flex-start', 
        justifyContent: 'flex-end', // To align content at the bottom
        marginBottom: 5,
    }, 
    addFlashcardButton: {
        backgroundColor: '#E83F6F', 
        padding: 8, 
        borderRadius: 35,
        marginBottom: 10, 
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 10,

    }, 
    flatlistContainter: {
        flexDirection: 'column', 
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        top: 760,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        paddingRight: 20, // Adjust as needed
    },

});
