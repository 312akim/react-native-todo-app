import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [text, setText] = useState(true);

  const onPressHandler = (): void => {
    setText(!text);
  }

  return (
    <View style={styles.container}>
      <Text>{text.toString()}</Text>
      <Button title="Change Text" onPress={() => onPressHandler()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;