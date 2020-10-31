

import React, {Component} from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import index from './../assets/images/index.jpeg';
import index2 from './../assets/images/index2.jpeg';
import index3 from './../assets/images/index3.jpeg';
import index1 from './../assets/images/index1.jpeg';

const Slider = (props) => {
  return (
      <View style={{padding:10}}>
        <Image source={props.image} style={css.image}></Image>          
      </View>
  )
}

const PromoComponent = () => {
  return (
      <View>
        <View style={css.flexView}>
          <Text style={css.textLeft}>Info dan Promo Spesial</Text>
          <Text style={css.textRight}>Lihat Semua</Text>
        </View>
      <ScrollView horizontal>
      <View style={css.slider}>
        <Slider image={index}/>
        <Slider image={index1}/>
        <Slider image={index2}/>
        <Slider image={index3}/>
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
    width:340,
    height:150,
    borderRadius:20
  },

  flexView: {
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop: 15,
    marginHorizontal: -20
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
   line: {
    // elevation:1,
    backgroundColor:'#F1F1F1',
    alignItems: 'stretch',
    marginTop: 20,
    height:10,
  }
})

export default PromoComponent;

