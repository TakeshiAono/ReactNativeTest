import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)

  return (
    <View style={{flex: 1,flexDirection:"column", alignItems:"center", justifyContent: "center"}}>
      <View>
        <Text>name</Text>
        <TextInput 
          style={styles.inputText}
          onChange={(value) => {setName(value.nativeEvent.text);console.log(name)}
          }
        />
      </View>
      <View style={{marginBottom: 5}}>
        <Text>email</Text>
        <TextInput
          style={styles.inputText}
          onChange={(value) => {setName(value.nativeEvent.text);console.log(name)}}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-end", width: 300}}>
        <Button title="ログイン"></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputText:{
    borderColor: "black",borderWidth: 1, width: 300,height: 50, borderRadius: 5
  },
})