import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import { useEffect } from 'react';
import useSQlite from './hooks/useSQlite';
import HomeScreen from './Screen/HomeScreen';
import CreateScreen from './Screen/CreateScreen';
import { Provider } from 'mobx-react';
import BlogStore from './stores/blogStore';
import UserStore from './stores/userStore';
import EditScreen from './Screen/EditScreen';

export default function App() {
  const db = useSQlite()

  useEffect(() => {
    createTable()
  }, [])
  
  const createTable = () => {
    db.transaction((tx)=>{
      tx.executeSql(
        "create table if not exists users (id integer primary key not null, name text, password text, createdAt datetime default current_timestamp, updatedAt datetime default current_timestamp);",
        null,
        (a) => {
          console.log("成功", a)
        },
        () => {
          console.log("失敗")
          return true
        }
      )
      tx.executeSql(
        "create table if not exists blogs (id integer primary key not null, user_id integer references users(id) not null, title text, content text, createdAt datetime default current_timestamp, updatedAt  datetime default current_timestamp);",
        null,
        (a) => {
          console.log("成功", a)
        },
        () => {
          console.log("失敗")
          return true
        }
      )
    })
  }

  const Stack = createStackNavigator()
  const blogStore = new BlogStore()
  const userStore = new UserStore()

  return (
    <Provider blogStore={blogStore} userStore={userStore}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Create" component={CreateScreen}/>
          <Stack.Screen name="Edit" component={EditScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
