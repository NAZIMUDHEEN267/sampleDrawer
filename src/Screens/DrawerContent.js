import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Crown from "../assets/crown.jpg";

const DrawerContent = () => {

    const links = ["Home", "Profile", "Wallet Balance", "Records", "Refund and Policies", "Settings", "About Us", "Help"];

    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                {/* first row */}
                <View style={[styles.row, {marginBottom: 40}]}>
                    <Image style={styles.image} source={Crown} />
                    <View style={styles.player}>
                        <Text style={[styles.text, {fontSize: 23 }]}>Favaz</Text>
                        <Text style={[styles.text, { backgroundColor: "blue", padding: 6, borderRadius: 10, textAlign: "center" }]}>Gold</Text>
                    </View>
                </View>
                {/* second row */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={[styles.text, {alignSelf: "center"}]}>invite</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.text}>Total Coin</Text>
                        <Text style={styles.text}>coin: 20000</Text>
                    </View>
                </View>
            </View>
            {/* body */}
            <View>

            </View>
            {/* footer */}
            <View>

            </View>
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: "100%",
        height: "20%",
        backgroundColor: "grey",
        padding: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    image: {
        height: 50,
        width: 50
    },
    btn: {
        width: 70,
        height: 20,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#999",
        justifyContent: "center"
    },
    text: {
        fontWeight: "600"
    }
})