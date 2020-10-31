/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import round from './../assets/icons/round.png';
import arrow from './../assets/icons/arrow.png';

const CenterComponent = () => {
  return (
      <View>
        <View style={css.upgrade}>
          <View style={{flexDirection:'row'}}>
          <Image source={round} style={{width:25, height:25, marginLeft:20, marginTop:10 }} />
          {/*<Image source={transfer} style={{width:25, height:25}} />*/}
          <View style={{flexDirection:'column', marginTop:7, marginLeft:10}}>
            <Text style={css.text1}>Upgrade ke OVO Premier</Text>
            <Text style={css.text2}>Dapatkan lebih banyak keuntunngan</Text>
          </View>
          <View style={{marginTop: 15 ,marginLeft:60}}>
            <Image source={arrow} style={{width:18, height:18 }} />
          </View>

          </View>
        </View>
      </View>
    

    )
}

const css = StyleSheet.create({
   upgrade: {
    backgroundColor: '#E8FCFB',
    elevation: 2,
    width:330,
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    position: 'relative',
    bottom: 20
  
  },

  text1: {
    color: '#156E71',
    fontWeight: 'bold',
    fontSize:13
  },

  text2: {
    color: '#156E71',
    fontSize:12
  }
})

export default CenterComponent;

