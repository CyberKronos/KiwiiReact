'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;
var HomeTab = require('./HomeTab/HomeTab');
var ExploreTab = require('./ExploreTab/ExploreTab');
var CardTab = require('./CardTab/CardTab');
var ActivityTab = require('./ActivityTab/ActivityTab');
var ProfileTab = require('./ProfileTab/ProfileTab');

var { TabBarIOS, } = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;

var TabBar = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'exploreTab',
    };
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor="orange">

        <TabBarItemIOS
          name="Home"
          iconName={'fontawesome|home'}
          title={''}
          iconSize={32}
          accessibilityLabel="Home Tab"
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'homeTab',
            });
          }}>
          
          <HomeTab navigator={this.props.navigator} />
        </TabBarItemIOS>

        <TabBarItemIOS
          name="Explore"
          iconName={'fontawesome|compass'}
          title={''}
          iconSize={32}
          accessibilityLabel="Explore Tab"
          selected={this.state.selectedTab === 'exploreTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'exploreTab',
            });
          }}>
          
          <ExploreTab navigator={this.props.navigator} />
        </TabBarItemIOS>

        <TabBarItemIOS
          name="Create a Card"
          iconName={'ion|camera'}
          title={''}
          iconSize={32}
          accessibilityLabel="Card Tab"
          selected={this.state.selectedTab === 'cardTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'cardTab',
            });
          }}>
          
          <CardTab navigator={this.props.navigator} />
        </TabBarItemIOS>

        <TabBarItemIOS
          name="Activity Feed"
          iconName={'fontawesome|list-alt'}
          title={''}
          iconSize={32}
          accessibilityLabel="Activity Tab"
          selected={this.state.selectedTab === 'activityTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'activityTab',
            });
          }}>
          
          <ActivityTab navigator={this.props.navigator} />
        </TabBarItemIOS>

        <TabBarItemIOS
          name="Profile"
          iconName={'fontawesome|user'}
          title={''}
          iconSize={32}
          accessibilityLabel="Profile Tab"
          selected={this.state.selectedTab === 'profileTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'profileTab',
            });
          }}>
          
          <ProfileTab navigator={this.props.navigator} />
        </TabBarItemIOS>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = TabBar;
