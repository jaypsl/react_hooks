
import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    
    const fetchResponse = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        // this.setState({resources : response.data});
        setResources(response.data);
    }

    useEffect(()=> {
        fetchResponse(resource);
    }, [resource]);
    return resources;
}

export default useResources;