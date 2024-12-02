import { ParamListBase } from "@react-navigation/native";
export interface RootStackParamList extends ParamListBase {
  Home: undefined; // Tela inicial (HomeScreen)
  BooksListScreen: undefined; // Tela de listagem de livros
  AuthorBooks: { author: string };
}
