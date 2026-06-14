import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@app/features/home/HomeScreen';
import ServicesScreen from '@app/features/service/ServicesScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
    </Tab.Navigator>
  );
}