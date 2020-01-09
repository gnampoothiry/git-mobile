import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import ShowRepositoriesScreen from './src/screens/ShowRepositoriesScreen'


const navigator = createStackNavigator({
  Index: IndexScreen,
  ShowRepository: ShowRepositoriesScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title:'Github App'
  }
});

export default createAppContainer(navigator);