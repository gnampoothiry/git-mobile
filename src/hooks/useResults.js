
import React , {useState , useEffect} from 'react';
import github from '../api/github';



export default  () => {
    const [results , setResults] = useState([]);
    const [errorMessage , setErrorMessage] = useState('');
    const getRepositories = async () => {
        try{
            console.log('get repositories called')
            const repositories = await github.get();
            console.log(repositories.data);
            setResults(repositories);
        }
        catch(err){
            setErrorMessage('Something went wrong');
        }
    }
    
    // useEffect(()=> {
    //     performSearch('pasta');
    // },[]);

    return [getRepositories , results , errorMessage];
}