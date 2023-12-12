import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import RepositoryItem from './RepositoryItem.jsx';
import axios from 'axios';

const RepositoryList = () => {
    const [repositories, setRepositories] = useState(null)

    const fetchRepositories = async () => {
        const response = await axios.get('http://192.168.0.81:5000/api/repositories');
        const json = response.data;
        setRepositories(json)
    };

    useEffect(() => {
        fetchRepositories()
    }, [])

    const repositoriesNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={repositoriesNodes}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )}
        >
        </FlatList>
    )
}

export default RepositoryList
