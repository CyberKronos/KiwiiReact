'use strict';

import React, { AppRegistry, StyleSheet, Text, Image, View, Animated, Component, PanResponder, TouchableHighlight } from 'react-native';
import clamp from 'clamp';

const People = [
  'red',
  'green',
  'blue',
  'purple',
  'orange',
]
var RestaurantDetails = require('../SharedViews/RestaurantDetails');
var LoadingOverlay = require('../Widgets/LoadingOverlay');

var { Icon, } = require('react-native-icons');
var Button = require('react-native-button');

var SWIPE_THRESHOLD = 120;

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      enter: new Animated.Value(0.5),
      person: People[0],
    }
  }

  _goToRestaurantDetails() {
    var route = {
      component: RestaurantDetails,
      title: 'Restaurant Details',
      passProps: {},
    };
    this.props.navigator.push(route);
  }

  _goToNextPerson() {
    let currentPersonIdx = People.indexOf(this.state.person);
    let newIdx = currentPersonIdx + 1;

    this.setState({
      person: People[newIdx > People.length - 1 ? 0 : newIdx]
    });
  }

  componentDidMount() {
    this._animateEntrance();
  }

  _animateEntrance() {
    Animated.spring(
      this.state.enter,
      { toValue: 1, friction: 8 }
    ).start();
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        var velocity;

        if (vx >= 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1;
        }

        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
          Animated.decay(this.state.pan, {
            velocity: {x: velocity, y: vy},
            deceleration: 0.98
          }).start(this._resetState.bind(this))
        } else {
          Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 4
          }).start()
        } 
      }
    })
  }

  _resetState() {
    this.state.pan.setValue({x: 0, y: 0});
    this.state.enter.setValue(0);
    this._goToNextPerson();
    this._animateEntrance();
  }

  render() {
    let { pan, enter, } = this.state;

    let [translateX, translateY] = [pan.x, pan.y];

    let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]});
    let opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5]})
    let scale = enter;

    let animatedCardStyles = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};

    let yupOpacity = pan.x.interpolate({inputRange: [0, 150], outputRange: [0, 1]});
    let yupScale = pan.x.interpolate({inputRange: [0, 150], outputRange: [0.5, 1], extrapolate: 'clamp'});
    let animatedYupStyles = {transform: [{scale: yupScale}], opacity: yupOpacity}

    let nopeOpacity = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0]});
    let nopeScale = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0.5], extrapolate: 'clamp'});
    let animatedNopeStyles = {transform: [{scale: nopeScale}], opacity: nopeOpacity}

    return (
      <View style={styles.container}>
        <View style={styles.container}>

          

          { /* It doesn't matter where we put this component */ }
          { /* <LoadingOverlay isVisible={true} /> */ }

        </View>
        <Animated.View style={[styles.card, animatedCardStyles,]} {...this._panResponder.panHandlers}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 6,}}>
            <Text>Category</Text>
            <View style={{flexDirection: 'row',}}>
              <Icon
                name='fontawesome|car'
                size={15}
                color='#ffa300'
                style={{height: 15, width: 15, marginHorizontal: 4}} />
              <Text>18.2 km</Text>
            </View>
          </View>
          <View>
            <TouchableHighlight onPress={this._goToRestaurantDetails}>
              <Image
                style={{height: 300, flex: 1}}
                source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=200&h=200&fm=png'}} />
            </TouchableHighlight>
            <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent'}}>
              <View style={{alignItems: 'center', borderColor: 'black', borderWidth: 1, flex: 1,}}>
                <Icon
                  name='fontawesome|phone'
                  size={25}
                  color='#ffa300'
                  style={{height: 25, width: 25, margin: 4}} />
                <Text>
                  Call
                </Text>
              </View>
              <View style={{alignItems: 'center', borderColor: 'black', borderWidth: 1, flex: 1}}>
                <Icon
                  name='fontawesome|map'
                  size={25}
                  color='#ffa300'
                  style={{height: 25, width: 25, margin: 4}} />
                <Text>
                  Directions
                </Text>
              </View>
              <View style={{alignItems: 'center', borderColor: 'black', borderWidth: 1, flex: 1}}>
                <Icon
                  name='fontawesome|heart'
                  size={25}
                  color='#ffa300'
                  style={{height: 25, width: 25, margin: 4}} />
                <Text>
                  Like
                </Text>
              </View>
              <View style={{alignItems: 'center', borderColor: 'black', borderWidth: 1, flex: 1}}>
                <Icon
                  name='fontawesome|calendar-plus-o'
                  size={25}
                  color='#ffa300'
                  style={{height: 25, width: 25, margin: 4}} />
                <Text>
                  Reserve
                </Text>
              </View>
            </View>
          </View>
          <View style={{paddingVertical: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 6,}}>
              <Text>Name</Text>
              <View style={{flexDirection: 'row',}}>
                <Icon
                  name='fontawesome|star'
                  size={15}
                  color='#ffa300'
                  style={{height: 15, width: 15, marginHorizontal: 4}} />
                <Text>10/10</Text>
              </View>
            </View>
            <View style={{paddingHorizontal: 10, paddingVertical: 6,}}>
              <Text>Description</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 10, paddingVertical: 6,}}>
              <Text>295 Photos · 145 Reviews</Text>
              <Image
                style={{height: 20, width: 20, borderRadius: 4}}
                source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=20&h=20&fm=png'}} />
            </View>
          </View>
        </Animated.View>

        <Animated.View style={[styles.nope, animatedNopeStyles]}>
          <Text style={styles.nopeText}>Nope!</Text>
        </Animated.View>

        <Animated.View style={[styles.yup, animatedYupStyles]}>
          <Text style={styles.yupText}>Yup!</Text>
        </Animated.View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    position: 'absolute', 
    top: 75, 
    bottom: 10, 
    left: 10, 
    right: 10,
    borderRadius: 3,
    borderColor: '#000000',
    borderWidth: 1,
  },
  yup: {
    borderColor: 'green',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    bottom: 20,
    borderRadius: 5,
    right: 20,
  },
  yupText: {
    fontSize: 16,
    color: 'green',
  },
  nope: {
    borderColor: 'red',
    borderWidth: 2,
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    left: 20,
  },
  nopeText: {
    fontSize: 16,
    color: 'red',
  }
});

module.exports = Cards;