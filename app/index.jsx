import React from "react";
import { View, Text, ImageBackground, Pressable, Button} from "react-native";
import { Link } from "expo-router"
import { styling } from "./(Style)/index.module";
import TREE from "../assets/images/logo.png"; // Remove the curly braces

const App = () => { 
    return (
        <View style={styling.container}>
            <ImageBackground
                source={TREE}
                resizeMode="cover"
                style={styling.backgroundImage}>

                <Text style={styling.textTitle}>TREE OF LIFE</Text>
                
                <Pressable
                title="START"
                style={styling.startBtn}
                onPress={
                    () => {
                        alert("Start the game");
                    }
                }>
                    <Text style={styling.aboutBtnChild}>START</Text>
                </Pressable>

                <Link 
                    href={"/about"}
                    style={styling.aboutBtn}
                     asChild>
                    <Pressable>
                        <Text style={styling.aboutBtnChild}>HELP</Text>
                    </Pressable>
                </Link>
                

                <Link 
                    href={"/about"}
                    style={styling.aboutBtn}
                     asChild>
                    <Pressable>
                        <Text style={styling.aboutBtnChild}>ABOUT</Text>
                    </Pressable>
                </Link>

            </ImageBackground>
        </View>
    )
}

export default App;