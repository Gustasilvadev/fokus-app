import { StyleSheet, Text } from "react-native";

export const Timer=(timerType) =>{
    return(
        <Text style={styles.timer}>
            {new Date(timerType.initialValue*100).toLocaleTimeString("pt-BR",{minute:"2-digit"})}
        </Text>
    );
};

const styles = StyleSheet.create({

   timer:{
    color: '#FFFFFF',
    fontSize:54,
    fontWeight:"bold",
    textAlign:"center",
   }
})

