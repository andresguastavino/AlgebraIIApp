import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

const EjemploEspaciosVectoriales = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
                    Ejemplos de Espacios Vectoriales
                </Text>
            </View>
            <View style={{borderBottomWidth: 1, borderColor: 'gray'}} >
                <Text style={{textAlign: 'center', fontSize: 16}}>
                    Algunos ejemplos de Espacios Vectoriales
                </Text>
            </View>
            <View style={{marginTop: 10, marginBottom: 10}}>
                <Text style={{fontSize: 14}}>
                    • Empecemos por el más familiar: V = R^n, K = R, con la suma
                    y el producto habituales es un espacio vectorial. Se suele decir
                    que R^n es un R espacio vectorial.
                </Text>
            </View>
            <View style={{marginTop: 10, marginBottom: 10}}>
                <Text style={{fontSize: 14}}>
                    • El conjunto C^n, de las n-uplas formadas por números complejos, 
                    o sea C^n = {'{x1, x2, ... ,xn, con x1, ..., xn ∈ C}'}, junto con el conjunto 
                    de escalares complejos K = C, con la suma y el producto por escalar 
                    como los de antes forman unespacio vectorial. Se dice que C^n − C es 
                    un espacio vectorial.
                </Text>
            </View>
            <View style={{marginTop: 10, marginBottom: 10}}>
                <Text style={{fontSize: 14}}>
                    • El conjunto C^n, de las n-uplas formadas por números
                    complejos, como antes con el conjunto de escalares reales
                    K = R, con la misma definición de suma y producto por
                    escalar, también forman un espacio vectorial. En este caso se
                    dice que C^n − R es un espacio vectorial.
                </Text>
            </View>
            <View style={{marginTop: 10, marginBottom: 10}}>
                <Text style={{fontSize: 14}}>
                    • El conjunto R^n, de las n-uplas formadas por números reales, con el conjunto de
                    escalares complejos K = C <Text style={{fontWeight: 'bold', fontSize: 14, textDecorationLine: 'underline'}}>NO</Text> es un espacio vectorial.
                </Text>
            </View>
            <View style={{marginTop: 10, marginBottom: 10}}>
                <Text style={{fontSize: 14}}>
                    • {'C(I)'} denota el conjunto de todas las funciones continuas con dominio en I ⊂ R y codominio R:
                </Text>
                <Text style={{textAlign: 'center', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    {'C(I) = {f : I → R, f es continua}'},
                </Text>
                <Text style={{fontSize: 14}}>
                    junto con el conjunto de escalares K = R, donde se define la suma como:
                </Text>
                <Text style={{textAlign: 'center', fontStyle: 'italic', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    f + g : I → R / (f + g)(x) = f(x) + g(x)
                </Text>
                <Text style={{fontSize: 14}}>
                    y el producto por un escalar λ ∈ R como:
                </Text>
                <Text style={{textAlign: 'center', fontStyle: 'italic', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    (λ.f) : I → R / (λ.f)(x) = λ.f(x), ∀ λ ∈ R
                </Text>
                <Text style={{fontSize: 14}}>
                    y ∀f ∈ C(I) es un espacio vectorial.
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 14}}>
                    • El conjunto {'Rn[x]'} es el conjunto de todos los polinomios con coeficientes reales
                    de grado menor e igual que n, con el conjunto K = R y la suma y producto por
                    escalares definidos como en el item anterior forman un espacio vectorial. Si
                    P ∈ {'Rn[x]'}
                </Text>
                <Text style={{textAlign: 'center', fontStyle: 'italic', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    P = anx^n + ··· + a1x + a0, ai ∈ R; i = 1, ... , n.
                </Text>
                <Text style={{fontSize: 14}}>
                    Dados
                </Text>
                <Text style={{textAlign: 'center', fontStyle: 'italic', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    P = anx^n + ··· + a1x + a0 ∈ Rn[x]
                </Text>
                <Text style={{textAlign: 'center', fontStyle: 'italic', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    Q = bnx^n + · · · + b1x + b0 ∈ Rn[x]
                </Text>
                <Text style={{fontSize: 14}}>
                    se dice que P = Q ⇔ ai = bi ∀i = 1, ... , n.
                </Text>
                <Text style={{fontSize: 14}}>
                    El elemento neutro {'ORn[x]'}, en este espacio vectorial es el polinomio nulo, es
                    decir el polinomio que tiene todos sus coeficientes iguales a 0:
                </Text>
                <Text style={{textAlign: 'center', fontStyle: 'italic', marginTop: 3, marginBottom: 3, fontSize: 14}}>
                    ORn[x] = 0x^n + ··· + 0x + 0.
                </Text>
            </View>

            <View style={{marginBottom: 30}} />
        </ScrollView>
    );
};

export default EjemploEspaciosVectoriales;