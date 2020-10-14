import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        fontSize: 18,
    },
    lineBreak: {
        marginTop: 1,
        marginBottom: 1,
    },
});

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Bienvenidos a la app de Algebra II FIUBA!
            </Text>
            <View style={styles.lineBreak}/>
            <Text style={styles.text}>
                Indice:
            </Text>
            <View style={styles.lineBreak}/>
            <Button 
                title='Unidad 1'
                onPress={
                    () => navigation.navigate('Unidad 1')
                }
            />
        </View>
    );
};

export default Home;