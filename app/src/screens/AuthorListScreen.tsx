import { useNavigation } from "@react-navigation/native";
import books from "../data/books.json";
import { View, Text, StyleSheet } from "react-native";

// Defina a interface para os parâmetros da rota
type RootStackParamList = {
  AuthorBooks: { author: string };
};

type NavigationProp = {
  navigate: (
    screen: keyof RootStackParamList,
    params: RootStackParamList[keyof RootStackParamList]
  ) => void;
};

const AuthorsListScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const uniqueAuthors = [...new Set(books.flatMap((book) => book.author))];

  return (
    <View>
      {uniqueAuthors.map((author, index) => (
        <Text
          key={index}
          style={styles.authorName}
          onPress={() => navigation.navigate("AuthorBooks", { author })}
        >
          {author}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  authorName: {
    fontSize: 16,
    color: "blue",
    marginBottom: 10,
  },
});

export default AuthorsListScreen;
