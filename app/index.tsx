import Login from "@/components/Login";
import { auth } from "@/configs/FirebaseConfig";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {

    const user = auth.currentUser;
        
    return (
        <View style={{flex: 1}}>
            { user ? <Redirect href={'/index' as any} /> : <Login /> }
        </View>
    );
}
