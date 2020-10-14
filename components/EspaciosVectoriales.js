import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

const EspaciosVectoriales = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
                    Espacios Vectoriales
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 16}}>
                    Un espacio vectorial consta de:
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 14}}>
                    • Un conjunto V de objetos que llamaremos vectores.
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 14}}>
                    • Un conjunto K de escalares (K = R, o K = C).
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 14}}>
                    • Una operación, llamada suma, definida entre los elementos del conjunto V, que cumple u + v ∈ V.
                </Text>
                <Text style={{fontSize: 14, textDecorationLine: 'underline'}}>
                    Además, la suma debe cumplir:
                </Text>
                <Text style={{fontSize: 14, paddingLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Conmutatividad.</Text> u + v = v + u, ∀u, v ∈ V.
                </Text>
                <Text style={{fontSize: 14, paddingLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Asociatividad.</Text> u + (v + w) = (u + v) + w = u + v + w, ∀u, v, w ∈ V.
                </Text>
                <Text style={{fontSize: 14, paddingLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Existencia del elemento neutro.</Text> ∃ OV ∈ V/u + OV = OV + u = u.
                </Text>
                <Text style={{fontSize: 14, paddingLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Existencia del inverso aditivo.</Text> ∀u ∈ V, ∃ (−u) ∈ V tal que u + (−u) = OV
                </Text>
            </View>
            <View>
                <Text>
                    • Una operación llamada producto por escalar, que asocia a cada escalar λ ∈ K y cada vector u ∈ V el vector λ.u ∈ V.
                </Text>
                <Text style={{fontSize: 14, textDecorationLine: 'underline'}}>
                    Ademas, el producto por escalar debe cumplir:
                </Text>
                <Text style={{fontSize: 14, paddingLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Asociatividad.</Text> (λβ).u = λ.(β.u), ∀λ, β ∈ K y ∀u ∈ V.
                </Text>
                <Text style={{fontSize: 14, paddingLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Distributividad respecto vectores.</Text> λ.(u + v) = λ.u + λ.v, ∀λ ∈ K y ∀u, v ∈ V.
                </Text>
                <Text style={{fontSize: 14, paddingLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Distributividad respecto escalares.</Text> (λ+β).u = λ.u + β.u, ∀λ, β ∈ K y ∀u ∈ V.
                </Text>
                <Text style={{fontSize: 14, paddingLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Existencia del elemento neutro.</Text> 1.u = u, ∀u ∈ V.
                </Text>
            </View>

            <View style={{borderColor: 'gray', borderWidth: 1, borderRadius: 10, padding: 4, marginTop: 20}}>
                <Text style={{fontSize: 14, fontStyle: 'italic'}}>
                    La suma de elementos, del conjunto V, y el producto de un elemento 
                    de ese conjunto por un escalar, del conjunto K, siempre da como 
                    resultado otro elemento del conjunto.
                    Las cosas quedan encerradas, no se escapan del conjunto
                    en el que estamos trabajando.
                </Text>
            </View>

            <View style={{marginBottom: 30}} />
        </ScrollView>
    );
};

export default EspaciosVectoriales;