import * as SQLite from 'expo-sqlite';

export default function useSQlite() {
  const db = SQLite.openDatabase("blogDB10");
  return db
}