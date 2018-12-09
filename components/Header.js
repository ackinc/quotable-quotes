import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HeaderComponent(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>QUOTABLE QUOTES</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#9EB2FF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  heading: {
    fontSize: 20,
  },
});
