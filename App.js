import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './context/CartContext';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <TabNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </CartProvider>
  );
}
