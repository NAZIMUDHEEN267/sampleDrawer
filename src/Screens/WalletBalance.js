import { View, Text } from 'react-native'
import GlobalStyle from './GlobalStyle'

const colors = ["red", "blue", "green", "black", "#63060b", "#520770", "#03453a"];

const WalletBalance = () => {
  return (
    <View style={[GlobalStyle.container,
    { backgroundColor: colors[Math.floor(Math.random() * colors.length)] }
    ]}>
      <Text style={GlobalStyle.text}>WalletBalance</Text>
    </View>
  )
}

export default WalletBalance