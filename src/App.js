/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';
import HeaderComponent from './components/HeaderComponent.js'
import NavbarComponent from './components/NavbarComponent.js'
import CenterComponent from './components/CenterComponent.js'
import ContentComponent from './components/ContentComponent.js'
import PromoComponent from './components/PromoComponent.js'
import GuideComponent from './components/GuideComponent.js'
import BottomComponent from './components/BottomComponent.js'
import NavBotComponent from './components/NavBotComponent.js'
// import icons from './icons8-bell-100.png'


const App = () => {
  return (
    <View>

      <NavbarComponent/>
      <NavBotComponent/>

      <ScrollView>
      <HeaderComponent/>
      <CenterComponent/>
      <ContentComponent/>     
      <PromoComponent/>
      <GuideComponent/>
      <BottomComponent/>
      </ScrollView>
      
     </View>
    )
}



export default App;

