// scrollViewWithDatePicker.js
// Tejas' iOS Playground
// Created on 03/04/2016

'use strict';

import React, {
  ScrollView,
  Animated,
  DatePickerIOS,
  Text,
  StyleSheet,
  TouchableHighlight,
  NativeModules
} from 'react-native';

let DismissViewControllerManager = NativeModules.DismissViewControllerManager;
let DatePickerCell = require('./DatePickerCell');

let scrollViewWithDatePicker = React.createClass({
  render: function() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyles}>
        <Text style={styles.text}>Can you see this?</Text>
        <DatePickerCell />
        <TouchableHighlight
          onPress={this._onPress}>
            <Text style={styles.goBackText}>Go Back</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  },
  _onPress: function() {
    DismissViewControllerManager.goBack();
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1,
    paddingTop: 50
  },
  contentContainerStyles: {
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  text: {
    fontSize: 15
  },
  goBackText: {
    fontSize: 20
  },
});

module.exports = scrollViewWithDatePicker;
