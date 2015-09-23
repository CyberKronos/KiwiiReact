'use strict';

var React = require('react-native');
var {StyleSheet} = React;

var CardTab = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'black',
    margin: 50,
  },
  image: {
    height: 50,
    width: 50,
  },
});

module.exports = CardTab
