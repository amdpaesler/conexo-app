import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ImageBackground,
  Alert,
} from 'react-native';

export function ProfileScreen({ navigation }: any) {

  const selecionarPerfil = (perfil: string) => {
    if (perfil === 'responsavel') {
      navigation.navigate('Login');
      return;
    }

    Alert.alert(
      'Aviso',
      'Modalidade em desenvolvimento'
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/fundo-apresentacao.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>

        <View style={styles.content}>

          {/* TÍTULO */}
          <Text style={styles.title}>
            Uma plataforma completa{'\n'}
            para a gestão escolar.
          </Text>

          {/* DESCRIÇÃO */}
          <Text style={styles.description}>
            Centralize informações, organize processos{'\n'}
            e fortaleça a comunicação com famílias{'\n'}
            e educadores em um ambiente{'\n'}
            digital seguro e eficiente.
          </Text>

          {/* BOTÕES */}
          <View style={styles.buttonsContainer}>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => selecionarPerfil('responsavel')}
            >
              <Text style={styles.buttonText}>
                Sou o responsável
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => selecionarPerfil('instituicao')}
            >
              <Text style={styles.buttonText}>
                Sou instituição
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => selecionarPerfil('professor')}
            >
              <Text style={styles.buttonText}>
                Sou professor
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
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

  /* =========================
     FUNDO
     ========================= */

  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  content: {
    flex: 1,
    alignItems: 'center',

    /*
     * O logo e o nome "Conexo" agora fazem
     * parte da própria imagem de fundo.
     *
     * Por isso deixamos espaço no topo
     * antes de começar o título.
     */
    paddingTop: 105,
  },


  /* =========================
     TÍTULO
     ========================= */

  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 25,
    color: '#111111',

    marginBottom: 24,
  },


  /* =========================
     DESCRIÇÃO
     ========================= */

  description: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 16,
    color: '#222222',
  },


  /* =========================
     BOTÕES
     ========================= */

  buttonsContainer: {
    marginTop: 105,

    width: '100%',
    alignItems: 'center',

    gap: 10,
  },

  button: {
    width: '68%',
    maxWidth: 250,

    height: 43,

    backgroundColor: 'rgba(255,255,255,0.94)',

    borderWidth: 1,
    borderColor: '#C8C8C8',

    borderRadius: 4,

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },

  buttonPressed: {
    opacity: 0.65,
    transform: [
      {
        scale: 0.98,
      },
    ],
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#111111',
  },

});
