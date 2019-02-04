/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View , TextInput, ImageBackground } from 'react-native';
import Forecast from './Forecast'
import OpenWeatherMap from './open_weather_map'

class WeatherProject extends Component {

  constructor(props) {
    super(props);

    this.state = {zip: '', forecast: null}
  }

  _handleTextChange = event => {
      let zip = event.nativeEvent.text;
      OpenWeatherMap.fetchForecast(zip).then(forecast => {
        this.setState({ forecast: forecast });
      });
  }

  render() {
    let content = null;

    if (this.state.forecast !== null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
          humidity={this.state.forecast.humidity}
          wind={this.state.forecast.wind}
          pressure={this.state.forecast.pressure}
        />
      );
    }

    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require("./flowers.png")}
          resizeMode="cover"
          style={styles.backdrop}>

            <View style={styles.overlay}>
              <View style={styles.row}>
                <Text style={styles.mainText}>
                  Current Weather for
                </Text>

                <View style={styles.zipContainer}>

                  <TextInput
                    style={[styles.zipCode, styles.mainText]}
                    onSubmitEditing={this._handleTextChange}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
              
              {content}
            </View>
        </ImageBackground>
      </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
   input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  container: { flex: 1, alignItems: "center", paddingTop: 30, justifyContent: 'center', backgroundColor: '#F5FCFF' },

  backdrop: { flex: 1, flexDirection: "column" },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center",
    width: null,
    height: null,
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: { flex: 1, flexBasis: 1, width: 50, height: baseFontSize + 10 },
  mainText: { fontSize: baseFontSize, color: "#FFFFFF" }
});

export default WeatherProject;