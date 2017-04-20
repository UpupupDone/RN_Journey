/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

 var HelloWorld = React.createClass({
     render: function() {
         return (
             <View style = {[styles.height160, styles.row]}>
                  <View style = {[styles.height160, styles.part_1_left]}>
                      <Text style = {[styles.font30,]}>1</Text>
                  </View>
                  <View style = {[styles.height160, styles.part_1_right]}>
                      <Text style = {[styles.font30,]}>2</Text>
                  </View>
             </View>
         );
     }
});

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    font30: {
        fontSize: 90,
    },
    height160: {
        height: 160,
    },
    hei
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
