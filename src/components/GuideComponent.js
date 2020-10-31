

import React, {Component} from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import ovo from './../assets/images/ovo1.jpeg';

const Slider = (props) => {
  return (
      <View style={{padding:10}}>
        <Image source={props.image} style={css.image}></Image>          
      </View>
  )
}

const GuideComponent = () => {
  return (
      <View>
        <View style={css.flexView}>
          <Text style={css.textLeft}>Kenali OVO Lebih Dekat</Text>
          <Text style={css.textRight}>Tutup</Text>
        </View>
          <Text style={css.textBotom}>Biar makin akrab, yuk cek tips berikut</Text>

      <ScrollView horizontal>
      <View style={css.slider}>
        <Slider image={ovo}/>
        <Slider image={ovo}/>
        <Slider image={ovo}/>
        <Slider image={ovo}/>
        <Slider image={ovo}/>
      </View>
      </ScrollView>
        <View style={css.line}/>

      </View>
    

    )
}

const css = StyleSheet.create({
  slider: {
      flexDirection:'row',
    marginHorizontal: 10
      
      // margin: 1,
      // marginBottom: 70
      // paddingVertical:15,
      // justifyContent: 'space-around'
  },

  image: {
    width:120,
    height:170,
    borderRadius:20
  },

  flexView: {
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop: 15,
    marginHorizontal: -35
  },

  textLeft: {
    fontSize: 17,
    fontWeight: 'bold'
  },

  textRight: {
    fontSize: 13,
    marginTop: 5,
    color: '#38B9BB',
    fontWeight: 'bold'

  },

   textBotom: {
    fontSize: 12,
    marginLeft: 25,
    color: '#777777',

  },

   line: {
    // elevation:1,
    backgroundColor:'#F1F1F1',
    alignItems: 'stretch',
    marginTop: 20,
    height:10,
  }
})

export default GuideComponent;

