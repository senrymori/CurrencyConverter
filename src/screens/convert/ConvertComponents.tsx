import React from 'react';
import SelectDropdown from "react-native-select-dropdown";
import convert from "../../store/Convert";
import {ContainerConvert, TitleConvert} from "./ConvertCSS";
import {observer} from "mobx-react-lite";

export const SelectorConvert = observer(() => {
    return (
        <ContainerConvert style={{marginBottom: 20}}>
            <SelectDropdown
                data={convert.allCurrency}
                onSelect={(selectedItem) => convert.setInConv(selectedItem)}
                defaultValue={convert.allCurrency[0]}
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
                defaultValue={convert.allCurrency[1]}
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem
                }}
                rowTextForSelection={(item) => {
                    return item
                }}
                buttonStyle={{width: '30%'}}
            />
        </ContainerConvert>
    );
});

