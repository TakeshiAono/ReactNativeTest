import * as SQLite from 'expo-sqlite';

export default function useSQlite() {
  const db = SQLite.openDatabase("BlogDataBase");
  return db
}