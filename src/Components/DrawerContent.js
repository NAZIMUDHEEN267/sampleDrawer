import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Crown from "../assets/crown.jpg";

const links = ["Home", "Profile", "Wallet_Balance", "Records", "Refund_and_Policies", "Settings", "About_Us", "Help"];

const DrawerContent = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                {/* first row */}
                <View style={[styles.row, {marginBottom: 40}]}>
                    <Image style={styles.image} source={Crown} />
                    <View style={styles.player}>
                        <Text style={[styles.text, {fontSize: 20 }]}>Favaz</Text>
                        <Text style={[styles.text, { backgroundColor: "#a7acb5", padding: 2, borderRadius: 10, textAlign: "center", color: "#fff" }]}>Gold</Text>
                    </View>
                </View>
                {/* second row */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color: "#000"}}>invite</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.text}>Total Coin</Text>
                        <Text style={styles.text}>coin: 20000</Text>
                    </View>
                </View>
            </View>
            {/* body */}
            <View style={styles.body}>
                {
                    links.map((link, i) => (
                        <TouchableOpacity style={styles.link} key={i.toString()} onPress={() => navigation.navigate(link)}>
                            <Text>{link}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            {/* footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={[styles.text, {color: "#555"}]} >Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export { DrawerContent, links };

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
        padding: 2,
        paddingHorizontal: 7,
        backgroundColor: "#fff",
    },
    text: {
        fontWeight: "600",
        color: "#fff",
        textAlign: "center"
    },
    body: {
        paddingLeft: 20,
        paddingTop: 20,
        height: "70%",
    },
    link: {
        borderBottomColor: "#333",
        borderWidth: .5,
        padding: 15
    },
    footer: {
        height: "10%",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 10
    }
})