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
  Platform,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';


// ==============================
// TIPOS
// ==============================

type Mensagem = {
  id: number;
  texto: string;
  autor: 'escola' | 'responsavel';
};

type Conversas = {
  [key: string]: Mensagem[];
};


// ==============================
// CONTATOS
// ==============================

const contatos = [
  {
    id: 'secretaria',
    nome: 'Secretaria',
    sigla: 'S',
  },
  {
    id: 'coordenacao',
    nome: 'Coordenação',
    sigla: 'C',
  },
  {
    id: 'professor1',
    nome: 'Professor 1',
    sigla: 'P1',
  },
  {
    id: 'professor2',
    nome: 'Professor 2',
    sigla: 'P2',
  },
  {
    id: 'professor3',
    nome: 'Professor 3',
    sigla: 'P3',
  },
  {
    id: 'professor4',
    nome: 'Professor 4',
    sigla: 'P4',
  },
];


// ==============================
// TELA
// ==============================

export function CommunicationScreen() {

  const [mensagensAberto, setMensagensAberto] = useState(false);

  const [contatoSelecionado, setContatoSelecionado] =
    useState<string | null>(null);

  const [textoMensagem, setTextoMensagem] = useState('');


  // Conversas provisórias
  const [conversas, setConversas] = useState<Conversas>({

    secretaria: [
      {
        id: 1,
        texto: 'Boa tarde!',
        autor: 'escola',
      },
    ],

    coordenacao: [
      {
        id: 1,
        texto: 'Boa tarde!',
        autor: 'escola',
      },
    ],

    professor1: [
      {
        id: 1,
        texto: 'Boa tarde!',
        autor: 'escola',
      },
    ],

    professor2: [],

    professor3: [],

    professor4: [],

  });


  // ==============================
  // ALERTA
  // ==============================

  const exibirAviso = () => {

    if (Platform.OS === 'web') {

      window.alert('Modalidade em desenvolvimento');

    } else {

      Alert.alert(
        'Aviso',
        'Modalidade em desenvolvimento'
      );

    }

  };


  // ==============================
  // ABRIR MENSAGENS
  // ==============================

  const abrirMensagens = () => {

    setMensagensAberto(true);

  };


  // ==============================
  // SELECIONAR CONTATO
  // ==============================

  const selecionarContato = (id: string) => {

    setContatoSelecionado(id);

    setTextoMensagem('');

  };


  // ==============================
  // ENVIAR MENSAGEM
  // ==============================

  const enviarMensagem = () => {

    if (!contatoSelecionado) {

      if (Platform.OS === 'web') {

        window.alert(
          'Selecione um contato antes de enviar uma mensagem.'
        );

      } else {

        Alert.alert(
          'Aviso',
          'Selecione um contato antes de enviar uma mensagem.'
        );

      }

      return;

    }


    if (textoMensagem.trim() === '') {

      return;

    }


    const novaMensagem: Mensagem = {

      id: Date.now(),

      texto: textoMensagem.trim(),

      autor: 'responsavel',

    };


    setConversas((conversasAnteriores) => ({

      ...conversasAnteriores,

      [contatoSelecionado]: [

        ...(conversasAnteriores[contatoSelecionado] || []),

        novaMensagem,

      ],

    }));


    setTextoMensagem('');

  };


  // ==============================
  // NOME DO CONTATO
  // ==============================

  const contatoAtual = contatos.find(
    (contato) => contato.id === contatoSelecionado
  );


  const mensagensAtuais =
    contatoSelecionado
      ? conversas[contatoSelecionado] || []
      : [];


  // ==============================
  // INTERFACE
  // ==============================

  return (

    <ImageBackground
      source={require('../../assets/imagem-fundo.png')}
      style={styles.background}
      resizeMode="cover"
    >

      <SafeAreaView style={styles.container}>


        {/* =========================
            CABEÇALHO
        ========================= */}

        <View style={styles.header}>

          <Text style={styles.headerTexto}>
            Comunicação
          </Text>

        </View>


        {/* =========================
            BOTÕES PRINCIPAIS
        ========================= */}

        <View style={styles.menuPrincipal}>


          {/* MENSAGENS */}

          <Pressable
            style={[
              styles.botaoMenu,
              mensagensAberto && styles.botaoMenuAtivo,
            ]}
            onPress={abrirMensagens}
          >

            <Image
              source={require('../../assets/icone-mensagem.png')}
              style={styles.iconeMenu}
              resizeMode="contain"
            />

            <Text style={styles.textoMenu}>
              Mensagens
            </Text>

          </Pressable>


          {/* CALENDÁRIO */}

          <Pressable
            style={styles.botaoMenu}
            onPress={exibirAviso}
          >

            <Image
              source={require('../../assets/icone-calendario.png')}
              style={styles.iconeMenu}
              resizeMode="contain"
            />

            <Text style={styles.textoMenuInativo}>
              Calendário
            </Text>

          </Pressable>


          {/* CIRCULARES */}

          <Pressable
            style={styles.botaoMenu}
            onPress={exibirAviso}
          >

            <Image
              source={require('../../assets/icone-circulares.png')}
              style={styles.iconeMenu}
              resizeMode="contain"
            />

            <Text style={styles.textoMenuInativo}>
              Circulares
            </Text>

          </Pressable>

        </View>


        {/* ==================================================
            A PARTE ABAIXO SÓ APARECE DEPOIS DE CLICAR
            EM MENSAGENS
        ================================================== */}

        {mensagensAberto && (

          <KeyboardAvoidingView
            style={styles.areaMensagens}
            behavior={
              Platform.OS === 'ios'
                ? 'padding'
                : undefined
            }
          >


            {/* =========================
                CONTATOS
            ========================= */}

            <View style={styles.contatosContainer}>

              {contatos.map((contato) => {

                const selecionado =
                  contatoSelecionado === contato.id;

                return (

                  <Pressable
                    key={contato.id}
                    style={styles.contatoItem}
                    onPress={() =>
                      selecionarContato(contato.id)
                    }
                  >

                    <View
                      style={[
                        styles.contatoCirculo,
                        selecionado &&
                          styles.contatoCirculoSelecionado,
                      ]}
                    >

                      <Text
                        style={[
                          styles.contatoSigla,

                          selecionado &&
                            styles.contatoSiglaSelecionada,
                        ]}
                      >
                        {contato.sigla}
                      </Text>

                    </View>


                    <Text
                      style={[
                        styles.contatoNome,

                        selecionado &&
                          styles.contatoNomeSelecionado,
                      ]}
                      numberOfLines={2}
                    >
                      {contato.nome}
                    </Text>

                  </Pressable>

                );

              })}

            </View>


            {/* =========================
                NENHUM CONTATO SELECIONADO
            ========================= */}

            {!contatoSelecionado && (

              <View style={styles.selecioneContato}>

                <Text style={styles.selecioneContatoTexto}>
                  Selecione um contato para abrir a conversa
                </Text>

              </View>

            )}


            {/* =========================
                CAIXA DE CONVERSA
            ========================= */}

            {contatoSelecionado && (

              <View style={styles.chatContainer}>


                {/* NOME DO CONTATO */}

                <View style={styles.chatHeader}>

                  <Text style={styles.chatHeaderTexto}>
                    {contatoAtual?.nome}
                  </Text>

                </View>


                {/* HISTÓRICO */}

                <ScrollView
                  style={styles.listaMensagens}
                  contentContainerStyle={styles.listaMensagensConteudo}
                  showsVerticalScrollIndicator={false}
                >

                  {mensagensAtuais.length === 0 && (

                    <Text style={styles.semMensagens}>
                      Nenhuma mensagem ainda.
                    </Text>

                  )}


                  {mensagensAtuais.map((mensagem) => {

                    const mensagemEscola =
                      mensagem.autor === 'escola';


                    return (

                      <View
                        key={mensagem.id}
                        style={[
                          styles.linhaMensagem,

                          mensagemEscola
                            ? styles.linhaEscola
                            : styles.linhaResponsavel,
                        ]}
                      >


                        {/* ÍCONE ESCOLA */}

                        {mensagemEscola && (

                          <Image
                            source={require('../../assets/icone-escola-dialogo.png')}
                            style={styles.iconeDialogo}
                            resizeMode="contain"
                          />

                        )}


                        {/* BALÃO */}

                        <View
                          style={[
                            styles.balaoMensagem,

                            mensagemEscola
                              ? styles.balaoEscola
                              : styles.balaoResponsavel,
                          ]}
                        >

                          <Text style={styles.textoMensagem}>
                            {mensagem.texto}
                          </Text>

                        </View>


                        {/* ÍCONE RESPONSÁVEL */}

                        {!mensagemEscola && (

                          <Image
                            source={require('../../assets/icone-responsavel-dialogo.png')}
                            style={styles.iconeDialogo}
                            resizeMode="contain"
                          />

                        )}

                      </View>

                    );

                  })}

                </ScrollView>


                {/* =========================
                    DIGITAÇÃO
                ========================= */}

                <View style={styles.areaDigitacao}>

                  <TextInput
                    style={styles.inputMensagem}
                    placeholder="Digite sua mensagem..."
                    placeholderTextColor="#999"
                    value={textoMensagem}
                    onChangeText={setTextoMensagem}
                    multiline
                  />


                  <Pressable
                    style={styles.botaoEnviar}
                    onPress={enviarMensagem}
                  >

                    <Text style={styles.textoEnviar}>
                      ➤
                    </Text>

                  </Pressable>

                </View>


              </View>

            )}


          </KeyboardAvoidingView>

        )}


      </SafeAreaView>

    </ImageBackground>

  );

}


// ==========================================================
// ESTILOS
// ==========================================================

const styles = StyleSheet.create({


  // =========================
  // FUNDO
  // =========================

  background: {

    flex: 1,

  },


  container: {

    flex: 1,

  },


  // =========================
  // CABEÇALHO
  // =========================

  header: {

    width: '100%',

    height: 52,

    backgroundColor: '#F8C4CF',

    justifyContent: 'center',

    alignItems: 'center',

    borderBottomWidth: 2,

    borderBottomColor: '#D8D8D8',

  },


  headerTexto: {

    fontSize: 18,

    color: '#111',

    fontWeight: '500',

  },


  // =========================
  // MENU PRINCIPAL
  // =========================

  menuPrincipal: {

    width: '100%',

    flexDirection: 'row',

    justifyContent: 'center',

    gap: 8,

    paddingHorizontal: 8,

    paddingTop: 8,

    paddingBottom: 6,

    backgroundColor: 'rgba(255,255,255,0.78)',

  },


  botaoMenu: {

    flex: 1,

    maxWidth: 110,

    height: 88,

    backgroundColor: '#ffffff',

    borderWidth: 2,

    borderColor: '#F6D4DB',

    borderRadius: 14,

    justifyContent: 'center',

    alignItems: 'center',

  },


  botaoMenuAtivo: {

    borderColor: '#F2AEBE',

    backgroundColor: '#FFF9FA',

  },


  iconeMenu: {

    width: 50,

    height: 50,

  },


  textoMenu: {

    fontSize: 12,

    color: '#111',

    marginTop: 1,

  },


  textoMenuInativo: {

    fontSize: 12,

    color: '#777',

    marginTop: 1,

  },


  // =========================
  // ÁREA DE MENSAGENS
  // =========================

  areaMensagens: {

    flex: 1,

  },


  // =========================
  // CONTATOS
  // =========================

  contatosContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'center',

    paddingHorizontal: 8,

    paddingTop: 8,

    paddingBottom: 6,

    backgroundColor: 'rgba(255,255,255,0.90)',

  },


  contatoItem: {

    width: '33.33%',

    alignItems: 'center',

    marginBottom: 6,

  },


  contatoCirculo: {

    width: 45,

    height: 45,

    borderRadius: 23,

    backgroundColor: '#E8F7FD',

    borderWidth: 2,

    borderColor: '#A5DDF3',

    justifyContent: 'center',

    alignItems: 'center',

  },


  contatoCirculoSelecionado: {

    backgroundColor: '#F8C4CF',

    borderColor: '#F2A7B8',

  },


  contatoSigla: {

    fontSize: 15,

    fontWeight: '600',

    color: '#489EC2',

  },


  contatoSiglaSelecionada: {

    color: '#A6475D',

  },


  contatoNome: {

    fontSize: 10,

    color: '#555',

    textAlign: 'center',

    marginTop: 2,

  },


  contatoNomeSelecionado: {

    color: '#111',

    fontWeight: '600',

  },


  // =========================
  // SELECIONE CONTATO
  // =========================

  selecioneContato: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    padding: 20,

  },


  selecioneContatoTexto: {

    fontSize: 14,

    color: '#777',

    textAlign: 'center',

  },


  // =========================
  // CHAT
  // =========================

  chatContainer: {

    flex: 1,

    marginHorizontal: 8,

    marginBottom: 6,

    backgroundColor: 'rgba(255,255,255,0.70)',

    borderRadius: 12,

    overflow: 'hidden',

  },


  chatHeader: {

    minHeight: 34,

    backgroundColor: 'rgba(248,196,207,0.65)',

    justifyContent: 'center',

    alignItems: 'center',

    borderBottomWidth: 1,

    borderBottomColor: '#E7C0C9',

  },


  chatHeaderTexto: {

    fontSize: 14,

    fontWeight: '600',

    color: '#333',

  },


  listaMensagens: {

    flex: 1,

  },


  listaMensagensConteudo: {

    paddingVertical: 10,

    paddingHorizontal: 6,

  },


  semMensagens: {

    textAlign: 'center',

    marginTop: 25,

    color: '#999',

    fontSize: 13,

  },


  // =========================
  // LINHAS DE MENSAGEM
  // =========================

  linhaMensagem: {

    width: '100%',

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 12,

  },


  linhaEscola: {

    justifyContent: 'flex-start',

  },


  linhaResponsavel: {

    justifyContent: 'flex-end',

  },


  iconeDialogo: {

    width: 42,

    height: 42,

    marginHorizontal: 4,

  },


  // =========================
  // BALÕES
  // =========================

  balaoMensagem: {

    maxWidth: '72%',

    minHeight: 42,

    justifyContent: 'center',

    paddingHorizontal: 10,

    paddingVertical: 8,

    borderRadius: 6,

    backgroundColor: '#ffffff',

    borderWidth: 2,

  },


  balaoEscola: {

    borderColor: '#A8DDF5',

  },


  balaoResponsavel: {

    borderColor: '#F8BCCB',

  },


  textoMensagem: {

    fontSize: 13,

    color: '#222',

  },


  // =========================
  // DIGITAÇÃO
  // =========================

  areaDigitacao: {

    flexDirection: 'row',

    alignItems: 'flex-end',

    padding: 7,

    borderTopWidth: 1,

    borderTopColor: '#E5E5E5',

    backgroundColor: '#ffffff',

  },


  inputMensagem: {

    flex: 1,

    minHeight: 42,

    maxHeight: 90,

    borderWidth: 1.5,

    borderColor: '#A9DDF4',

    borderRadius: 10,

    paddingHorizontal: 10,

    paddingVertical: 8,

    fontSize: 14,

    color: '#222',

    backgroundColor: '#ffffff',

  },


  botaoEnviar: {

    width: 42,

    height: 42,

    borderRadius: 21,

    marginLeft: 7,

    backgroundColor: '#F8C4CF',

    justifyContent: 'center',

    alignItems: 'center',

  },


  textoEnviar: {

    fontSize: 22,

    color: '#ffffff',

    marginLeft: 2,

  },

});
