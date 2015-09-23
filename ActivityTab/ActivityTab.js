'use strict';

var React = require('react-native');
var {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
} = React;
var styles = require('./css/styles');

var ActivityTab = React.createClass({
  render: function() {
    return (
      <View style={{marginTop: 70,}}>
        <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
          <Image
            style={{height: 40, width: 40, borderRadius: 4}}
            source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100&fm=png'}} />
          <View style={{paddingLeft: 10, flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Yvonne Tang</Text>
              <Text>2 hours ago</Text>
            </View>
            <Text style={{marginTop: 6}}>Grean Basil Thai Restaurant</Text>
          </View>
        </View>
        <View style={{height:300}} >
          <Image 
            source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97300&w=300&h=300&fm=png'}} 
            style={{ resizeMode:Image.resizeMode.ratio, flex:1 }} />
        </View>
      </View>
    );
  }
});

module.exports = ActivityTab;
