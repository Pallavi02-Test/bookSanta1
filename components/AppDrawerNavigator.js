import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../Screen/SettingScreen';
import MyDonationScreen from '../Screen/MyDonationScreen';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    MyDonations : {
      screen : MyDonationScreen
    },
    Setting:{
      screen:SettingScreen
    }
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })