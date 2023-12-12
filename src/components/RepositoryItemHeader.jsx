import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import StyledText from "./StyleText";
import theme from "../theme";

const RepositoryItemHeader = ({ id, ownerAvatarUrl, fullName, description }) => {
    return (
        <View key={id} style={styles.container}>
            <View style={styles.info1}>
                <Image source={{ uri: ownerAvatarUrl }} style={styles.img} />
            </View>
            <View style={styles.info2}>
                <StyledText fontSize="subheading" fontWeight="bold" style={styles.title}>
                    {fullName}
                </StyledText>
                {description && <StyledText style={styles.description}>{description}</StyledText>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingBottom: 4,
    },
    info2: {
        flex: 1,
    },
    title: {
        padding: 4,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: "orange",
            default: "purple",
        }),
        color: theme.colors.white,
        alignSelf: "flex-start",
        borderRadius: 5,
    },
    description: {
        color: theme.colors.textSecondary,
        paddingTop: 5,
    },
    info1: {
        paddingRight: 10,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 4,
        resizeMode: "cover",
    },
});

export default RepositoryItemHeader;
