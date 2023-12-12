import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./components/RepositoryList";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-native';
import SignIn from "./pages/Signin";
import Login from "./pages/Login";

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Text>Page not found</Text>} />
            </Routes>
        </View>
    )
};

export default Main
