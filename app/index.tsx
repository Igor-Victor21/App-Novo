import { Header } from '@/components/headerEmoji';
import { Link, router } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    const onPress = () => {
        router.push("/(tabs)")
    }

    return (
        <>
        <Header image={require("../assets/images/emoji.png")}/>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Projeto André</Text>
            <Text style={styles.text}>Um projeto que o professor André mandou a gente fazer sozinho, para ver se a turma sabe fazer as coisas</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.btnText}>Saiba mais</Text>
            </TouchableOpacity>

            <View>
                <Link style={styles.btn} href={"/+not-found"}>LINK</Link>
            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',

    },

    title: {
        textAlign: 'center',
        margin: 10,
    },

    text: {
        textAlign: 'center',
        margin: 10,
    },

    btnText: {
        color: "white",
        backgroundColor: 'black',
        textAlign: 'center',
        borderRadius: 999,
        width: 100,
        margin: 10,
        padding: 10,
    },

    btn: {
        backgroundColor: 'black',
        color: 'red',
        textAlign: 'center',
        borderRadius: 999,
        width: 100,
        margin: 300,
        padding: 10,    }
})