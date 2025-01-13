import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealItemScreen from './screens/MealItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FFC145',
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#FFF5D7',
            }
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All categories',
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealItem" component={MealItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
