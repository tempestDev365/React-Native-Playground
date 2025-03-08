import React from "react";
import { View, Text } from "react-native";
import { styling } from "./(Style)/index.module";

const App = () => { 
    return (
        <View style={styling.container}>
            <Text>Hello World</Text>
        </View>
    )
}

export default App;