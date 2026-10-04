import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';

export function ProfileScreen({ navigation }: any) {
  const selecionarPerfil = (perfil: string) => {
    if (perfil === 'responsavel') {
      navigation.navigate('Login');
      return;
    }

    Alert.alert(
      'Módulo indisponível',
      'Este módulo não faz parte desta versão do aplicativo.'
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/imagem-fundo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>

          <Image
            source={require('../../assets/logo-conexo.png')}
            style={styles.logo}
          />

          <Text style={styles.title}>
            Uma plataforma completa{'\n'}
            para a gestão escolar.
          </Text>

          <Text style={styles.description}>
            Centralize informações, organize processos{'\n'}
            e fortaleça a comunicação com famílias{'\n'}
            e educadores em um ambiente{'\n'}
            digital seguro e eficiente.
          </Text>

          <View style={styles.buttonsContainer}>

            <Pressable
              style={styles.button}
              onPress={() => selecionarPerfil('responsavel')}
            >
              <Text style={styles.buttonText}>
                Sou o responsável
              </Text>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => selecionarPerfil('instituicao')}
            >
              <Text style={styles.buttonText}>
                Sou instituição
              </Text>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => selecionarPerfil('professor')}
            >
              <Text style={styles.buttonText}>
                Sou professor
              </Text>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => selecionarPerfil('administrativo')}
            >
              <Text style={styles.buttonText}>
                Administrativo
              </Text>
            </Pressable>

          </View>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 45,
  },

  logo: {
    width: 95,
    height: 75,
    resizeMode: 'contain',
    marginBottom: 22,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 27,
    color: '#111111',
    marginBottom: 18,
  },

  description: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
    color: '#333333',
  },

  buttonsContainer: {
    width: '100%',
    marginTop: 75,
    gap: 12,
  },

  button: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.90)',
  },

  buttonText: {
    fontSize: 15,
    color: '#111111',
  },
});