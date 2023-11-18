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
                <StyledText align='center' fontWeight='bold'>Price</StyledText>
                <StyledText align='center'>${parseThousands(props.price)}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Rating</StyledText>
                <StyledText align='center' >{props.rating}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Stock</StyledText>
                <StyledText align='center' >{props.stock}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Brand</StyledText>
                <StyledText align='center' >{props.brand}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats
