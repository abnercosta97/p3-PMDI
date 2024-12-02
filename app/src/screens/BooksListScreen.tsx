import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import books from "../data/books.json";

const BooksListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Autor: {item.author}</Text>
            <Text>Ano: {item.year}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: "bold" },
});

export default BooksListScreen;
