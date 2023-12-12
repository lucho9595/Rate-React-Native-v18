import React from "react";
import { View } from "react-native";
import StyledText from "./StyleText";

const RepositoryStats = (props) => {

    const parseThousands = value => {
        return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <StyledText align='center' fontWeight='bold'>reviewCount</StyledText>
                <StyledText align='center'>{parseThousands(props.reviewCount)}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Rating</StyledText>
                <StyledText align='center' >{props.ratingAverage}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>forksCount</StyledText>
                <StyledText align='center' >{props.forksCount}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>stargazersCount</StyledText>
                <StyledText align='center' >{props.stargazersCount}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats
