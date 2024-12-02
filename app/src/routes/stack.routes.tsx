import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import BooksListScreen from "../screens/BooksListScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator<RootStackParamList>();
export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Buscas" }}
      />
      <Stack.Screen
        name="BooksListScreen"
        component={BooksListScreen}
        options={{ title: "Listas de Livros" }}
      />
    </Stack.Navigator>
  );
}
