import { View, Text } from 'react-native';
import GlobalStyle from './GlobalStyle';

const colors = ["red", "blue", "green", "black", "#63060b", "#520770", "#03453a"];

const Records = () => {
  return (
    <View style={[GlobalStyle.container, 
     { backgroundColor: colors[Math.floor(Math.random() * colors.length)] }
    ]}>
      <Text style={GlobalStyle.text}>Records</Text>
    </View>
  )
}

export default Records