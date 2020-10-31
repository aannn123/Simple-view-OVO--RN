

import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import lightning from './../assets/icons/lightning.png';
import phone from './../assets/icons/phone.png';
import globe from './../assets/icons/globe.png';
import water from './../assets/icons/water.png';
import protect from './../assets/icons/protect.png';
import tv from './../assets/icons/tv.png';
import house from './../assets/icons/house.png';
import menu from './../assets/icons/menu.png';

const Icons = (props) => {
  return (
      <View>
        <View style={css.viewIcon}>
          <Image source={props.icon} style={{width:30, height:30, marginLeft:10}}/>
        </View>
        <View style={{}}>
          <Text style={{fontSize:13, color:'black', textAlign:'center'}}>{props.name}</Text>
        </View>

      </View>
    )
}

const ContentComponent = () => {
  return (
      <View>
        <View style={css.flexIcon}>
            <Icons icon={lightning} name="PLN"/>
            <Icons icon={phone} name="Pulsa"/>
            <Icons icon={globe} name="Paket Data"/>
            <Icons icon={water} name="Air PDAM"/>
        </View>
        <View style={css.flexIcon}>
            <Icons icon={protect} name="BPJS"/>
            <Icons icon={tv} name="Internet"/>
            <Icons icon={house} name="Iuran" nameTwo="Lingkungan"/>
            <Icons icon={menu} name="Lainya"/>
        </View>

        <View style={css.line}/>
      
      </View>
    

    )
}

const css = StyleSheet.create({

  flexIcon: {
      // flex:1,
      flexDirection:'row',
      justifyContent: 'space-around',
      paddingVertical: 10
  },

  viewIcon: {
    // backgroundColor: 'blue',
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor: '#EAF6FC',
    width: 50,
    height:50,
    elevation: 1,
    borderRadius:50,
  },

  line: {
    // elevation:1,
    backgroundColor:'#F1F1F1',
    alignItems: 'stretch',
    marginTop: 20,
    height:10,
  }
})

export default ContentComponent;

