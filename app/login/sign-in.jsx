import { View, Image, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <View>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />

      <Text>Sign In</Text>

      <FormField
        title="Email"
        value={form.email}
        handleChangeText={(e) => setForm({ ...form, email: e })}
        otherStyles=""
        keyBoardType="email-address"
      />

      <FormField
        title="Password"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e })}
        otherStyles=""
      />

      <CustomButton
        title="Sign In"
        handlePress={submit}
        containerStyles=""
      />

    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});

export default SignIn;
