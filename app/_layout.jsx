import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack 
      screenOptions={{
         headerStyle: {
           backgroundColor: "green",
         },
         headerTintColor: "white",
         headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
         }
      }}
    >
      <Stack.Screen 
          name="index"
          options={{
            title: "Home",
            headerShown: false
          }} />

      <Stack.Screen
      name="about"
      options={{
        title: "ABOUT"
      }} />
  
    </Stack>
  )
}

