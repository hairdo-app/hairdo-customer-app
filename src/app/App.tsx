import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from '@navigation/stacks/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}