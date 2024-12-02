import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import books from "../data/books.json";

// Defina a interface para os parâmetros da rota
type RootStackParamList = {
  AuthorBooks: { author: string };
};

type AuthorBooksScreenRouteProp = RouteProp<RootStackParamList, "AuthorBooks">;

const AuthorBooksScreen = () => {
  const route = useRoute<AuthorBooksScreenRouteProp>();
  const { author } = route.params;

  // Filtrar os livros pelo autor
  const authorBooks = books
    .filter((book) => book.author.includes(author))
    .map((book) => ({
      title: book.title,
      year: book.year,
      publisher: book.publisher,
    }));

  // Remover duplicatas
  const uniqueBooks = Array.from(
    new Set(authorBooks.map((book) => JSON.stringify(book)))
  ).map((book) => JSON.parse(book));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Livros de {author}</Text>
      <FlatList
        data={uniqueBooks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text>Editora: {item.publisher}</Text>
            <Text>Ano: {item.year}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AuthorBooksScreen;
