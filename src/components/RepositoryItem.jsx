import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props} />
        <RepositoryStats {...props} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5
    },
})

export default RepositoryItem