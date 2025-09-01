import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('./foco.png')} />

      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>

        <Pressable style={styles.button}>
           <Image source={require('./play_arrow.png')} style={styles.icon}/>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>

      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto ficticio e sem fins comerciais.Desenvolvido por Alura
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
    gap:32
  },

  actions:{
    padding:24,
     backgroundColor: 'rgba(20, 68, 128, 0.3)',
    width:'80%',
    height:'30%',
    borderRadius:32,
    borderColor: '#144480',
    borderWidth:2,
    alignItems:"center",
    justifyContent:"center",
    gap:32

  },

   timer:{
    color: '#ffffff',
    fontSize:53,
    fontFamily:"Unbounded",
    fontWeight:'600'

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
    fontWeight: 'bold'

  },

  icon: {
  tintColor: '#000000',      
  },

  footer:{

  },

  footerText:{
    fontFamily:"Montserrat",
    fontWeight:"400",
    fontSize:13,
    color:'#98A0A8'

  }


})


// style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: 'blue',
//       }}
//<Image source={require('./foco.png')} />