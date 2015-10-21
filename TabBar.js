'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  ActivityIndicatorIOS,
  NavigatorIOS,
  Navigator,
} = React;

var HomeTab = require('./HomeTab/HomeTab');
var SearchTab = require('./SearchTab/SearchTab');
var CardTab = require('./CardTab/CardTab');
var ActivityTab = require('./ActivityTab/ActivityTab');
var ProfileTab = require('./ProfileTab/ProfileTab');
var Cards = require('./SharedViews/Cards');
var LoadingOverlay = require('./Widgets/LoadingOverlay');

var { TabBarIOS, } = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;

var TabBar = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'homeTab',
    };
  },

  renderActionList: function() {
    console.log('hello world');
    return (
      <View style={styles.container}>
        <LoadingOverlay isVisible={true} />
      </View>
    );
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor="#FF1D23">

        <TabBarItemIOS
          name="Home"
          iconName={'fontawesome|home'}
          title={''}
          iconSize={32}
          accessibilityLabel="Home Tab"
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            if (this.state.selectedTab !== 'homeTab') {
              this.setState({
                selectedTab: 'homeTab'
              });
            } else if (this.state.selectedTab === 'homeTab') {
              this.refs.homeRef.popToTop();
            }
          }}>
          
          {this.renderHomeView()}
        </TabBarItemIOS>

        <TabBarItemIOS
          name="Search"
          iconName={'fontawesome|compass'}
          title={''}
          iconSize={32}
          accessibilityLabel="Search Tab"
          selected={this.state.selectedTab === 'searchTab'}
          onPress={() => {
            if (this.state.selectedTab !== 'searchTab') {
              this.setState({
                selectedTab: 'searchTab'
              });
            } else if (this.state.selectedTab === 'searchTab') {
              this.refs.searchRef.popToTop();
            }
          }}>

          
          {this.renderSearchView()}
        </TabBarItemIOS>

        <TabBarItemIOS
          name="Create a Card"
          iconName={'ion|camera'}
          title={''}
          iconSize={32}
          accessibilityLabel="Card Tab"
          selected={this.state.selectedTab === 'cardTab'}
          onPress={() => {
            this.renderActionList();
            console.log('asdfasdf');
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
            if (this.state.selectedTab !== 'activityTab') {
              this.setState({
                selectedTab: 'activityTab'
              });
            } else if (this.state.selectedTab === 'activityTab') {
              this.refs.activityRef.popToTop();
            }
          }}>
          
          {this.renderActivityView()}
        </TabBarItemIOS>

        <TabBarItemIOS
          name="Profile"
          iconName={'fontawesome|user'}
          title={''}
          iconSize={32}
          accessibilityLabel="Profile Tab"
          selected={this.state.selectedTab === 'profileTab'}
          onPress={() => {
            if (this.state.selectedTab !== 'profileTab') {
              this.setState({
                selectedTab: 'profileTab'
              });
            } else if (this.state.selectedTab === 'profileTab') {
              this.refs.profileRef.popToTop();
            }
          }}>
          
          {this.renderProfileView()}
        </TabBarItemIOS>
      </TabBarIOS>
    );
  },

  renderHomeView: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        tintColor='#000000'
        barTintColor='#FFFFFF'
        titleTextColor='#000000'
        ref='homeRef'
        initialRoute={{
          title: 'Home',
          component: HomeTab,
          backButtonTitle: ' ',
        }} />
        )
  },

  renderSearchView: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        tintColor='#000000'
        barTintColor='#FFFFFF'
        titleTextColor='#000000'
        ref='searchRef'
        initialRoute={{
          title: 'Search',
          component: SearchTab,
          backButtonTitle: ' ',
        }} />
        )
  },

  renderActivityView: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        tintColor='#000000'
        barTintColor='#FFFFFF'
        titleTextColor='#000000'
        ref='activityRef'
        initialRoute={{
          title: 'Activity Feed',
          component: ActivityTab,
          backButtonTitle: ' ',
        }} />
        )
  },

  renderProfileView: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        tintColor='#000000'
        barTintColor='#FFFFFF'
        titleTextColor='#000000'
        ref='profileRef'
        initialRoute={{
          title: 'Profile',
          component: ProfileTab,
          backButtonTitle: ' ',
        }} />
        )
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
