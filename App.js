/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import { ElementoLista } from './components/ElementoLista';
import { SeparadorLista } from './components/SeparadorLista';
import { DetalleElementoSeleccionado } from './components/DetalleElementoSeleccionado';

export class App extends Component {
  constructor(props) {
    super(props);
    //datosAMostrar como una variable del estado de la clase
    //Añadimos más información a nuestro array de datos
    this.state = {
      datosAMostrar: [
        {
          profe: 'Manel',
          modulo: 'DIN',
          horas: 120,
          email: 'mviel@florida-uni.es',
        },
        {
          profe: 'Belén',
          modulo: 'SGE',
          horas: 100,
          email: 'mbgil@florida-uni.es',
        },
        {
          profe: 'Fran',
          modulo: 'PMDM i PSP',
          horas: 160,
          email: 'fjserrano@florida-uni.es',
        },
        {
          profe: 'JuanMi',
          modulo: 'ADA',
          horas: 120,
          email: 'jmalberola@florida-uni.es',
        },
        {
          profe: 'Caterina',
          modulo: 'ANG',
          horas: 60,
          email: 'clatella@florida-uni.es',
        },
        {
          profe: 'Manuel',
          modulo: 'EIE',
          horas: 40,
          email: 'mmiquel@florida-uni.es',
        },
      ],
      detalleProfe: '',
      detalleModulo: '',
      detalleHoras: 0,
      detalleEmail: '',
      mostrarDetalle: false,
    };
  }
  /* función que recibe los datos del elemento seleccionado al FlatList, y rellena los datos
  del componente DetalleElementoSeleccionado */
  rellenaDetalle = (datosElementoSeleccionado) => {
    return this.setState({
      detalleProfe: datosElementoSeleccionado.profe,
      detalleModulo: datosElementoSeleccionado.modulo,
      detalleHoras: datosElementoSeleccionado.horas,
      detalleEmail: datosElementoSeleccionado.email,
      mostrarDetalle: true,
    });
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Prueba Lista</Text>
          </View>
          <View style={{ height: 300 }}>
            {/* Queremos que cuando se haga clic en un nombre de la lista, nos muestre un alert indicando
              el nombre que se ha clicado en la lista*/}
            <FlatList
              data={this.state.datosAMostrar}
              keyExtractor={(item, index) => index.toString()}
              style={{ padding: 5 }}
              renderItem={(item) => (
                <ElementoLista
                  elementoAMostrar={item}
                  comunicaAlPadreElementoSeleccionado={this.rellenaDetalle}
                />
              )}
              ItemSeparatorComponent={() => <SeparadorLista />}
            />
          </View>
          <ScrollView nestedScrollEnabled={true}>
            {this.state.mostrarDetalle ? (
              <DetalleElementoSeleccionado
                elementoSeleccionado={{
                  profe: this.state.detalleProfe,
                  modulo: this.state.detalleModulo,
                  horas: this.state.detalleHoras,
                  email: this.state.detalleEmail,
                }}
              />)
              :
              <View />
            }
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default App;
