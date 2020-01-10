import React, {useState , useEffect} from 'react';
import {View , Text , StyleSheet , FlatList , TouchableOpacity } from 'react-native';
import {li, ListItem } from 'react-native-elements'
import {withNavigation} from 'react-navigation';
import githubCommit from '../api/github-commits';

const ShowCommitsScreen = ({navigation}) => {

    const repository = 'git-mobile';
    const [result , setResult] = useState(null);

    const getCommits = async (repository) => {
        const commits = await githubCommit.get(`/${repository}/commits?sha=commits`);
        setResult(commits);
    }

    useEffect(() => {
        getCommits(repository);
    } , []);

    if(!result){
        return null;
    }
    
    return <View>
            <FlatList
                style={styles.viewStyle}
                data={result.data}
                keyExtractor= {(result) => result.sha} 
                renderItem={({item}) => {
                    return(
                        <ListItem
                            containerStyle={{backgroundColor:'silver' , borderRadius:10 , borderColor:'black', borderWidth:2 ,marginHorizontal:5 , marginTop:2}}
                            contentContainerStyle
                            title={item.commit.author.name}
                            titleStyle={{ color: 'black', fontWeight: 'bold' }}
                            subtitle= {
                                <View>
                                    <Text>Commit:{item.sha}}</Text>
                                    <Text>{item.commit.message}</Text>
                                </View>
                            }   
                            bottomDivider
                        >
                        </ListItem>

                    )
                }}
            />
    </View>
}

const styles = StyleSheet.create({});
export default ShowCommitsScreen;