import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { saveSession } from '../storage/appStorage';
import type { RootTabParamList } from '../types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  async function handleEnterPress() {
  if (cpf === '123456789000' && senha === 'teste123') {
    setErro('');

    await saveSession({
      cpf,
      profile: 'responsavel',
      loggedAt: new Date().toISOString(),
    });

    navigation.navigate('Home');
  } else {
    setErro('Usuário ou senha inválidos.');
  }
}

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/fundo-login.png')}
        style={styles.background}
        resizeMode="cover"
      />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Bem vindo!</Text>

          <Text style={styles.subtitle}>
            Informe seus dados para continuar
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>CPF:</Text>

            <TextInput
              style={styles.input}
              value={cpf}
              onChangeText={setCpf}
              placeholder="digite seu cpf..."
              placeholderTextColor="#555555"
              keyboardType="numeric"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Senha</Text>

            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              placeholder="digite sua senha..."
              placeholderTextColor="#555555"
              secureTextEntry
            />

            {erro !== '' && <Text style={styles.error}>{erro}</Text>}

            <Pressable style={styles.button} onPress={handleEnterPress}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </Pressable>

            <Text style={styles.forgotPassword}>
              Esqueceu sua senha? Clique{' '}
              <Text style={styles.link}>aqui</Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },

  keyboardView: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 14,
  },

  subtitle: {
    fontSize: 16,
    color: '#111111',
    textAlign: 'center',
    marginBottom: 76,
  },

  form: {
    width: '100%',
    maxWidth: 280,
  },

  label: {
    fontSize: 16,
    color: '#111111',
    marginBottom: 10,
  },

  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 10,
    fontSize: 14,
    fontStyle: 'italic',
    color: '#111111',
    marginBottom: 24,
  },

  button: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 38,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
  },

  error: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },

  forgotPassword: {
    marginTop: 12,
    fontSize: 13,
    fontStyle: 'italic',
    color: '#111111',
    textAlign: 'center',
  },

  link: {
    fontWeight: '700',
  },
});
