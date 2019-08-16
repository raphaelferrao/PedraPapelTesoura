import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import jokenpo from '../assets/jokenpo.png';

const Topo = () => {
  return (
    <View style={styles.container}>
      <Image source={jokenpo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
});

export default Topo;
