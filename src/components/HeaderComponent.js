/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import transfer from './../assets/icons/transfer.png';
import topUp from './../assets/icons/topUp.png';
// import bell from './../assets/icons/bell.png';
// import icons from './icons8-bell-100.png';

const IconHeader = (props) => {
  return (
      <View>
        <Image source={props.icon} style={{width:35, height:35}}/>
        <Text style={{fontSize:11,  color:'#4d2a86', fontWeight:'bold'}}>{props.name}</Text>
      </View>
    )
}


const NavbarComponent = () => {
  return (
      <View>
        <View style={css.header}>
        <Text style={css.text1}>OVO Cash</Text>
        <Text style={css.text2}>Rp 0</Text>
        <Text style={css.text1}>OVO Points <Text style={css.text4}>0</Text></Text>
        </View>
        <View style={css.cardHeader}>
          <View style={css.flexIcon}>
          <IconHeader name="Top Up" icon={topUp}/>
          <IconHeader name="Transfer" icon={transfer}/>
          <IconHeader name="History" icon={transfer}/>

          </View>
        </View>
      </View>
    

    )
}

const css = StyleSheet.create({

  flexIcon:{
    flex:1,
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-around'
  },

  cardHeader: {
    backgroundColor: '#fff',
    width:330,
    height: 80,
    flexDirection:'row',
    alignSelf: 'center',
    position: 'relative',
    bottom: 40,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 5
  
  },

  header: {
    alignSelf: 'stretch',
    backgroundColor:'#4d2a86',
    height:130,
  },

  flexHeader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  text1: {
    paddingVertical: 2,
    marginLeft: 10,
    color: '#d5ccdf',
    fontWeight:'bold',
    marginTop: 5
  },

  text2: {
    paddingVertical: 2,
    marginLeft: 10,
    color: 'white',
    fontWeight:'bold',
    marginTop: 5
  },

  text3: {
    paddingVertical: 2,
    marginLeft: 10,
    color: '#d5ccdf',
    fontWeight:'bold',
    marginTop: 5
  },

  text4: {
    color: '#d29736',
    fontSize: 14
  }
})

export default NavbarComponent;

