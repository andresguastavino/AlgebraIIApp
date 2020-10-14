import React from 'react';
import { StyleSheet, ScrollView, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

const UnidadUno = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={{borderBottomColor: 'gray', borderBottomWidth: 1}}>
                <Text style={{textAlign: 'center', fontSize: 18}}>
                    Contenidos de esta unidad
                </Text>
            </View>
            <View style={{marginTop: 5, marginBottom: 5}}>
                <Button
                    title='Espacios Vectoriales'
                    onPress={
                        () => navigation.navigate('Espacios Vectoriales')
                    } 
                />
            </View>
            <View style={{marginBottom: 5}}>
                <Button
                    title='Ejemplos de Espacios Vectoriales'
                    onPress={
                        () => navigation.navigate('Ejemplos de Espacios Vectoriales')
                    } 
                />
            </View>
            <View style={{marginBottom: 5}}>
                <Button
                    title='Propiedades Fundamentales de los Espacios Vectoriales'
                    onPress={
                        () => navigation.navigate('Propiedades Fundamentales de los Espacios Vectoriales')
                    } 
                />
            </View>
            <View style={{marginBottom: 5}}>
                <Button
                    title='Subespacios Vectoriales'
                    onPress={
                        () => navigation.navigate('Subespacios Vectoriales')
                    } 
                />
            </View>

            <View style={{marginBottom: 30}} />
        </ScrollView>
    );
};

export default UnidadUno;