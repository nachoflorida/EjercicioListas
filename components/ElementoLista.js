/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Badge } from 'react-native-elements';

export class ElementoLista extends Component {
  constructor(props) {
    super(props);
  }
  /* Callback que se ejecutará cuando el usuario pulse sobre un elemento de la lista.
       En principio solo queremos que nos muestre un alert con el nombre del profe seleccionado,
       pero podriíamos hacer cualquier cosa.
    */
  elementoPulsado(unElementoDeLaListaClicado) {
    return alert('Has seleccionado: ' + unElementoDeLaListaClicado.profe);
  }

  render() {
    let element = this.props.elementoAMostrar.item;
    return (
      /* Modificamos el código para que cuando se pulse en el view de un elemento de la lista,
         le pase al componente padre los datos del elemento clicado */
      <Pressable
        elevation={4}
        onPress={this.props.comunicaAlPadreElementoSeleccionado.bind(this, element)}
        style={{ margin: 5, borderRadius: 5 }}>
        {/* Añadimos el componente Pressable para saber cuándo se clica sobre el view y distinguir
                el clic que hacemos sobre el texto del nombre del profe y el que hacemos sobre el view
            */}
        <View
          style={{
            backgroundColor: 'orange',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          {/* Programamos el evento onPress para que ejecute un callback cuando cliquemos sobre el nombre del profe*/}
          <View>
            <Text
              style={styles.text}
              onPress={this.elementoPulsado.bind(
                this,
                element,
              )}>
              {element.profe}
            </Text>
          </View>
          <View>
            <Text style={[styles.text, { color: 'black' }]}>
              {element.modulo}
              <Badge
                value={element.horas + ' h.'}
                status="error"
              />
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'orange', alignItems: 'center' }}>
          <Text style={{ color: 'blue' }}>
            {element.email}
          </Text>
        </View>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  text: { color: 'green', fontSize: 20, fontWeight: 'bold', margin: 5 },
});
