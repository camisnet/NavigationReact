import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from "react-native";

const image = { uri: "https://i.pinimg.com/736x/e7/ea/09/e7ea0963b681365134824d4de91e52a4.jpg" };

export default function Home({navigation}){
    return(

        <View style={styles.bloco}>

<ImageBackground  style={{
            position: "absolute",
            height: '100%',
            width: '100%'
          }}source={image}>
    </ImageBackground>
        
            <Text style={styles.texto}>PREVISÃO DO TEMPO</Text>

            <Text style={styles.texto}>Municípios: </Text>

            <View>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Mongagua")}>
                    <Text style={styles.textBtn}>Mongaguá</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Santos")}>
                    <Text style={styles.textBtn}>Santos</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Osasco")}>
                    <Text style={styles.textBtn}>Osasco</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Tatuape")}>
                    <Text style={styles.textBtn}>Tatuapé</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Peruibe")}>
                    <Text style={styles.textBtn}>Peruíbe</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    bloco: {
        flex: 1,
        backgroundColor: '#7FFFD4',
        alignItems: 'center',
        justifyContent: 'center',  
    },
    texto:{
        fontStyle: 'verdana',
        bottom: 16,
        fontSize: 30,
        textAlign: 'center',
        color: '#fff'
    },
    btn: {
        backgroundColor: '#B0E0E6',
        marginTop: 20,
        width: 180,
        height: 50,
        marginLeft: '5%',
        borderRadius: 10,
        
    cursor:'pointer',
    overflow: 'hidden',
    outline:'none',
    },
    textBtn: {
        fontSize:20,
        color: 'black',
        textAlign: 'center',
        top: 9
    },
});
