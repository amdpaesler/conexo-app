import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { ScreenContainer } from '../components/ScreenContainer';
import { saveSession } from '../storage/appStorage';
import type { RootTabParamList } from '../types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  async function handleEnterPress() {
    await saveSession({
      cpf: '123456789000',
      profile: 'responsavel',
      loggedAt: new Date().toISOString(),
    });

    navigation.navigate('Home');
  }

  return (
    <ScreenContainer>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.text}>Tela vazia para receber os campos de CPF e senha.</Text>

      <Pressable style={styles.button} onPress={handleEnterPress}>
        <Text>Entrar</Text>
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
