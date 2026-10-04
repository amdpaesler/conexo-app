import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { ScreenContainer } from '../components/ScreenContainer';
import type { RootTabParamList } from '../types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Home do responsável</Text>
      <Text style={styles.text}>Tela vazia para receber alunos e atalhos.</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Communication')}>
        <Text>Abrir Comunicação</Text>
      </Pressable>
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
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    maxWidth: 280,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
  },
});
