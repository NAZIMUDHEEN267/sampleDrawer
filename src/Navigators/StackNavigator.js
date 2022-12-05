import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "../Navigators/DrawerNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNavigator;