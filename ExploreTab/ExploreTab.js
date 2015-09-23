'use strict';

var React = require('react-native');
var {
  ScrollView,
  StyleSheet,
  SwitchIOS,
  PickerIOS,
  SliderIOS,
  TouchableWithoutFeedback,
  Text,
  View,
} = React;
var Cards = require('../SharedViews/Cards');
var styles = require('./css/styles');

var Button = require('react-native-button');

var PickerItemIOS = PickerIOS.Item;

var CAR_MAKES_AND_MODELS = {
  amc: {
    name: 'AMC',
    models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
  },
  alfa: {
    name: 'Alfa-Romeo',
    models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
  },
  aston: {
    name: 'Aston Martin',
    models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
  },
  audi: {
    name: 'Audi',
    models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
  },
  austin: {
    name: 'Austin',
    models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
  },
  borgward: {
    name: 'Borgward',
    models: ['Hansa', 'Isabella', 'P100'],
  },
  buick: {
    name: 'Buick',
    models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
             'Roadmaster', 'Skylark'],
  },
  cadillac: {
    name: 'Cadillac',
    models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
  },
  chevrolet: {
    name: 'Chevrolet',
    models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
             'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
  },
};

var ExploreTab = React.createClass({
  _goToCards: function() {
    var route = {
      component: Cards,
      title: 'Cards',
      passProps: {},
    };
    this.props.navigator.push(route);
  },

  getInitialState: function() {
    return {
      // cuisine dropdown
      carMake: 'cadillac',
      modelIndex: 3,
      // location slider
      locationDistanceValue: 0,
      // restaurants only switch
      colorTrueSwitchIsOn: true,
      colorFalseSwitchIsOn: false,
    };
  },

  render: function() {
    var make = CAR_MAKES_AND_MODELS[this.state.carMake];
    var selectionString = make.name + ' ' + make.models[this.state.modelIndex];
    return (
      <ScrollView
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        style={{height: 300,}}>
        
        <View style={{marginTop: 75, paddingHorizontal: 10}}> 
          <View>
            <Text>Choose a cuisine:</Text>
            <PickerIOS
              selectedValue={this.state.carMake}
              onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
              {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
                <PickerItemIOS
                  key={carMake}
                  value={carMake}
                  label={CAR_MAKES_AND_MODELS[carMake].name} />
                )
              )}
            </PickerIOS>
            <Text>Cuisine subtype:</Text>
            <PickerIOS
              selectedValue={this.state.modelIndex}
              key={this.state.carMake}
              onValueChange={(modelIndex) => this.setState({modelIndex})}>
              {CAR_MAKES_AND_MODELS[this.state.carMake].models.map(
                (modelName, modelIndex) => (
                  <PickerItemIOS
                    key={this.state.carmake + '_' + modelIndex}
                    value={modelIndex}
                    label={modelName} />
                ))
              }
            </PickerIOS>
            <Text>You selected: {selectionString}</Text>
          </View>

          <View>
            <Text>Location</Text>
          </View>

          <View>
            <Text>Distance</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
              <Text>Within a few blocks</Text>
              <Text>{this.state.locationDistanceValue} km</Text>
            </View>
            <SliderIOS
              onValueChange={(value) => this.setState({locationDistanceValue: value})} />
          </View>

          <View>
            <Text>Price</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
            <Text>Open restaurants only</Text>
            <SwitchIOS
              onValueChange={(value) => this.setState({colorFalseSwitchIsOn: value})}
              onTintColor="#00ff00"
              thumbTintColor="#0000ff"
              tintColor="#ff0000"
              value={this.state.colorFalseSwitchIsOn} />
          </View>

          <Button style={{color: '#ffffff', backgroundColor: '#ffa300', marginVertical: 10, paddingVertical: 14,}} onPress={this._goToCards}>
            Let's Eat!
          </Button>

        </View>

      </ScrollView>
    );
  }
});

module.exports = ExploreTab;
