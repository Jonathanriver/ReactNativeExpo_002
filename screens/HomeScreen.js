import { Text, View, Button, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text style={styles.titleHomeScreen}>
                HomeScrenn
            </Text>

            <TouchableOpacity
                style={styles.touchableStyle}
                onPress={() => navigation.navigate('Stack')}
            >
                <Text style={styles.textButtonStack}>
                    Go to Stack Screen
                </Text>
            </TouchableOpacity>

            <Button title="Ingresar" color="purple" onPress={() => navigation.navigate('Stack')}/>

        </View>
    )
}


const styles = StyleSheet.create({
    titleHomeScreen: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: "20%"
    },
    touchableStyle: {
        backgroundColor: 'purple',
        padding: 10,
        marginTop: "20%",
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
    },
    textButtonStack: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    }

})

export default HomeScreen