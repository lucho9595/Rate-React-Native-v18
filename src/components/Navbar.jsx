import React from "react";
import { ScrollView, StyleSheet, View } from 'react-native';
import StyledText from "./StyleText";
import Constants from 'expo-constants';
import theme from "../theme";
import { Link, useLocation } from "react-router-native";
import { TouchableWithoutFeedback } from "react-native";

const AppNavbar = ({ children, to }) => {
    const { pathname } = useLocation();

    const active = pathname === to;

    const textStyle = [
        styles.text,
        active && styles.active
    ];

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyle}>
                {children}
            </StyledText>
        </Link>
    )
};

const Navbar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppNavbar to='/'>MyApp</AppNavbar>
                <AppNavbar to='/signin'>SignIn</AppNavbar>
                <AppNavbar to='/login'>Login</AppNavbar>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.textPrimary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    scroll: {
        paddingBottom: 15
    },
    text: {
        color: theme.navBar.textSecondary,
        paddingHorizontal: 5
    },
    active: {
        color: theme.navBar.textPrimary,
    }
});

export default Navbar;