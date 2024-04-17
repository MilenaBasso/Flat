import { View, Text, FlatList } from "react-native";
import { styles } from "./Src/Styles/StyleSheet";

export default function App() {
  const data = [
    {
      id: "1",
      Texto: "Books are the mirrors of the soul. Virginia Woolf",
      backgroundColor: "#ff948b",
    },
    {
      id: "2",
      Texto:
        "I wanted to be where nobody I knew could ever come. Sylvia Plath ",
      backgroundColor: "#e0daf7",
    },
    {
      id: "3",
      Texto:
        "It is better to be unhappy and know the worst, than to be happy in a fool's paradise. Fyodor Dostoyevsky",
      backgroundColor: "#b2746b",
    },
    {
      id: "4",
      Texto:
        "Growing up is losing some illusions, in order to acquire others. Virginia Woolf ",
      backgroundColor: "#f3c5bf",
    },
    {
      id: "5",
      Texto:
        "Your worst sin is that you have destroyed and betrayed yourself for nothing. Fyodor Dostoevsky ",
      backgroundColor: "#cf4647",
    },
    {
      id: "6",
      Texto: "If you expect nothing from somebody you are never disappointed. Sylvia Plath",
      backgroundColor: "#ff948b",
    },
    {
      id: "7",
      Texto:
        "I wanted to be where nobody I knew could ever come. Sylvia Plath ",
      backgroundColor: "#e0daf7",
    },
    {
      id: "8",
      Texto:
        "It is better to be unhappy and know the worst, than to be happy in a fool's paradise. Fyodor Dostoyevsky",
      backgroundColor: "#b2746b",
    },
    {
      id: "9",
      Texto:
        "To live is to suffer, to survive is to find some meaning in the suffering. Nietzsche",
      backgroundColor: "#f3c5bf",
    },
    {
      id: "10",
      Texto:
        "True terror isn’t being scared; it’s not having a choice on the matter. John Green ",
      backgroundColor: "#cf4647",
    },
  ];

  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!
  const renderItem = ({ item }) => (
    <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.txt}>{item.Texto}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        horizontal={true} //Barra horizontal
        data={data} // Ele está recebendo todos os objetos do nosso array data
        renderItem={renderItem} // Chama a função para renderizar as Views box
        keyExtractor={(data) => data.id} // Extrair o id do objeto
      />
      <View style={styles.footer}></View>
    </View>
  );
}
