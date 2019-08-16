import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import imgPapel from '../assets/papel.png';
import imgPedra from '../assets/pedra.png';
import imgTesoura from '../assets/tesoura.png';

const Icone = ( props ) => {
  const { escolha, jogador } = props;
  let img = null;

  if ( escolha === 'pedra' ) {
    img = imgPedra;
  } else if ( escolha === 'papel' ) {
    img = imgPapel;
  } else if ( escolha === 'tesoura' ) {
    img = imgTesoura;
  } else {
    return false;
  }

  return (
    <View style={styles.icone}>
      <Text>{jogador}</Text>
      <Image source={img} />
    </View>
  );
};

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    marginTop: 10
  }
});

export default Icone;
