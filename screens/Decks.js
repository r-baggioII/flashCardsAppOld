import React, { useContext, useState,useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { DecksContext } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Item = ({ title, color, index ,onPressItem}) => {

    
    return (
        <View style={[styles.item, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={( ) => onPressItem(index)}>
                <Entypo name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
        </View>        
    );
};

const colorPalette = ["#F8F272", "#EA526F", "#5762D5", "#3CBBB1", "#F17F29"];

export default function Decks() {
    const { decks } = useContext(DecksContext);
    const [colorIndex, setColorIndex] = useState(0);
    const navigation = useNavigation();

    
    useEffect(() => {
        decks.forEach(deck => {
            console.log(deck.cards); // Access cards for each deck
        });
    }, [decks]);

    const handleItemPress = (index) => {
        navigation.navigate("DeckDetails", { index });
    };


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={decks}
                renderItem={({ item, index }) => (
                    <Item title={item.title} 
                    color={colorPalette[(index + colorIndex) % colorPalette.length]}
                    index={index}
                    onPressItem={handleItemPress}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 10,
        padding: 20,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'flex-start',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        marginTop: 25,
        marginBottom: 60, // Added marginBottom to ensure enough space for the last item
    },
});
