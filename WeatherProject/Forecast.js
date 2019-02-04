import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

class Forecast extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        </Text>

        <Text style={styles.bigText}>
          Temperature: {this.props.temp} °F
        </Text>

        <Text style={styles.tinyText}>
          Wind Speed: {this.props.wind} mi/h
        </Text>

        <Text style={styles.tinyText}>
          Humidity: {this.props.humidity} 
        </Text>

        <Text style={styles.tinyText}>
          Pressure: {this.props.pressure} hPa
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { height: 130 },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF"
  },

  tinyText: {
    flex: 3,
    fontSize: 8,
    textAlign: "center",
    color: "#FFFFFF"
  },

  mainText: { flex: 1, fontSize: 16, textAlign: "center", color: "#FFFFFF" }
});

export default Forecast;
