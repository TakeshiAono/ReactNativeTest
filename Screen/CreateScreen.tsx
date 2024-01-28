import { useState } from "react";
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
  const [blogs, setBlogs] = useState([]);
  // const blog = blogStore

  // const db = useSQlite()
  const navigation = useNavigation();

  // const createBlog = () => {
  //   // console.log("くりえいとaaa", a, b)
  //   // console.log("くりえいと", title, content)
  //   db.transaction((tx)=>{
  //     tx.executeSql(
  //       `insert into blogs (user_id, title, content) values (1, ?, ?);`,
  //       // "select * from blogs;",
  //       [title, content],
  //       (_, a) => {
  //         // console.log(result)
  //         console.log(a.rows._array)
  //         console.log("成功")
  //         // console.log(result)
  //         // console.log(blogs.rows)
  //         // console.log(blogs.rows._array)
  //         // setBlogs(blogs.rows._array)
  //         navigation.navigate("Home")
  //         // return true
  //       },
  //       (e) => {
  //         console.log(e)
  //         console.log("失敗")
  //         // Alert.alert(
  //         //   '入力エラー',
  //         //   '適切な値を入力してください',
  //         //   [{text: 'OK'}]
  //         // )
  //         return false
  //       }
  //     )
  //   }),
  //   (_, error) => {
  //     console.log("トランザクション失敗")
  //   },
  //   () => {
  //     console.log("トランザクション成功")
  //   }
  // }

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
          title="登録a"
          onPress={() => {
            // createBlog("s", "g")
            // blog.addBlog({title: "store2", content: "content2", createdAt: new Date(), updatedAt: new Date()})
            if (title && content)
              blogStore
                .createBlog(title, content)
                .then(() => {
                  navigation.navigate("Home");
                })
                .catch(() => {
                  console.log("えらー");
                });
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