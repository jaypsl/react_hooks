import React,{useState} from 'react';
import List from './List';
import UserList from './UserList';

const App = () => {
    // this.state = {resource : 'posts'};
    const [resource, setResource] = useState('posts');

    return(
       
        <div>  
            <h1>Hey there what is happening !!!</h1>
            <h2>dev branch added</h2>
            <h3>dev1 branch </h3>
            <UserList/>
            <div>
            <button onClick={()=>setResource('posts')}>Posts</button>
            <button onClick={()=>setResource('todos')}>Todos</button>
            </div>
            <List resource={resource}/>
        </div>
    )
}

export default App;