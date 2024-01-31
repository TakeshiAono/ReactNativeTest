import { Button, Text, View } from "react-native";
import useSQlite from "../hooks/useSQlite";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import BlogStore, { Blog } from "../stores/blogStore";
import { inject, observer } from "mobx-react";

const HomeScreen = ({ blogStore }: { blogStore: BlogStore }) => {
  const navigation = useNavigation();

  return (
    <View style={{height: "100%"}}>
      <View style={{marginTop: 10, marginBottom: 30, width: "30%"}}>
        <Button onPress={() => navigation.navigate("Create")} title={"新規作成"}></Button>
      </View>
      {blogStore.blogs.map((blog) => 
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <View style={{alignSelf: "flex-start", marginLeft: "auto", marginRight: "auto"}}>
            <Text key={blog.title}>{blog.title}</Text>
          </View>
          <View style={{flexDirection: "row", width: "40%"}}>
            <View style={{flex:1}}>
              <Button title="編集" color="green" onPress={() => navigation.navigate("Edit", {blogId: blog.id})}></Button>
            </View>
            <View style={{flex:1}}>
              <Button title="削除" color="red" onPress={() =>{blogStore.deleteBlog(blog.id)}}></Button>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default inject('blogStore')(observer(HomeScreen));
