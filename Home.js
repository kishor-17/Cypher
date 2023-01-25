import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, SafeAreaViewComponent ,Button ,TouchableOpacity} from 'react-native';


export default function Home ({navigation}) {
    return(
        <View style = {styles.main_view}>
          <View>
            <Text style = {styles.hintText}>Get the Worlds First Non - custodial cypher card
            </Text>

          </View>
          <View>
            <Text style = {styles.sub_view}>
              Explore all of Web3 in one place
            </Text>
            <View >
              <View style = {styles.options}>
                <Image source={require('./assets/swap.png')} style = {styles.image_icon}>
                  
                </Image>
                <Text >Swap to get instant USD</Text>
              </View>
              <View style = {styles.options}>
                <Image source={require('./assets/buy.png')} style = {styles.image_icon}>
                  
                </Image>
                <Text >Swap to get instant USD</Text>
              </View>
              <View style = {styles.options}>
                <Image source={require('./assets/chain.png')} style = {styles.image_icon}>
                  
                </Image>
                <Text >Swap to get instant USD</Text>
              </View>
              <View style = {styles.options}>
                <Image source={require('./assets/browser.png')} style = {styles.image_icon}>
                  
                </Image>
                <Text >Swap to get instant USD</Text>
              </View>
            </View>

          </View>
          <View>
            
              <TouchableOpacity style={styles.button1} onPress={() =>  navigation.navigate('Details')}>
                <Text style={styles.buttonText}>CREATE NEW WALLET</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText}>IMPORT EXISTING WALLET</Text>
              </TouchableOpacity>
          </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
    
    main_view : {
      flexDirection : 'column',
      alignItems : 'center',
      padding : 10

    },
    hintText: {
      fontSize: 16,
      textAlign: 'left',
      marginTop: 15,
      fontWeight : 'bold',
      fontSize : 30
    },
    sub_view :{
      textAlign : 'left',
      fontSize : 20,
      paddingTop : 10
    },
    image_icon : {
      width : 50,
      height : 50,

    },
    options : {
      flexDirection : 'row',
      padding : 20
    },
    button1: {
      backgroundColor: "gold",
      padding: 20,
      borderRadius: 10
    },
    button2: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      
    },
    buttonText: {
        color: "black"
    }
  
  });