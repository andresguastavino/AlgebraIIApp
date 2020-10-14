import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Imports de componentes
// Home
import Home from './Home';

// Unidades
import UnidadUno from './UnidadUno';
/*
import UnidadDos from './UnidadDos';
import UnidadTres from './UnidadTres';
import UnidadCuatro from './UnidadCuatro';
import UnidadCinco from './UnidadCinco';
import UnidadSeis from './UnidadSeis';
*/

// Contenidos
import EspaciosVectoriales from './EspaciosVectoriales';
import EjemploEspaciosVectoriales from './EjemploEspaciosVectoriales';
import PropiedadesFundamentales from './PropiedadesFundamentales';
import SubespaciosVectoriales from './SubespaciosVectoriales';

const Stack = createStackNavigator();

const NavigationHandler = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: true}}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Unidad 1' component={UnidadUno} />
                <Stack.Screen name='Espacios Vectoriales' component={EspaciosVectoriales} />
                <Stack.Screen name='Ejemplos de Espacios Vectoriales' component={EjemploEspaciosVectoriales} />
                <Stack.Screen name='Propiedades Fundamentales de los Espacios Vectoriales' component={PropiedadesFundamentales} />
                <Stack.Screen name='Subespacios Vectoriales' component={SubespaciosVectoriales} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};  

export default NavigationHandler;