// Flashcard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Flashcard = ({ question, answer, color }) => {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.question}>
                {question}
            </Text>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.answer}>
                {answer}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 12, // Reduce padding to make the items smaller
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'column',
        height: 100,
        width: 180, 
    },
    question: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    answer: {
        justifyContent: 'flex-start', 
    },
});

export default Flashcard;
