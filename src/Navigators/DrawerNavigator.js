import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home"; 
import Profile from "../Screens/Profile"; 
import WalletBalance from "../Screens/WalletBalance";  
import About from "../Screens/About"; 
import Help from "../Screens/Help";  
import Records from "../Screens/Records"; 
import Refunds from "../Screens/Refunds"; 
import Settings from "../Screens/Settings"; 
import DrawerContent from "../Screens/DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={DrawerContent}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="WalletBalance" component={WalletBalance} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Help" component={Help} />
            <Drawer.Screen name="Records" component={Records} />
            <Drawer.Screen name="Refunds" component={Refunds} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;