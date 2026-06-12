import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from '../tabs/BottomTabs';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTab} />
    </Stack.Navigator>
  );
}