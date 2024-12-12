import { Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const login_layout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen name="sign-in" />
            <Stack.Screen name="sign-up" />
        </Stack>

        <StatusBar style="auto" />
    </>
  )
}

export default login_layout
