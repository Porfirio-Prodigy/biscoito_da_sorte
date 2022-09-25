import { Component } from 'react';
import { Image,
         StyleSheet, 
         Text,
         TouchableOpacity, 
         View } from 'react-native';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      img: require('./src/assets/biscoito.png'),
      textoFrase: "Seja severo",
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);


    this.frases = [
      "O grande segredo para quebrar as regras é fazer com que pareça que você as está seguindo.",
      "Se não quer mais ser traído, comece a duvidar da pessoa de quem você menos deseja duvidar.",
      "O ódio nasce quando as pessoas se reúnem.",
      "A vida das pessoas não pertence a ninguém, a não ser a elas mesmas.",
      "Quando se está na escuridão, você apenas afunda ainda mais nela. Mantenha a luz brilhando.",
      "Ela está bem. Não está com defeito, só está crescendo.",
      "O poder dos seus companheiros também faz parte do seu poder."
    ];

  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    console.log(numeroAleatorio);

    this.setState({img: require('./src/assets/biscoitoAberto.png') });
    this.setState({textoFrase: this.frases[numeroAleatorio]});
    
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img} 
        />

        <Text style={styles.texto}>{ this.state.textoFrase }</Text>

        <TouchableOpacity style={styles.btnButton} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center"
  },
  img: {
    width: 250,
    height: 250,
    marginTop: 50,
  },  
  texto: {
    textAlign: "center",
    fontStyle: 'italic',
    marginTop: 20,
    fontSize: 20,
    color: "#F10000"
  },
  btnButton: {
    width: 230,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#FF3333",
    marginTop: 50,
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 16,
    color: "#FFF"
  }
});

export default App;
