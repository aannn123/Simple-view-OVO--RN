

import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import bell from './../assets/icons/bell.png';
// import icons from './icons8-bell-100.png';



const NavbarComponent = () => {
  return (
      <View>
      <View style={css.header}>
        <View style={css.flexHeader}>
          <Text style={css.textHeader}>OVO</Text>
          <View style={css.iconHeaderPostion}>
            <Image style={css.iconHeader} source={bell} />
          </View>
        </View>

      </View>
      </View>
    

    )
}

const css = StyleSheet.create({
  header : {
    alignSelf: 'stretch',
    backgroundColor:'#4d2a86',
    height:55
  },

  flexHeader: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'space-between',
  },

  textHeader: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 28,
    paddingVertical: 11,
    marginLeft: 10
  },

  iconHeader : {
    width:25,
    height:25,
  },

  iconHeaderPostion: {
    paddingVertical: 15,
    marginRight: 10
  }
})

export default NavbarComponent;

