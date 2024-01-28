import { observable } from "mobx";
import useSQlite from "../hooks/useSQlite";
import blogStore from "./blogStore";

export type User = {
  id?: number;
  name: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export default class UserStore {
  @observable
  users: User[];

  db = useSQlite();

  constructor() {
    this.users = [];
  }

  getUser() {
    return this.users;
  }

  private addUser(user: User) {
    this.users.push(user);
  }

  storeUser(name: string, password: string) {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `insert into users (name, password) values (?, ?);`,
          [name, password],
          (bb, result) => {
            console.log("成功ｄ");
            console.log("userのやつ", bb);
            this.addUser({
              name: name,
              password: password,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
            resolve("登録完了");
          },
          (error1, error2) => {
            console.log(error1);
            console.log(error2);
            console.log("失敗d");
            // Alert.alert(
            //   '入力エラー',
            //   '適切な値を入力してください',
            //   [{text: 'OK'}]
            // )
            // return false
            reject();
          }
        );
      });
    });
  }

  async findUser(name: string, password: string, blogStore) {
    return new Promise<User>((resolve, reject) => {
      console.log("いれる値", name, password, blogStore);
      this.db.transaction((tx) => {
        tx.executeSql(
          `select * from users where name=? and password=?;`,
          // `select * from users;`,
          [name, password],
          (first, result) => {
            console.log("成功");
            console.log("なにがは",result.rows._array[0])
            const currentUser = result.rows._array[0]
            blogStore.setUserId(currentUser.id)
            resolve(result.rows._array[0]);
            // console.log("find1",first)
            // console.log("find2",result.rows._array)
            // return result.rows._array[0] as User
            // navigation.navigate("Home", {userName: name})
          },
          () => {
            console.log("失敗");
            // Alert.alert(
            //   '認証エラー',
            //   '名前またはパスワードが違います',
            //   [{text: 'OK'}]
            // )
            reject();
          }
        );
      });
    });
  }
}
// const userStore = new UserStore();
// export default userStore;
