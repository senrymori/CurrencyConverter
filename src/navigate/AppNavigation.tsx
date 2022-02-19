import React, {useEffect} from 'react';
import {View} from "react-native";
import {observer} from "mobx-react-lite";
import currency from "../store/Currency";
import {retErr} from "../actions/template";
import {indicatorLoad} from "../components/template";
import {NavigationContainer} from "@react-navigation/native";
import BottomTabMenu from "./menus/BottomTabMenu";

const AppNavigation = observer(({}) => {
    useEffect(() => {
        currency.getCurrency();
    }, [])

    if (currency.isError) retErr()
    if (currency.isLoad) indicatorLoad()

    return (
       <NavigationContainer>
           <BottomTabMenu/>
       </NavigationContainer>
    )
})

export default AppNavigation;
