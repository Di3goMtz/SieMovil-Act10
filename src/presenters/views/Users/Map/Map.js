import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapScreen from '../../../../components/Map/Map';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;