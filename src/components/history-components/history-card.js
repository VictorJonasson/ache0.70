import React from 'react';
import {Avatar, Card, Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';

let date = new Date().getUTCFullYear();

const CardStyle = props => (
  <Card style={styles.card}>
    <View {...props}>
      <Avatar source={require('../../assets/images/aches/anxiety1.png')} />
      <Text category="s1">{date}</Text>
    </View>
  </Card>
);

const HistoryCard = () => {
  const views = [];

  for (let i = 0; i < 25; i++) {
    views.push(
      <View key={i}>
        <CardStyle styles />
      </View>,
    );
  }
  return views;
};
export default HistoryCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: '#18203B',
  },
});
