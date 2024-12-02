import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import books from "../data/books.json";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const totalBooks = books.length;
  const totalDisciplines = 40; // Valor fixo
  const oldestBook = books.reduce((oldest, book) =>
    book.year < oldest.year ? book : oldest
  );
  const newestBook = books.reduce((newest, book) =>
    book.year > newest.year ? book : newest
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bibliografia</Text>
      <View style={styles.card}>
        <Text>Total de disciplinas: {totalDisciplines}</Text>
        <Text>Total de livros: {totalBooks}</Text>
        <Text>
          Livro mais velho: {oldestBook.title} ({oldestBook.year})
        </Text>
        <Text>
          Livro mais novo: {newestBook.title} ({newestBook.year})
        </Text>
      </View>
      <Button
        title="Iniciar"
        onPress={() => navigation.navigate("BooksListScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
  },
});

export default HomeScreen;
