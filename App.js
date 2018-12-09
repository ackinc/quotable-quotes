import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>QUOTABLE QUOTES</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  header: {
    backgroundColor: '#9EB2FF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  heading: {
    fontSize: 20,
  }
});
