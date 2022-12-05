import { useEffect } from 'react';
import { View, Text } from 'react-native'
import GlobalStyle from './GlobalStyle';

const colors = ["red", "blue", "green", "black", "#63060b", "#520770", "#03453a"];

const Home = ({navigation}) => {

  return (
    <View style={[GlobalStyle.container,
    { backgroundColor: colors[Math.floor(Math.random() * colors.length)] }
    ]} onTouchStart={ navigation.openDrawer }>
      <Text style={GlobalStyle.text}>Home</Text>
    </View>
  )
}

export default Home