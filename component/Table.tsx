import { Text, View } from "react-native";
import { Blog } from "../stores/blogStore";



export default function Table({list}: {list: Blog[]}) {

  return (
    <View>
      <Text>
        {console.log(list)}
        {console.log("テーブルレンダリング")}

      </Text>
    </View>
  )
}