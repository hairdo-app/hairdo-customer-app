import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppStack from '@app/navigation/stacks/AppStack';
import { ThemeProvider } from '@app/theme/ThemeProvider';

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}