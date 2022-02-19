import React from 'react';
import {observer} from "mobx-react-lite";
import convert from "../../store/Convert";
import {Wrapper} from "../../components/template";
import {FlatList, Text} from "react-native";
import {TextHistory} from "./StoriesCSS";

const Stories = observer(() => {
    return (
        <Wrapper>
            <FlatList
                data={convert.history}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <TextHistory style={{marginBottom: 20}}>
                        <TextHistory style={{fontWeight: 'bold'}}>{item.date}</TextHistory>
                        <TextHistory>- {item.input} ={'>'} {item.result}</TextHistory>
                    </TextHistory>
                )}
            />
        </Wrapper>
    );
});

export default Stories;
