import React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SideMenu from 'react-native-side-menu';
// import { ScheduleScreen }  from '../screens';
// import { HeaderLogo } from '../components';
import {View} from 'react-native';
import config from '../config';

export default

StackNavigator({
  MyTab: {
    screen: TabNavigator (
      {
        Schedule: {
          name: 'Schedule',
          screen: View,
        },
        Speakers: {
          name: 'Speakers',
          screen: View,
        },
        Map: {
          name: 'Map',
          screen: View,
        },
        About: {
          name: 'About',
          screen: View,
        }
      },
      {
        initialRouteName: 'Schedule',
        navigationOptions: ({ navigation }) => ({
          gesturesEnabled: false,
          headerStyle: {
            backgroundColor: config.PRIMARY_BG_COLOR,
            borderBottomColor: config.PRIMARY_BG_COLOR,
            borderBottomWidth: 5
          },
          headerTintColor: config.PRIMARY_TEXT_COLOR,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Schedule') {
              iconName = `ios-calendar${focused ? '' : '-outline'}`;
            } else if (routeName === 'Speakers') {
              iconName = `ios-contacts${focused ? '' : '-outline'}`;
            } else if (routeName === 'Map') {
              iconName = `ios-map${focused ? '' : '-outline'}`;
            } else if (routeName === 'About') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            }
            return <Ionicons name={iconName} size={25} color={tintColor} />;
          }
        }),
        tabBarOptions: {
          activeTintColor: config.SECONDARY_BG_COLOR,
          inactiveTintColor: config.PRIMARY_TEXT_COLOR,
          activeBackgroundColor: config.PRIMARY_BG_COLOR,
          inactiveBackgroundColor: config.PRIMARY_BG_COLOR
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
      }
    ),
    navigationOptions: { title: 'Conference App' }
  }
})
