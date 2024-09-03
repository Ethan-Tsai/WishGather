import { React } from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

function NavigateBack(){
    const navigation = useNavigation();

    return (
        <View >
            <Pressable onPress={() => navigation.goBack()} style={styles.container}>
                <Ionicons name="chevron-back-outline" size={20} color={"#b87006"}/>
                <Text style={styles.text}>返回</Text>
            </Pressable>
        </View>
      
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        paddingVertical: 10,
    },
    text: {
        fontSize: 20,
        color: "#b87006",
        fontWeight: "semibold"
    }
})

export default NavigateBack;