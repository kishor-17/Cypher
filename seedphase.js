
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, Image, SafeAreaViewComponent ,Button ,TouchableOpacity} from 'react-native';

const bip39 = require('bip39')

export default function seedPhase ({navigation}) {
    const mnemonic = bip39.generateMnemonic()

    bip39.mnemonicToSeedSync('basket actual').toString('hex')
    
    
    return(
        <View>
            <View style = {styles.main_view}>
                <Text style = {styles.sub_view}>Your Seed Phrase makes it easy to backup and restore your account</Text>
                <Text>{mnemonic}</Text>
            </View>
            <View style = {styles.main_view}>
                <Text style = {styles.sub_view}>WARNING : Never disclose your Secret Recovery Phrase. Anyone with this phrase can take your assets forever</Text>
            </View>

            <View>
            
              <TouchableOpacity style={styles.button1} onPress={() =>  navigation.navigate('Address')}>
                <Text style={styles.buttonText}>CONFIRM</Text>
              </TouchableOpacity>
              
          </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main_view : {
        flexDirection : 'column',
        alignItems : 'center',
        padding : 10,
        
      },
      sub_view :{
        textAlign : 'center',
        fontSize : 18,
        paddingTop : 10
      },
      button1: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10
      },
      buttonText: {
        color: "black"
    }
  
  });