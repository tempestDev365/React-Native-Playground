import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styling } from "./(Style)/index.module";
import TREE from "@/assets/images/logo.png"; // Remove the curly braces
import { useRouter  } from "expo-router";


const App = () => {
    const router = useRouter();

    return (
        <View style={styling.container}>
            <ImageBackground
                source={TREE}
                resizeMode="cover"
                style={styling.backgroundImage}>

                <Text style={styling.textTitle}>TREE OF LIFE</Text>
                
                <TouchableOpacity
                    style={styling.startBtn}
                  >
                    <Text style={styling.aboutBtnChild}>START</Text>
                </TouchableOpacity>
 
                <TouchableOpacity
                    style={styling.aboutBtn}>
                    <Text style={styling.aboutBtnChild}>HELP</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styling.aboutBtn}
                    onPress={() => router.push("/about")}>
                    <Text style={styling.aboutBtnChild}>ABOUT</Text>
                </TouchableOpacity>

                
               

               

            </ImageBackground>
        </View>
    )
}

export default App;