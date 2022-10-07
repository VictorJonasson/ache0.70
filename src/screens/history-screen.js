import {Layout, Text, useTheme} from '@ui-kitten/components';
import React from 'react';
import HistoryCard from '../components/history-components/history-card';
import {ScrollView, StyleSheet} from 'react-native';

// const theme = useTheme();

const HistoryScreen = () => (
  <Layout style={styles.LayoutStyle}>
    <ScrollView style={styles.scrollView}>
      <HistoryCard />
    </ScrollView>
  </Layout>
);

export default HistoryScreen;

const styles = StyleSheet.create({
  LayoutStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '90%',
  },
});