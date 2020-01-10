import React from 'react';
import {View , Text , StyleSheet , Button , TouchableOpacity , FlatList} from 'react-native';
import useResults from '../hooks/useResults';

const IndexScreen = ({navigation}) => {
    const [getRepositories , results , errorMessage] = useResults();

    return <View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity onPress={()=> getRepositories() }>
                        <Text style={styles.button}>Get Repositories</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        style={styles.viewStyle}
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                        data={results.data}
                        keyExtractor= {(result) => result.node_id} 
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity 
                                    onPress={()=>{
                                        navigation.navigate('ShowCommits' , {repository:item.name})
                                        console.log('clicked')
                                    }}
                                >
                                    <Text >{item.name}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>    
}

const styles = StyleSheet.create({
    buttonStyle:{
        flexDirection:'column',
        alignContent:'space-around'
    },
    button: {
        backgroundColor: 'brown',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
      },
    viewStyle:{
        flexDirection:'column',
        alignContent:'space-around',
        paddingVertical: 20,
        paddingHorizontal:20,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'gray',
        backgroundColor:'grey'
    }
});

export default IndexScreen;