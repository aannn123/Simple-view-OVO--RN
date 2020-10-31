

import React, {Component} from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import ovo from './../assets/images/ovo1.jpeg';
import index from './../assets/images/index.jpeg';



const BottomComponent = () => {
  return (
      <View style={{marginBottom:140}}>
        <View style={css.flexView}>
          <Text style={css.textLeft}>Yang Menarik Di OVO</Text>
          <Text style={css.textBotom}>Jangan ngaku update kalau belum cobain fitur ini</Text>
        </View>

        <View style={css.flexImage}>
          <View style={css.imageOne}>
              <Image style={css.imageCard} source={index}/>
              <Text style={css.title}>Pusat Bantuan</Text>
              <Text style={css.content}>Punya kendala atau pertanyaan terkai OVO? Kamu bisa kirim disini</Text>
          </View>
           <View style={css.imageOne}>
              <Image style={css.imageCard} source={index}/>
               <Text style={css.title}>Pusat Bantuan</Text>
              <Text style={css.content}>Punya kendala atau pertanyaan terkai OVO? Kamu bisa kirim disini</Text>
          </View>
        </View>

      </View>
    

    )
}

const css = StyleSheet.create({

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10
  },

  content: {
    fontSize: 13,
    color:'#6F6F6F',
    marginLeft: 10,
    marginTop: 10
  },

  imageCard: {
    width :150,
    height: 90,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  flexImage: {
    flexDirection:'row',
    justifyContent: 'space-around',
    marginTop:15,
    marginHorizontal: 10
  },

  imageOne: {
    backgroundColor: '#FFFFFF',
    elevation: 5,
    width:150,
    height:220,
    borderRadius: 20
  },

  flexView: {
    flexDirection:'column',
    marginTop: 15,
    marginLeft: 25,
  },

  textLeft: {
    fontSize: 17,
    fontWeight: 'bold'
  },

   textBotom: {
    fontSize: 12,
    color: '#777777',

  },
})

export default BottomComponent;

