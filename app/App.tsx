import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import Routes from "./src/routes";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return <Routes />;
}
