'use strict';

var React = require('react-native');
var {StyleSheet} = React;

var ExploreTabStyles = StyleSheet.create({
  tabContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'grey',
    marginTop: 100
  },
  tabText: {
    color: 'black',
  },
});

module.exports = ExploreTabStyles
