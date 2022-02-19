import React from 'react';
import {ActivityIndicator, View} from "react-native";
import styled from "@emotion/native";

export const indicatorLoad = () => {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" />
        </View>
    )
}

export const Wrapper = styled.View`
    flex: 1;
    padding: 50px 20px;
`
