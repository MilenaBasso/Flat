import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Preencha todo o espaço que esta vazio/sobrando
    backgroundColor: "pink", // Define a cor de fundo
  },

  header: {
    height: 80, // Define a altura do HEADER
    backgroundColor: "black", // Define a cor de fundo
  },

  first: {
    height: 280, // Define a altura dos componentes box
    width: 500, // Define a largura dos componentes box
    padding: 20, // Espaçamento interno
    margin: 10, // Espaçamento externo
    alignItems: "center", // Centraliza o que estiver dentro da BOX
    justifyContent: "center", // Centraliza o que estiver dentro da BOX
  },
  box: {
    height: 800, // Define a altura dos componentes box
    width: 280, // Define a largura dos componentes box
    padding: 20, // Espaçamento interno
    margin: 10, // Espaçamento externo
    alignItems: "center", // Centraliza o que estiver dentro da BOX
    justifyContent: "center", // Centraliza o que estiver dentro da BOX
  },

  txt: {
    fontSize: 30, // Define o tamanho da fonte
    fontWeight: 700, // Define a " largura " da fonte
  },

  footer: {
    height: 100, // Define a altura do componente Footer
    backgroundColor: "black", // Define a cor de fundo
  },
});
