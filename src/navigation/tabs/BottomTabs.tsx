import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../components/ui/Screen/HomeScreen';
import ServicesScreen from '../../components/ui/Screen/ServicesScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
    </Tab.Navigator>
  );
}