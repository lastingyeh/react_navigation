/* @flow */
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import type { Children } from 'react';

const SampleText = ({ children }: { children?: Children }) => (
  <Text style={styles.sampleText}>{children}</Text>
);

export default SampleText;

const styles = {
  sampleText: {
    margin: 14
  }
};
