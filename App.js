import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeaderComponent from './components/Header';
import UrlInputFormComponent from './components/UrlInputForm';
import HistoryComponent from './components/History';

export default class App extends React.Component {
  state = {
    history: ['https://pastebin.com/raw/r8ayVY31'],
  };

  addUrlToHistory = url => {
    this.setState(({ history: oldHistory }) => ({ history: [url].concat(oldHistory) }));
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <UrlInputFormComponent handleSubmit={this.addUrlToHistory} />
        <HistoryComponent history={this.state.history} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
