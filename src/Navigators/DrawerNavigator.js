import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent, links } from "../Components/DrawerContent";
import Components from "../Screens/GlobalScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={DrawerContent} screenOptions={{
            headerShown: false
        }}>
            {
                Object.getOwnPropertyNames(Components).map((key, i) => (
                    <Drawer.Screen name={links[i]} component={Components[key]} key={key + i} />
                ))
            }
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;