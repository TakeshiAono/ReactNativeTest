import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useSQlite from "../hooks/useSQlite";
import { inject, observer } from "mobx-react";
// import blogStore from "../stores/blogStore";

const CreateScreen = ({blogStore}) => {
  const [title, setTitle] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const navigation = useNavigation();


  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Text>title</Text>
        <TextInput
          style={styles.inputText}
          onChange={(value) => {
            setTitle(value.nativeEvent.text);
            console.log(title);
          }}
        />
      </View>
      <View style={{ marginBottom: 5 }}>
        <Text>Content</Text>
        <TextInput
          style={styles.inputText}
          onChange={(value) => {
            setContent(value.nativeEvent.text);
            console.log(content);
          }}
        />
      </View>
      <View
        style={{ flexDirection: "row", justifyContent: "flex-end", width: 300 }}
      >
        <Button
          title="登録"
          onPress={() => {
            if (title && content)
              blogStore.createBlog(title, content)
              navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    borderColor: "black",
    borderWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 5,
  },
});

export default inject('blogStore')(observer(CreateScreen));