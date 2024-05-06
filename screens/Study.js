import { View,Text } from "react-native"; 
import React from "react";
import { useContext, useEffect } from "react";
import { DecksContext } from "../App";

export default function Study() {
    const { decks } = useContext(DecksContext);
    useEffect (() => {
        console.log(decks); 
        console.log("This log is from Study sreen")
    },[decks]); 
    return (
        <View style = {{flex: 1, alignItems: 'center' }}>
            <Text>Study</Text>
        </View>
    )
}
/*

*/

