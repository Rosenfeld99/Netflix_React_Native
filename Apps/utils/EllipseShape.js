// EllipseShape.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const EllipseShape = ({ width, height, color }) => {
  return (
    <View style={[styles.ellipse, { width, height, backgroundColor: color }]} />
  );
};

const styles = StyleSheet.create({
  ellipse: {
    borderRadius: 9999, // Large value to make the corners rounded
    transform: [{ scaleX: 2 }], // Stretch the circle to make an ellipse
  },
});

export default EllipseShape;
