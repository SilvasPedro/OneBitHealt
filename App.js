import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form'

export default function App() 
{
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create
({
  container: 
  {
    flex: 1, // Flex 1 = Utilizar 100% da tela
    backgroundColor: '#e0e5e5', //Cor do fundo
    paddingTop: 50, // Distância do topo
  },
});
