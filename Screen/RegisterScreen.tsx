import { useState } from "react";
import { Alert, Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import userStore from "../stores/userStore";
import { inject, observer } from "mobx-react";

const RegisterScreen = ({userStore}) => {
  const [name, setName] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)

  const navigation = useNavigation()

  const createUser = () => {
    if (name && password) {
      userStore.storeUser(name, password)
        .then(() => {navigation.navigate("Login")})
        .catch(() => {
          Alert.alert(
            '登録エラー', 
            '名前またはパスワードが適切ではありません',
            [{text: 'OK'}]
          )
        })
    } else {
      Alert.alert(
        '入力エラー', 
        '適切な値を入力してください',
        [{text: 'OK'}]
        )
    }
  }

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
        <Text>password</Text>
        <TextInput
          style={styles.inputText}
          onChange={(value) => {setPassword(value.nativeEvent.text);console.log(password)}}
          secureTextEntry={true}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-end", width: 300}}>
        <Button
          title="登録"
          onPress={() => {
            createUser()
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputText:{
    borderColor: "black",borderWidth: 1, width: 300,height: 50, borderRadius: 5
  },
})

export default inject('userStore')(observer(RegisterScreen));