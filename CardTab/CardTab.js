'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  NativeModules: {
    UIImagePickerManager
  }
} = React;

var FeatureDetail = require('./FeatureDetail');
var TakePhoto = require('./TakePhoto');
var styles = require('./css/styles');

var { Icon, } = require('react-native-icons');

var CardTab = React.createClass({
  _takePhoto: function() {
    var detailRoute = {
      component: TakePhoto,
      title: 'Take Photo',
      passProps: {},
    };
    this.props.navigator.push(detailRoute);
  },
  getInitialState: function() {
    return {
      state: {
        avatarSource: null
      }
    }
  },
  uploadPhoto: function() {
    // Specify any or all of these keys
    var options = {
      title: 'Select Avatar',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...',
      takePhotoButtonHidden: false,
      chooseFromLibraryButtonTitle: 'Choose from Library...',
      chooseFromLibraryButtonHidden: false,
      returnBase64Image: false,
      returnIsVertical: false,
      quality: 0.2
    };

    UIImagePickerManager.showImagePicker(options, (responseType, response) => {
      console.log(`Response Type = ${responseType}`);

      if (responseType !== 'cancel') {
        let source;
        if (responseType === 'data') { // New photo taken OR passed returnBase64Image true -  response is the 64 bit encoded image data string
          source = {uri: 'data:image/jpeg;base64,' + response, isStatic: true};
        } else { // Selected from library - response is the URI to the local file asset
          source = {uri: response.replace('file://', ''), isStatic: true};
        }

        this.setState({
          avatarSource: source
        });
      }
    });
  },
  render: function() {
    return (
      <View style={{backgroundColor: '#ffa300', flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <View>
          <TouchableHighlight onPress={this._takePhoto}>
            <Icon
              name='ion|camera'
              size={100}
              color='#ffffff'
              style={{height: 100, width: 100}} />
          </TouchableHighlight>
          <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>Take Photo</Text>
        </View>

        <View>
          <TouchableOpacity onPress={this.uploadPhoto}>
            <View>
            { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
              <Icon
              name='ion|camera'
              size={100}
              color='#ffffff'
              style={{height: 100, width: 100}} />
            }
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
});

module.exports = CardTab;
