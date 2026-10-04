import React, { useState } from 'react';
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

export function HomeScreen({ navigation }: any) {
  const [mostrarAlunos, setMostrarAlunos] = useState(false);

  // Kaíque já começa selecionado
  const [alunoSelecionado, setAlunoSelecionado] = useState(
    'Kaíque Paesler do Rosário'
  );

  const selecionarKaique = () => {
    setAlunoSelecionado('Kaíque Paesler do Rosário');
    setMostrarAlunos(false);
  };

  const selecionarAyra = () => {
    Alert.alert('Aviso', 'Modalidade em desenvolvimento');
    setMostrarAlunos(false);
  };

  const modalidadeEmDesenvolvimento = () => {
    Alert.alert('Aviso', 'Modalidade em desenvolvimento');
  };

  const abrirComunicacao = () => {
    navigation.navigate('Communication');
  };

  return (
    <ImageBackground
      source={require('../../assets/imagem-fundo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>

        {/* SELEÇÃO DE ALUNO */}
        <View style={styles.alunoArea}>

          <Pressable
            style={styles.alunoTitulo}
            onPress={() => setMostrarAlunos(!mostrarAlunos)}
          >
            <Text style={styles.alunoTituloTexto}>Aluno(a)</Text>
          </Pressable>

          {/* ALUNO SELECIONADO */}
          <Pressable
            style={[
              styles.alunoSelecionado,
              mostrarAlunos && styles.alunoSelecionadoAberto,
            ]}
            onPress={() => setMostrarAlunos(!mostrarAlunos)}
          >
            <Text style={styles.nomeAluno}>{alunoSelecionado}</Text>

            <Text style={styles.seta}>
              {mostrarAlunos ? '▲' : '▼'}
            </Text>
          </Pressable>

          {/* OPÇÕES */}
          {mostrarAlunos && (
            <View style={styles.listaAlunos}>

              <Pressable
                style={styles.opcaoAluno}
                onPress={selecionarKaique}
              >
                <Text style={styles.nomeAluno}>
                  Kaíque Paesler do Rosário
                </Text>
              </Pressable>

              <Pressable
                style={styles.opcaoAluno}
                onPress={selecionarAyra}
              >
                <Text style={styles.nomeAluno}>
                  Ayra Paesler do Rosário
                </Text>
              </Pressable>

            </View>
          )}
        </View>


        {/* MENU CIRCULAR */}
        <View style={styles.menuWrapper}>

          <View style={styles.menuCircular}>

            {/* LINHA SUPERIOR */}
            <View style={styles.linha}>

              {/* COMUNICAÇÃO */}
              <Pressable
                style={[styles.quadrante, styles.comunicacao]}
                onPress={abrirComunicacao}
              >
                <Image
                  source={require('../../assets/icone-comunicacao.png')}
                  style={styles.icone}
                  resizeMode="contain"
                />
              </Pressable>

              {/* PEDAGÓGICO */}
              <Pressable
                style={[styles.quadrante, styles.pedagogico]}
                onPress={modalidadeEmDesenvolvimento}
              >
                <Image
                  source={require('../../assets/icone-pedagogico.png')}
                  style={styles.icone}
                  resizeMode="contain"
                />
              </Pressable>

            </View>


            {/* LINHA INFERIOR */}
            <View style={styles.linha}>

              {/* SAÚDE */}
              <Pressable
                style={[styles.quadrante, styles.saude]}
                onPress={modalidadeEmDesenvolvimento}
              >
                <Image
                  source={require('../../assets/icone-saude.png')}
                  style={styles.icone}
                  resizeMode="contain"
                />
              </Pressable>

              {/* SECRETARIA */}
              <Pressable
                style={[styles.quadrante, styles.secretaria]}
                onPress={modalidadeEmDesenvolvimento}
              >
                <Image
                  source={require('../../assets/icone-secretaria.png')}
                  style={styles.icone}
                  resizeMode="contain"
                />
              </Pressable>

            </View>

          </View>


          {/* BOTÃO / LOGO CENTRAL */}
          <View style={styles.centroMenu}>
            <Image
              source={require('../../assets/logo-conexo.png')}
              style={styles.logoCentral}
              resizeMode="contain"
            />
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
    alignItems: 'center',
  },


  // =========================
  // ÁREA DO ALUNO
  // =========================

  alunoArea: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    zIndex: 10,
  },

  alunoTitulo: {
    width: '94%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderWidth: 1,
    borderColor: '#dedede',
  },

  alunoTituloTexto: {
    fontSize: 22,
    color: '#111',
  },

  alunoSelecionado: {
    width: '94%',
    height: 42,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  alunoSelecionadoAberto: {
    borderBottomWidth: 0,
  },

  nomeAluno: {
    fontSize: 17,
    color: '#222',
    textAlign: 'center',
  },

  seta: {
    position: 'absolute',
    right: 18,
    fontSize: 13,
    color: '#555',
  },

  listaAlunos: {
    width: '94%',
    backgroundColor: '#fff',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#dedede',
  },

  opcaoAluno: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ededed',
  },


  // =========================
  // MENU CIRCULAR
  // =========================

  menuWrapper: {
    width: 320,
    height: 320,
    marginTop: 85,
    alignItems: 'center',
    justifyContent: 'center',

    // sombra Android
    elevation: 7,

    // sombra iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  menuCircular: {
    width: 305,
    height: 305,

    borderRadius: 152.5,

    overflow: 'hidden',

    backgroundColor: '#fff',

    borderWidth: 7,
    borderColor: '#e4e4e4',
  },

  linha: {
    flex: 1,
    flexDirection: 'row',
  },

  quadrante: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  // =========================
  // CORES DOS QUADRANTES
  // =========================

  comunicacao: {
    backgroundColor: '#F8C0CD',
  },

  pedagogico: {
    backgroundColor: '#A9DCF4',
  },

  saude: {
    backgroundColor: '#FFF2A8',
  },

  secretaria: {
    backgroundColor: '#BDEBCB',
  },


  // =========================
  // ÍCONES
  // =========================

  icone: {
    width: 64,
    height: 64,
  },


  // =========================
  // CENTRO DO MENU
  // =========================

  centroMenu: {
    position: 'absolute',

    width: 92,
    height: 92,

    borderRadius: 46,

    backgroundColor: '#fff',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#d0d0d0',

    elevation: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  logoCentral: {
    width: 62,
    height: 62,
  },

});
