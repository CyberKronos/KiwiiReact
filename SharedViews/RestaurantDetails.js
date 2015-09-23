'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Image,
  Text,
  View,
} = React;
// var styles = require('./css/styles');
var MapDetails = require('../SharedViews/MapDetails');
var Button = require('react-native-button');

var RestaurantDetails = React.createClass({
  _goToMaps: function() {
    var route = {
      component: MapDetails,
      title: 'Map Details',
      passProps: {},
    };
    this.props.navigator.push(route);
  },
  render: function() {
    return (
      <ScrollView
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        style={{height: 300,}}>
      
        <View style={{height:300}}>
          <Image 
            style={{ resizeMode:Image.resizeMode.ratio, flex: 1 }}
            source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97300&w=300&h=300&fm=png'}}>
              <View style={{backgroundColor: 'rgba(0,0,0,0)', flex: 1, justifyContent: 'flex-end', padding: 10}}>
                <Text style={{fontSize: 18, backgroundColor: 'rgba(0,0,0,0)', color: 'white'}}>Green Basil Thai Restaurant</Text>
                <Text style={{fontSize: 14, backgroundColor: 'rgba(0,0,0,0)', color: 'white'}}>Thai</Text>
                <Text style={{fontSize: 14, backgroundColor: 'rgba(0,0,0,0)', color: 'white'}}>Price: $$ (Moderate)</Text>
                <Text style={{fontSize: 14, backgroundColor: 'rgba(0,0,0,0)', color: 'white'}}>Rating: 6/10</Text>
                <Text style={{fontSize: 14, backgroundColor: 'rgba(0,0,0,0)', color: 'white', marginVertical: 10}}>Open until 7:00pm</Text>
              </View>
          </Image>
        </View>

        <View style={{flex: 1, flexDirection: 'row', padding: 10, borderColor: '#dddddd', borderBottomWidth: 1}}>
          <Image
            style={{height: 40, width: 40, borderRadius: 4}}
            source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100&fm=png'}} />
          <View style={{paddingLeft: 10,}}>
            <Text>Yvonne Tang</Text>
            <Text style={{marginTop: 6}}>09/12/2015</Text>
          </View>
        </View>

        <View style={{padding: 10}}>
          <Text>Lunch for under $10. The pad thai is pretty large with so so quality.</Text>
        </View>

        <View style={{padding: 10, backgroundColor: '#f5f5f5', borderColor: '#dddddd', borderTopWidth: 1, borderBottomWidth: 1}}>
          <Text>Address</Text>
        </View>
        <View style={{padding: 10}}>
          <Text>4623 Kingsway (at McKay Ave.)</Text>
          <Text>Burnaby BC V5H 2B3</Text>
        </View>
        
        <TouchableHighlight onPress={this._goToMaps}>
          <View style={{height:200}}>
            <Image 
              style={{ resizeMode:Image.resizeMode.ratio, flex: 1 }}
              source={{uri: 'https://api.mapbox.com/v4/mapbox.streets/pin-l-restaurant+ffa300(-73.975,40.767)/-73.975,40.767,15/300x200.png?access_token=pk.eyJ1IjoiY3liZXJrcm9ub3MiLCJhIjoia3RMOFJ5byJ9.Nvqs957NLHa4w5eV1IcjmQ'}} />
          </View>
        </TouchableHighlight>
        
        <View style={{padding: 10, backgroundColor: '#f5f5f5', borderColor: '#dddddd', borderTopWidth: 1, borderBottomWidth: 1}}>
          <Text>Details</Text>
        </View>

        <View style={{padding: 10}}>
          <View style={{flex: 1, flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{fontWeight: 'bold'}}>Phone</Text>
            <Text style={{marginLeft: 4}}>(604) 439-1234</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{fontWeight: 'bold'}}>Website</Text>
            <Text style={{marginLeft: 4}}>www.test.com</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{fontWeight: 'bold'}}>Credit Cards</Text>
            <Text style={{marginLeft: 4}}>Yes</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{fontWeight: 'bold'}}>Outdoor Seating</Text>
            <Text style={{marginLeft: 4}}>No</Text>
          </View>
        </View>

        <Button style={{color: '#ffffff', backgroundColor: '#ffa300', marginHorizontal: 10, marginBottom: 10, padding: 14,}} onPress={this._goToCards}>
          Menu
        </Button>

      </ScrollView>
    );
  }
});

module.exports = RestaurantDetails;
