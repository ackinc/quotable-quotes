import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class UrlInputForm extends React.Component {
  state = {
    value: '',
  }

  handleInputChange = value => {
    this.setState({ value });
  }

  handleSubmit = (e) => {
    // TODO: validate that input is a URL
    if (this.state.value) {
      this.props.handleSubmit(this.state.value.toLowerCase());
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter URL of quotes file here..."
            onChangeText={this.handleInputChange}
            value={this.state.value}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },
  inputContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
  }
});
