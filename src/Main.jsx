import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./components/RepositoryList";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-native';

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<Text>Working on it</Text>} />
                <Route path='*' element={<Text>Page not found</Text>} />
            </Routes>
        </View>
    )
};

export default Main
