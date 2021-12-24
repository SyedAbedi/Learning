import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native';

const Home = (props) => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.globologo}
                source={require('./images/_Export_globoticket-bug-black.png')}
            />
            <Text style={styles.title}>Welcome to GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <View style={styles.textcontainer}>
                <Text style={styles.context}>{introText}</Text>  
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    textcontainer: {
        textAlign: 'center',
        paddingTop: 10
    },
    globologo: {
        height: 100,
        width: 150
    },
    title: {
        paddingTop: 5,
        fontFamily: 'Ubuntu-R'
    },
    subtitle: {
        paddingTop: 10,
        fontFamily: 'Ubuntu-R'

    },
    context: {
        fontFamily: 'Ubuntu-LI',
        fontWeight: '300' 
    }
})
const introText = `Hello World! This is react native. I have a course on PluralSight where you can learn about me, I am very easy to learn and have a lot of potential to grow.`
export default Home;