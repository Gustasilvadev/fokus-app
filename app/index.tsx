import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('./foco.png')} />

      <View style={styles.actions}>

        <View style={styles.context}>

          <Pressable style={styles.contextButtonActive}>
            <Text style={styles.contextButtonText}>Foco</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>Pausa Curta</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>Pausa Longa</Text>
          </Pressable>

        </View>

        <Text style={styles.timer}>25:00</Text>

        <Pressable style={styles.button}>
           <Image source={require('./play_arrow.png')} style={styles.icon}/>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto ficticio e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Aluno.
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: '#021123',
    gap:40,
  },

  actions:{
    padding:24,
    backgroundColor: '#14458080',
    width:'80%',
    height:'30%',
    borderRadius:32,
    borderColor: '#144480',
    borderWidth:2,
    alignItems:"center",
    justifyContent:"center",
    gap:32,

  },

   timer:{
    color: '#FFFFFF',
    fontSize:54,
    fontWeight:"bold",
    textAlign:"center",

  },

  button:{
    width: '80%',
    height:'20%',
    backgroundColor:'#B872FF',
    borderRadius:32,
    justifyContent:"center",
    alignItems:"center",
    padding:8,
    flexDirection: 'row',

  },

  buttonText:{
    color:'#021123',
    padding: 5,
    fontSize:18,
  },

  icon: {
    tintColor: '#000000',      
  },

  footer:{
    width:'80%',
  },

  footerText: {
    textAlign:"center",
    fontSize:12.5,
    color:'#98A0A8',

  },

  context: {

  },

  contextButtonText: {

  },

  contextButtonActive:{
    
  }

})


// style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: 'blue',
//       }}
//<Image source={require('./foco.png')} />