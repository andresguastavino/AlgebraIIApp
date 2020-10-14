import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

const PropiedadesFundamentales = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
                    Propiedades Fundamentales de los Espacios Vectoriales
                </Text>
            </View>
            <View>
                <Text style={{textAlign: 'left', fontSize: 16}}>
                    A partir de los axiomas se pueden demostrar las siguientes propiedades:
                </Text> 
            </View> 
            <View>
                <Text style={{fontSize: 14}}>
                    • El elemento neutro Ov ∈ V es único.
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 14}}>
                    • El simétrico de un elemento u ∈ V es único.
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 14}}>
                    • 0.u = Ov para todo u ∈ V.
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 14}}>
                    • λ.Ov = Ov para todo escalar λ ∈ K.
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 14}}>
                    • Si λ.u = Ov entonces λ = 0 o u = Ov.
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 14}}>
                    • (−1).u = (−u).
                </Text>
            </View>

            <View style={{marginTop: 20, borderColor: 'gray', borderBottomWidth: 1}}>
                <Text style={{textAlign: 'center', fontSize: 16}}>
                    Demostremos algunas de estas propiedades
                </Text>
            </View>

            <View>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                    - El elemento neutro OV ∈ V es único.
                </Text>
                <Text style={{fontSize: 14}}>
                    Supongamos que Ov y O˜v son elementos neutros en el espacio
                    vectorial. Es decir
                </Text>
                <Text style={{fontStyle: 'italic', textAlign: 'center', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    Ov + u = u + Ov = u,
                </Text>
                <Text style={{fontSize: 14}}>
                    para todo u ∈ V y
                </Text>
                <Text style={{fontStyle: 'italic', textAlign: 'center', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    O˜v + v = v + O˜ = v
                </Text>
                <Text style={{fontSize: 14}}>
                    para todo v ∈ V. Pero como esto es cierto para todo u, v ∈ V, en
                    particular se cumple si u = O˜v y v = Ov. Por lo tanto:
                </Text>
                <Text style={{fontStyle: 'italic', textAlign: 'center', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    Ov = O˜v
                </Text>
            </View>

            <View>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                    - 0.u = Ov para todo u ∈ V.
                </Text>
                <Text style={{fontSize: 14}}>
                    Sabemos que:
                </Text>
                <Text style={{fontStyle: 'italic', textAlign: 'center', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    u = (1 + 0)u = 1u + 0u = u + 0u
                </Text>
                <Text style={{fontSize: 14}}>
                    entonces, sabiendo además que (-u) + u = 0v:
                </Text>
                <Text style={{fontStyle: 'italic', textAlign: 'center', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    (−u) + u = (-u) + u + 0u = 0u
                </Text>
            </View>

            <View style={{marginBottom: 30}} />
        </ScrollView>
    );
};

export default PropiedadesFundamentales;