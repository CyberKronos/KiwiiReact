'use strict';

var React = require('react-native');
var Carousel = require('react-native-looped-carousel');
var Dimensions = require('Dimensions');
var Followers = require('../SharedViews/Followers');
var Following = require('../SharedViews/Following');
var styles = require('./css/styles');

var {
  ScrollView,
  NavigationIOS,
  SegmentedControlIOS,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
} = React;

var ProfileTab = React.createClass({
  _goToFollowers: function() {
    var route = {
      component: Followers,
      title: 'Followers',
      passProps: {},
    };
    this.props.navigator.push(route);
  },
  _goToFollowing: function() {
    var route = {
      component: Following,
      title: 'Following',
      passProps: {},
    };
    this.props.navigator.push(route);
  },
  getInitialState: function() {
    return {
      selectedTab: 'Lists',
    }
  },
  render: function() {
    return (
      <ScrollView
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        style={{height: 300,}}>

        <View>
          <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
            <Image
              style={{height: 75, width: 75, borderRadius: 4}}
              source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100&fm=png'}} />
            <View style={{paddingHorizontal: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Yvonne Tang</Text>
              <Text style={{fontSize: 12, paddingVertical: 12}}>@yvonnetang</Text>
            </View>
          </View>

          <View style={{paddingHorizontal: 10, paddingVertical: 4, flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, borderTopWidth: 2, backgroundColor: '#f5f5f5', borderColor: '#dddddd'}}>  
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>0</Text>
              <Text style={{fontSize: 12,}}>Lists</Text>
            </View>
            <View>  
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>0</Text>
              <Text style={{fontSize: 12,}}>Cards</Text>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={this._goToFollowers}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>0</Text>
              </TouchableWithoutFeedback>
              <Text style={{fontSize: 12,}}>Followers</Text>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={this._goToFollowing}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>0</Text>
              </TouchableWithoutFeedback>
              <Text style={{fontSize: 12,}}>Following</Text>
            </View>
          </View>
        </View>

        <View>
          <SegmentedControlIOS
              style={{padding: 20,}}
              values={['Lists', 'Cards']}
              selectedIndex={0}
              tintColor='#FF1D23'
              onValueChange={(val) => {
                this.setState({
                  selectedTab: val
                })
              }} />
        </View>

        {this.renderSegmentedViews()}

      </ScrollView>
    );
  },
  renderSegmentedViews: function() {
    if (this.state.selectedTab === 'Lists') {
      return (
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
        </View>
      )
    } else if (this.state.selectedTab === 'Cards') {
      return (
        <View>
          <Text>bye</Text>
        </View>
      )
    }
  },
});

module.exports = ProfileTab;
