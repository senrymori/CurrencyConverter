import React from 'react';
import SelectDropdown from "react-native-select-dropdown";
import convert from "../../store/Convert";
import {ContainerConvert, SwitchConvert, TitleConvert} from "./ConvertCSS";
import {observer} from "mobx-react-lite";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import {TouchableOpacity} from "react-native";

export const SelectorConvert = observer(() => {
    return (
        <ContainerConvert style={{marginBottom: 20}}>
            <SelectDropdown
                data={convert.allCurrency}
                onSelect={(selectedItem) => convert.setInConv(selectedItem)}
                defaultValue={convert.inConv}
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem
                }}
                rowTextForSelection={(item) => {
                    return item
                }}
                buttonStyle={{width: '30%'}}
            />
            <TitleConvert>to</TitleConvert>
            <SelectDropdown
                data={convert.allCurrency}
                onSelect={(selectedItem) => convert.setOutConv(selectedItem)}
                defaultValue={convert.outConv}
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem
                }}
                rowTextForSelection={(item) => {
                    return item
                }}
                buttonStyle={{width: '30%'}}
            />
            <TouchableOpacity onPress={() => convert.switchSelected()}>
                <SwitchConvert>
                    <IconMC name="swap-horizontal-bold" color="white" size={25} />
                </SwitchConvert>
            </TouchableOpacity>
        </ContainerConvert>
    );
});

