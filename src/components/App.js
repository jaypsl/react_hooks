import React,{useState} from 'react';
import List from './List';

const App = () => {
    // this.state = {resource : 'posts'};
    const [resource, setResource] = useState('posts');

    return(
        <div>
            <div>
            <button onClick={()=>setResource('posts')}>Posts</button>
            <button onClick={()=>setResource('todos')}>Todos</button>
            </div>
            <List resource={resource}/>
        </div>
    )
}

export default App;