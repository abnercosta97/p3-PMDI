import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import books from "../data/books.json";

// Defina a interface para os parâmetros da rota
type RootStackParamList = {
  AuthorBooks: { author: string };
};

type BooksListScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "AuthorBooks"
>;

const BooksListScreen = () => {
  const navigation = useNavigation<BooksListScreenNavigationProp>();

  const getAuthorsList = (authors: string) =>
    authors.split(";").map((author) => author.trim());

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Ano: {item.year}</Text>
            {/* Exibir cada autor como um botão clicável */}
            <Text style={styles.authorsLabel}>Autores:</Text>
            {getAuthorsList(item.author).map((author, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("AuthorBooks", { author })}
              >
                <Text style={styles.author}>{author}</Text>
              </TouchableOpacity>
            ))}
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
  authorsLabel: { fontSize: 16, marginTop: 8 },
  author: {
    fontSize: 16,
    color: "#007bff", // Cor para indicar que é clicável
    marginVertical: 2,
  },
});

export default BooksListScreen;
