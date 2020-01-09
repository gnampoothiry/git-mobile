import React from 'react';
import {View , Text , Button ,Image , StyleSheet , FlatList , TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'

const ShowRepositoriesScreen = ({navigation}) => {
    const repositories = navigation.getParam('repositories');
    return <View>
        <Text>Repositories</Text>
    </View>
}

const styles = StyleSheet.create({});
export default ShowRepositoriesScreen;