import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./src/Navigators/StackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App