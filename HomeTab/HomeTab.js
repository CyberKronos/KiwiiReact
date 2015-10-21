'use strict';

var React = require('react-native');
var Carousel = require('react-native-looped-carousel');
var Dimensions = require('Dimensions');

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;
var styles = require('./css/styles');

var HomeTab = React.createClass({

  render: function() {
    // should change to ListView instead
    return (
      <ScrollView
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}>

        <View style={{flex: 1,}}>
          <Carousel delay={10000000} style={{height: 250}}>
            <View style={{backgroundColor:'blue', flex: 1}}>
              <View style={{padding: 10, flex: 1, justifyContent: 'flex-end',}}>
                <Text style={{color: '#FFFFFF', fontSize: 26, padding: 2,}}>Kiwii Guides</Text>
                <Text style={{color: '#FFFFFF', fontSize: 16, padding: 2,}}>Recently Reviewed Restaurants</Text>
                <Text style={{color: '#FFFFFF', fontSize: 16, padding: 2,}}>5 Restaurants</Text>
              </View>
            </View>
            <View style={{backgroundColor:'red', flex: 1}}/>
            <View style={{backgroundColor:'black', flex: 1}}/>
          </Carousel>

          <Carousel delay={10000000} style={{height: 250}}>
            <View style={{backgroundColor:'#BADA55', flex: 1}}>
              <View style={{padding: 10, flex: 1, justifyContent: 'flex-end',}}>
                <Text style={{color: '#FFFFFF', fontSize: 26, padding: 2,}}>Japanese</Text>
                <Text style={{color: '#FFFFFF', fontSize: 16, padding: 2,}}>Popular Cuisine List</Text>
                <Text style={{color: '#FFFFFF', fontSize: 16, padding: 2,}}>10 Restaurants</Text>
              </View>
            </View>
            <View style={{backgroundColor:'red', flex: 1}}/>
            <View style={{backgroundColor:'blue', flex: 1}}/>
          </Carousel>

          <Carousel delay={10000000} style={{height: 250}}>
            <View style={{backgroundColor:'orange', flex: 1}}>
              <View style={{padding: 10, flex: 1, justifyContent: 'flex-end',}}>
                <Text style={{color: '#FFFFFF', fontSize: 26, padding: 2,}}>French</Text>
                <Text style={{color: '#FFFFFF', fontSize: 16, padding: 2,}}>Popular Cuisine List</Text>
                <Text style={{color: '#FFFFFF', fontSize: 16, padding: 2,}}>2 Restaurants</Text>
              </View>
            </View>
            <View style={{backgroundColor:'red', flex: 1}}/>
            <View style={{backgroundColor:'blue', flex: 1}}/>
          </Carousel>

          <View>
            <Carousel delay={10000000} style={{height: 250}}>
              <View style={{backgroundColor:'grey', flex: 1}}/>
              <View style={{backgroundColor:'red', flex: 1}}/>
              <View style={{backgroundColor:'blue', flex: 1}}/>
            </Carousel>
            <View style={{height: 80, padding: 10, justifyContent: 'space-around',}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                <Text style={{fontWeight: 'bold'}}>Name</Text>
                <Text>10/10 (567)</Text>
              </View>
              <Text>Open Till 10pm</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                <Text>Category · 200 Photos · 100 Reviews</Text>
                <Text>Logo</Text>
              </View>
            </View>
          </View>

          <View>
            <Carousel delay={10000000} style={{height: 250}}>
              <View style={{backgroundColor:'teal', flex: 1}}/>
              <View style={{backgroundColor:'red', flex: 1}}/>
              <View style={{backgroundColor:'blue', flex: 1}}/>
            </Carousel>
            <View style={{height: 80, padding: 10, justifyContent: 'space-around',}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                <Text style={{fontWeight: 'bold'}}>Name</Text>
                <Text>10/10 (567)</Text>
              </View>
              <Text>Open Till 10pm</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                <Text>Category · 200 Photos · 100 Reviews</Text>
                <Text>Logo</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
});

module.exports = HomeTab;
