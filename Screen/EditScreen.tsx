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
import { useNavigation, useRoute } from "@react-navigation/native";
import useSQlite from "../hooks/useSQlite";
import { inject, observer } from "mobx-react";

const EditScreen = ({blogStore}) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [blog, setBlog] = useState([]);
  const navigation = useNavigation();
  const route = useRoute()

  useEffect(() => {
    setTitle(blogStore.findBlog(route.params.blogId).title)
    setContent(blogStore.findBlog(route.params.blogId).content)
  }, [])

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
          value={title}
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
          value={content}
        />
      </View>
      <View
        style={{ flexDirection: "row", justifyContent: "flex-end", width: 300 }}
      >
        <Button
          title="更新"
          onPress={() => {
            if (title && content)
              blogStore.updateBlog(route.params.blogId, title, content)
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

export default inject('blogStore')(observer(EditScreen));