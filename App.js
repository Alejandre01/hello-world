import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, BackHandler} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontsize: 50}}>Hello World! It is from IS657.</Text>
      <StatusBar style="auto" />
      <Button>Close</Button>
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

// Hello World 2023
