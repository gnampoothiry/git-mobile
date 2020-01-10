import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import ShowCommitsScreen from './src/screens/ShowCommitsScreen'


const navigator = createStackNavigator({
  Index: IndexScreen,
  ShowCommits: ShowCommitsScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title:'Github App'
  }
});

export default createAppContainer(navigator);