import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HistoryComponent({ history }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>RECENT HISTORY</Text>
      </View>

      <View style={styles.centered}>
        {history.map(item => <View key={item}><Text>{item}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },
  heading: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
  }
});
