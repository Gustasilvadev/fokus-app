import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('./foco.png')} />

      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>

      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}></Text>
        Projeto ficticio e sem fins comerciais. Desenvolvido por Aluno

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: '#021123'
  },

  actions:{
    padding:24,
    backgroundColor:'#144480',
    width:'80%',
    height:'30%',
    borderColor:'#144480',
    borderRadius:32,
    borderWidth:2,
    alignItems:"center",
    justifyContent:"center"

  },

   timer:{
    color: '#ffffff',
    fontSize:53,
    fontFamily:"Unbounded",
    fontWeight:600

  },


   button:{

  },

  buttonText:{

  },

  footer:{

  },

  footerText:{

  }


})


// style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: 'blue',
//       }}
//<Image source={require('./foco.png')} />