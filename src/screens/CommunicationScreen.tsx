import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { ScreenContainer } from '../components/ScreenContainer';

export function CommunicationScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Comunicação</Text>
      <Text style={styles.text}>Tela vazia para receber Mensagens, Calendário e Circulares.</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  text: {
    textAlign: 'center',
  },
});
