import React,{useState, useEffect} from 'react';
import axios from 'axios';

const List = () => {
    const [resources, setResources] = useState([]);

    const fetchResponse = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
        this.setState({resources : response.data});
    }

        return (
            <div>
                {resources.length}
            </div>
        );
}

export default List;