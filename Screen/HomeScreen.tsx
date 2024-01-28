import { Button, Text, View } from "react-native";
import useSQlite from "../hooks/useSQlite";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import blogStore from "../stores/blogStore";

export default function CreateScreen() {
  const route = useRoute()
  const db = useSQlite()
  const [blogs, setBlogs] = useState([])
  const navigation = useNavigation()
  const blogs2 = blogStore.getBlogs()

  useEffect(() => {
    findBlogs()
  }, [])

  const findBlogs = () => {
  //   console.log("ルート0",route)
  //   console.log("ルート1",route.params.userName)
  //   db.transaction((tx)=>{
  //     tx.executeSql(
  //       // `select * from (select users.*, blogs.* from users join blogs on users.id = blogs.user_id) where coalesce (users.name, 'test')=?;`,
  //       // `select * from users;`,
  //       `select * from blogs;`,
  //       [route.params.userName],
  //       // null,
  //       (_, result) => {
  //         console.log("成功")
  //         console.log("ブログたち",result)
  //         // console.log(blogs.rows)
  //         // console.log(blogs.rows._array)
  //         // setBlogs([1,2,3])
  //         setBlogs(result.rows._array)
  //         // navigation.navigate("Home")
  //       },
  //       () => {
  //         console.log("失敗")
  //         Alert.alert(
  //           '認証エラー', 
  //           '名前またはパスワードが違います',
  //           [{text: 'OK'}]
  //         )
  //       }
  //     )
  //   })
  }

  return (
    <View>
      <Button onPress={() => {navigation.navigate("Create", {userName: route.params.userName})}} title={"新規作成"}></Button>
      {/* <Text> */}
        {/* {route.params.userName} */}
        {/* {console.log("aaa", blogs)} */}
        {blogs2.map((blog) => <Text>{blog.title}</Text>)}
        {/* test */}
      {/* </Text> */}
      {blogStore.getBlogs().map((blog) => <Text>{blog.title}</Text>)}
    </View>
  )
}