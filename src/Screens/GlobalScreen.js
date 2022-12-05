import { View, Text, TouchableOpacity } from 'react-native'
import GlobalStyle from './GlobalStyle';

const colors = ["red", "blue", "green", "black", "#63060b", "#520770", "#03453a"];

const GlobalComp = ({ navigation }) => {
    return (
        <View style={[GlobalStyle.container,
        { backgroundColor: colors[Math.floor(Math.random() * colors.length)] }
        ]}>
            <TouchableOpacity style={GlobalStyle.btn} onPress={navigation.openDrawer}>
                <Text style={GlobalStyle.text_sm}>Show Drawer</Text>
            </TouchableOpacity>
            <Text style={GlobalStyle.text_lg}>Help</Text>
        </View>
    )
}


const obj = new Object();
["Home", "Help", "About", "Profile", "Records", "Refunds", "Settings", "WalletBalance"]
.forEach(item => obj[item] = ({navigation}) => <GlobalComp navigation={navigation}/> );

export default obj;
