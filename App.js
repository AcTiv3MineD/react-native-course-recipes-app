import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <CategoriesScreen />
    </SafeAreaView>
  );
}
