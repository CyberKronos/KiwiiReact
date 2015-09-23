'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
  StatusBarIOS
} = React;
var TabBar = require('./TabBar');
 
var KiwiiReact = React.createClass({
  render: function() {
    // Set StatusBar with light contents to get better contrast
    StatusBarIOS.setStyle('light-content');

    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'React Native Boilerplate',
          component: TabBar,
        }}
        tintColor="#FFFFFF"
        barTintColor="#ffa300"
        titleTextColor="#FFFFFF"
        translucent="true" />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    margin: 80,
    fontSize: 20,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('KiwiiReact', () => KiwiiReact);
