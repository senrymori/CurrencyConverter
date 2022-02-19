import React from 'react';
import {Wrapper} from "../../components/template";
import {ButtonConvert, ButtonText, InputConvert, SwitchConvert, TitleConvert} from "./ConvertCSS";
import {observer} from "mobx-react-lite";
import convert from "../../store/Convert";
import {SelectorConvert} from "./ConvertComponents";
import {changeText, convertStart} from "./ConvertAction"

const Convert = observer(() => {
    return (
        <Wrapper>
            <TitleConvert style={{marginBottom: 20}}>RUB-USD</TitleConvert>
            <InputConvert style={{marginBottom: 20}} value={convert.inputSum.toString()} maxLength={20} onChangeText={changeText} keyboardType="numeric" />
            <SelectorConvert/>
            <ButtonConvert onPress={convertStart} style={{marginBottom: 20}}>
                <ButtonText>Конвертировать</ButtonText>
            </ButtonConvert>
            <TitleConvert style={{marginBottom: 20}}>Результат: {convert.result}</TitleConvert>
        </Wrapper>
    );
})

export default Convert;
