import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import deals from './../assets/icons/deals.png';
import money from './../assets/icons/money.png';
import qrcode from './../assets/icons/qrcode.png';
import home from './../assets/icons/home.png';
import profile from './../assets/icons/profile.png';
// import icons from './icons8-bell-100.png';

const Icons = (props) => {
  return (
    <View>
      <View style={css.positionIcon}>  
          <Image style={css.icon} source={props.icon}/>
      </View>

      <Text style={css.name}>{props.name}</Text>
    </View>
  )
}

const NavBotComponent = () => {
  return (
      <View style={css.navPosition}>
      <View style={css.header}>
      <View style={css.navBot}>
      <Icons icon={home} name="Home" />
      <Icons icon={deals} name="Deals" />
        <View style={css.iconCenter}>
          <Image source={qrcode} style={{width:25, height:25, top:8}} />
        <Text style={css.scan}>Scan</Text>
        </View>
      <Icons icon={money} name="Finance" />
      <Icons icon={profile} name="Profil" />
      </View>

      </View>
      </View>
    

    )
}

const css = StyleSheet.create({

  scan: {
     fontSize: 13,
     top:20,
    color: '#89888D',
    textAlign: 'center'
  },

  name: {
    fontSize: 10,
    color: '#89888D',
    textAlign: 'center'
  },

  navPosition: {
    position: 'absolute',
    top: 560,
    // left: 10,
    // width:360,


    // alignSelf: 'column-reverse'

  },

  iconCenter: {
    backgroundColor:'#4123C3',
    width: 50,
    height:50,
    alignItems: 'center',
    // top:10,
    justifyContent: 'center',
    borderRadius: 50,
    bottom: 20

  },

  header : {
    // alignSelf: 'stretch',
    backgroundColor:'#FFFFFF',
    width: 360,
    // height:,
    // borderWidth: 1,
    elevation: 10,
  },

  navBot:{
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 3
  },

  icon: {
    width:27,
    height:27,
  },

  positionIcon: {
    // flexDirection:'row-reverse'
    // justifyContent: 'center',
    alignItems: 'center'
  }


})

export default NavBotComponent;

