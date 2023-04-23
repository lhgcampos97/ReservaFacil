import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import clients from '../database/cliente.json';
//console.log(clients);

const LoginScreen = ( { navigation } ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const client = clients.find(c => c.cliente_email === email && c.cliente_senha === password);
    if (client) {
      // Login successful
      navigation.navigate('HomeScreen');
    } else {
      // Login failed
      alert('Invalid email or password');
    }
  };


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/favicon.png")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
     <Button
       onPress={handleLogin}
       title="LOGIN"
       style={styles.loginBtn}
       color="#FF1493"
     />
     <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} style={styles.button, {marginTop: 10}}>
       <Text style={styles.buttonText}>Register here</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')} style={[styles.button, {marginTop: 1}]}>
       <Text style={styles.buttonText}>Forgot Password?</Text>
     </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  button: {
    height: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});


export default LoginScreen;