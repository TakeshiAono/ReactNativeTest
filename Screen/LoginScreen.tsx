import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import useSQlite from "../hooks/useSQlite";
import userStore from "../stores/userStore";

export default function LoginScreen() {
  const [name, setName] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const navigation = useNavigation()

  const findUser = async () => {
    if(name && password) {
      const result = await userStore.findUser(name, password)
        // console.log("リザルト",result)
        if (result) {
          navigation.navigate("Home", {userName: name})
        } else {
          Alert.alert(
            '認証エラー', 
            '名前またはパスワードが存在していません',
            [{text: 'OK'}]
          )
        }
    } else {
      Alert.alert(
        '入力エラー', 
        '名前またはパスワードが入力されていません',
        [{text: 'OK'}]
      )
    }
  }

  return (
    <View>
      <View style={{marginLeft: "auto"}}>
        <TouchableOpacity onPress={() => {navigation.navigate("Register")}}>
          <Text style={{color: "skyblue", fontSize: 18}}>{"アカウント作成 >"}</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: "100%"}}>
        <View style={{flex: 1, flexDirection:"column", alignItems:"center", justifyContent: "center"}}>
          <View>
            <Text>name</Text>
            <TextInput 
              style={styles.inputText}
              onChange={(value) => {setName(value.nativeEvent.text);console.log(name)}
              }
            />
          </View>
          <View style={{marginBottom: 5}}>
            <Text>password</Text>
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              onChange={(value) => {setPassword(value.nativeEvent.text);console.log(password)}}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", width: 300}}>
            <Button title="ログイン" onPress={() => {findUser()}}></Button>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputText:{
    borderColor: "black",borderWidth: 1, width: 300,height: 50, borderRadius: 5
  },
})