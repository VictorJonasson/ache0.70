import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {DailyAcheScreen} from '../screens/daily-ache-screen';
import {ProfileScreen} from '../screens/profile-screen';
import {HistoryScreen} from '../screens/history-screen';
import {
  BottomTabCalendarIcon,
  BottomTabAcheIcon,
  BottomTabUserIcon,
} from '../components/icon-helper/icon-provider';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="" icon={BottomTabAcheIcon} />
    <BottomNavigationTab title="" icon={BottomTabUserIcon} />
    <BottomNavigationTab title="" icon={BottomTabCalendarIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen
      options={{headerShown: false}}
      name="DailyAcheScreen"
      component={DailyAcheScreen}
    />
    <Screen
      options={{headerShown: false}}
      name="ProfileScreen"
      component={ProfileScreen}
    />
    <Screen
      options={{headerShown: false}}
      name="CalendarScreen"
      component={HistoryScreen}
    />
  </Navigator>
);

export const BottomTabNavigator = () => <TabNavigator />;
