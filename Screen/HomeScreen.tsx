import { Button, Text, View } from "react-native";
import useSQlite from "../hooks/useSQlite";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import BlogStore, { Blog } from "../stores/blogStore";
import { inject, observer } from "mobx-react";

const HomeScreen = ({ blogStore }: { blogStore: BlogStore }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      console.log("描画処理2")
      const fetchData = async () => {
        try {
          const result = await blogStore.fetchBlogsByUser();
          setBlogs(result);
        } catch (error) {
          console.error('データの取得に失敗しました', error);
        }
      };

      fetchData();
    }, [])
  )

  const findBlogs = () => {
    blogStore.getBlogs().then((blogs) => setBlogs(blogs));
  };

  return (
    <View>
      <Button onPress={() => navigation.navigate("Create")} title={"新規作成"}></Button>
      {blogs.map((blog) => <Text key={blog.title}>{blog.title}</Text>)}
    </View>
  );
};

export default inject('blogStore')(observer(HomeScreen));
