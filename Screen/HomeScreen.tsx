import { Button, Text, View } from "react-native";
import useSQlite from "../hooks/useSQlite";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import BlogStore, { Blog } from "../stores/blogStore";
import { inject, observer } from "mobx-react";

const HomeScreen = ({ blogStore }: { blogStore: BlogStore }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigation = useNavigation();

  return (
    <View>
      <Button onPress={() => navigation.navigate("Create")} title={"新規作成"}></Button>
      {blogStore.blogs.map((blog) => 
        <View>
          <Text key={blog.title}>{blog.title}</Text>
          <Button title={"編集"} onPress={() => navigation.navigate("Edit", {blogId: blog.id})}></Button>
        </View>
      )}
      <Button title="更新" onPress={() =>{blogStore.fetchBlogsByUser()}}></Button>
    </View>

  );
};

export default inject('blogStore')(observer(HomeScreen));
