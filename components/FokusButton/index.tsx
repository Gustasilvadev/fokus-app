import { Pressable, StyleSheet, Text, View } from "react-native";

export const FokusButton = () =>{
    return (
        <View>
            <Pressable style={styles.button}>
                {/* <Image source={require('')} style={styles.icon}/> */}
                <Text style={styles.buttonText}>Começar</Text>
            </Pressable>
        </View>

    );
};

const styles = StyleSheet.create({


  button:{
    width: '100%',
    height:'70%',
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
    textAlign:"center",
  },

  icon: {
    tintColor: '#000000',      
  }

})