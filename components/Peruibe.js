import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import Api from './Api';

const image = { uri: "https://i.pinimg.com/736x/e7/ea/09/e7ea0963b681365134824d4de91e52a4.jpg" };


export default function Peruibe() {
  const [dados, setDados] = useState("");

  const [cidade, setCidade] = useState('Peruibe')
  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=10&fields=only_results,temp,city_name,description,time,wind_speedy,forecast,max,min,date&key=c6186edf&city_name=${cidade},SP`)
    setDados(response.data.forecast);
  
  }

  function limpar(){
    setDados("");
  } 
  return (
    <View style={styles.container}>

<ImageBackground  style={{
            position: "absolute",
            height: '100%',
            width: '100%'
          }}source={image}>
    </ImageBackground>

      <View style={styles.header}>
        <Text style={styles.textoTitulo}>Previsão do tempo - Peruíbe</Text>
                
    
     
      </View>
      <FlatList
          data={dados}
          renderItem={({item}) => {
            return (
              <View style={styles.tempo}>
                <Text>Data: {item.date}</Text>
                <Text>Max: {item.max}</Text>
                <Text>Min: {item.min}</Text>
                <Text>Min: {item.description}</Text>
              </View>
            );
          }}
        
        />

      <View style={styles.blocos}>
        <TouchableOpacity
        style={styles.btn}
        onPress={carregaDados}
        >
          <Text style={styles.btnTexto}>Pesquisar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.btn}
        onPress={limpar}
        >
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>

      </View>
      
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempo:{
    marginLeft: '10%',
    marginBottom: 20,
    width: '80%',
    padding: 18,
    borderRadius: 15,  
    backgroundColor: '#E0FFFF',
  },
  textoTitulo: {
    bottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
  header: {
    margin: 40
  },
  blocos: {
    fontSize: 20,
  },
  texto: {
    color: '#4281F5',
    fontSize: 20,
    marginTop: '4%',
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 2,
    width: 265,
    height: 35,
    fontSize: 20,
    borderColor: '#4281F5'
  },
  btn: {
    width: 265,
    height: 35,
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  btnTexto: {
    fontSize: 24,
    color: 'black'
  }
});