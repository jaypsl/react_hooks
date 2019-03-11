import React from 'react';
import useResources from './useResource';


const List = ({resource}) => {
    const resources = useResources(resource);

        return (
            <ul>
                {resources.map(data => <li key={data.id}>{data.title}</li>)}
            </ul>
        );
}

export default List;