/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Icon } from 'react-native-elements';

export class DetalleElementoSeleccionado extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //desestructuramos el objeto recibido
    let { profe, modulo, horas, email } = this.props.elementoSeleccionado;

    return (
      <View>
        <Card containerStyle={styles.sombra}>
          <Card.Title style={{ color: 'white' }}>Datos del Profesor</Card.Title>
          <Card.Divider />
          <View style={{ alignItems: 'center' }}>
            <Text>Nombre: {profe} </Text>
            <Text>Módulo: {modulo} </Text>
            <Text>Email: {email} </Text>
            <Text>Horas: {horas} </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Icon
              raised
              name="edit"
              type="font-awesome-5"
              color="#f50"
              reverse={true}
            />
            <Icon
              raised
              name="trash-alt"
              type="font-awesome-5"
              color="#50f"
              reverse={true}
            />
          </View>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sombra: {
    backgroundColor: '#0C6DF6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
