import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';

import Topo from './Topo';
import Icone from './Icone';

const Jokenpo = () => {
    const [escolhaUsuario, setEscolhaUsuario] = useState('');
    const [escolhaComputador, setEscolhaComputador] = useState('');
  const [resultado, setResultado] = useState('');

  const opcoesPossiveis = ['pedra', 'papel', 'tesoura'];

  const jogar = (escolha) => {
    novoJogo();

    const numeroJogada = Math.floor(Math.random() * 3);
    const escolhaComputadorAleatoria = opcoesPossiveis[numeroJogada];

    let msgResultado = '';

    if ( ( (escolha === 'pedra') && (escolhaComputadorAleatoria === 'tesoura') ) ||
         ( (escolha === 'tesoura') && (escolhaComputadorAleatoria === 'papel') ) ||
         ( (escolha === 'papel') && (escolhaComputadorAleatoria === 'pedra') ) ) {

      msgResultado = 'Você Ganhou!';

    } else if ( ( (escolhaComputadorAleatoria === 'pedra') && (escolha === 'tesoura') ) ||
         ( (escolhaComputadorAleatoria === 'tesoura') && (escolha === 'papel') ) ||
         ( (escolhaComputadorAleatoria === 'papel') && (escolha === 'pedra') ) ) {

      msgResultado = 'Você Perdeu!';

    } else if ( escolha === escolhaComputadorAleatoria ) {

      msgResultado = 'Empate!';

    } else {
      msgResultado = 'Ninguém ganhou!';
    }

    setEscolhaUsuario(escolha);
    setEscolhaComputador(escolhaComputadorAleatoria);
    setResultado(msgResultado);
  };

  const novoJogo = () => {
    setEscolhaUsuario('');
    setEscolhaComputador('');
    setResultado('');
  };

  return (
    <SafeAreaView style={styles.container} >
      <Topo />

      <View style={styles.painelAcoes} >
        <View style={styles.btnEscolha} >
          <Button title="Pedra" onPress={() => jogar('pedra')} />
        </View>
        <View style={styles.btnEscolha} >
          <Button title="Papel" onPress={() => jogar('papel')} />
        </View>
        <View style={styles.btnEscolha} >
          <Button title="Tesoura" onPress={() => jogar('tesoura')} />
        </View>
      </View>

      <View style={styles.palco} >
        <Text style={styles.txtResultado} >{resultado}</Text>
        <Icone escolha={escolhaUsuario} jogador="Você" />
        <Icone escolha={escolhaComputador} jogador="Computador" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5
  },

  btnEscolha: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },

  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  palco: {
    alignItems: 'center',
    marginTop: 10,
  },

  txtResultado: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'red',
    height: 50
  },
});

export default Jokenpo;
