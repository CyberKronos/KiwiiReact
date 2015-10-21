'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Navigator,
  TabBarIOS,
  StatusBarIOS
} = React;
var TabBar = require('./TabBar');
 
var KiwiiReact = React.createClass({
  renderScene: function(route, navigator) {
    var Component = route.component;
    return (
      <View style={styles.container}>
        <Component
          route={route}
          navigator={navigator}
          topNavigator={navigator} />
      </View>
      )
  },

  render: function() {
    // Set StatusBar with light contents to get better contrast
    StatusBarIOS.setStyle('default');

    return (
      <Navigator
        sceneStyle={styles.container}
        ref={(navigator) => { this.navigator = navigator; }}
        renderScene={this.renderScene}
        tintColor='#000000'
        barTintColor='#FFFFFF'
        titleTextColor='#000000'
        initialRoute={{
          title: 'React Native Boilerplate',
          component: TabBar,
        }} />
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
