import React from "react";
import { View, Text, ImageBackground, Pressable} from "react-native";
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