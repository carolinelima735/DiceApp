import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

// Frases exibidas de acordo com o número sorteado.
// Fique à vontade para trocar as frases pelas que preferir.
const FRASES = {
  1: 'Ataque fraco... tente de novo!',
  2: 'Um golpe básico, mas conta.',
  3: 'Ataque mediano, seguindo em frente.',
  4: 'Boa! Ataque acima da média.',
  5: 'Excelente ataque!',
  6: 'CRÍTICO! Ataque máximo!',
};

// Emojis de dado de 1 a 6 (Unicode), usados como "imagem" do dado.
const DADOS = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

export default function App() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState(null);

  function sortear() {
    const novoNumero = Math.floor(Math.random() * 6) + 1;
    setNumero(novoNumero);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <TextInput
        style={styles.inputNome}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.titulo}>Hora de atacar!</Text>
      <Text style={styles.subtitulo}>Ataque normal</Text>

      <Text style={styles.appNome}>DiceApp</Text>

      <View style={styles.dadoContainer}>
        <Text style={styles.dadoEmoji}>
          {numero ? DADOS[numero] : '🎲'}
        </Text>
        {numero && <Text style={styles.dadoNumero}>{numero}</Text>}
      </View>

      <Text style={styles.frase}>
        {numero ? FRASES[numero] : 'Clique em sortear para jogar o dado!'}
      </Text>

      <TouchableOpacity style={styles.botao} onPress={sortear}>
        <Text style={styles.botaoTexto}>Sortear</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  inputNome: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 6,
    marginBottom: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 32,
  },
  appNome: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  dadoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  dadoEmoji: {
    fontSize: 120,
  },
  dadoNumero: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  frase: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    marginBottom: 32,
    minHeight: 40,
  },
  botao: {
    backgroundColor: '#2e7d32',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});