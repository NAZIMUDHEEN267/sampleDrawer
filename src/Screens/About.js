import { View, Text } from 'react-native'
import GlobalStyle from './GlobalStyle'

const colors = ["red", "blue", "green", "black", "#63060b", "#520770", "#03453a"];

const About = () => {
  return (
    <View style={[GlobalStyle.container,
    { backgroundColor: colors[Math.floor(Math.random() * colors.length)] }
    ]}>
      <Text style={GlobalStyle.text}>About</Text>
    </View>
  )
}



export default About