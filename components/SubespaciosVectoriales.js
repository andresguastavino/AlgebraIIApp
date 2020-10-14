import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

const SubespaciosVectoriales = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
                    Subespacios Vectoriales
                </Text>
            </View>
            <View>
                <Text>
                    Un subespacio de un K espacio vectorial V, es
                    un subconjunto S ⊂ V, S ≠ ∅ que resulta ser un espacio
                    vectorial con la suma y el producto por escalar definidos.
                </Text>
            </View>
            <View style={{marginTop: 10}}>
                <Text>
                    Cuando estudiamos si S cumple la definición de espacio vectorial, debemos 
                    verificar, en primer lugar:
                </Text>
                <Text style={{marginTop: 3, paddingLeft: 30,}}>
                    • que S resulta ser cerrado para las operaciones suma.
                </Text>
                <Text style={{paddingLeft: 30}}>
                    • que S resulta ser cerrado para producto por escalar.
                </Text>
            </View>  
            <View style={{marginTop: 10}}>
                <Text>
                    Por estar S incluido en un espacio vectorial hay una serie
                    de propiedades que con seguridad se van a cumplir:
                </Text>
                <Text>
                    • La suma es conmutativa para todo par de elementos de V, por
                    lo tanto será conmutativa, en particular, para todo par de
                    elementos en S. Lo mismo sucede con la propiedad asociativa
                    para la suma y con las otras propiedades relativas al producto
                    por escalar.
                </Text>
                <Text>
                    • Ya demostramos que en todo espacio vectorial se cumple que
                    0u = Ov, así que si S ≠ ∅ ⇒ para cualquier u ∈ S, se va a
                    cumplir que 0.u = Ov y como λ.u ∈ S, ∀ λ ∈ K ⇒ Ov ∈ S.
                </Text>
                <Text>
                    • Además, es fácil ver que si un subconjunto de un espacio
                    vectorial V, es cerrado para la suma y el producto por escalar
                    y Ov ∈ S ⇒ S resulta ser un espacio vectorial.
                </Text>
            </View>
            <View style={{marginTop: 10}}>
                <Text>
                    Entonces, si estamos en un espacio vectorial <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>para ver si un
                    subconjunto de V es un espacio vectorial con la suma y
                    producto por escalar ya definidos, sólo necesitaremos chequear
                    tres propiedades:</Text>
                </Text>
                <View style={{borderWidth: 2, borderColor: 'gray', padding: 3, borderRadius: 10, marginTop: 20}}>
                    <Text>
                        Si V es un K espacio vectorial, se dice que S ⊂ V es un
                        subespacio de V si se cumple:
                    </Text>
                    <Text style={{fontStyle: 'italic',marginBottom: 1}}>
                        1. Ov ∈ S;
                    </Text>
                    <Text style={{fontStyle: 'italic', marginTop: 1, marginBottom: 1}}>
                        2. Si u, v ∈ S ⇒ u + v ∈ S;
                    </Text>
                    <Text style={{fontStyle: 'italic', marginTop: 1}}>
                        3. Si u ∈ S y λ ∈ K ⇒ λu ∈ S.
                    </Text>
                </View>
            </View>

            <View style={{marginBottom: 30}} />
        </ScrollView>
    );
};

export default SubespaciosVectoriales;