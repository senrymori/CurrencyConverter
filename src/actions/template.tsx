import {Alert} from "react-native";
import {errorsAPI} from "../api/errorsAPI";
import currency from "../store/Currency";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IHistory from "../store/ConvertType";
import convert from "../store/Convert";

export const error = (msg: string) => {
    Alert.alert('Ошибка!', msg, [ { text: "OK", onPress: () =>  currency.setError(false)}]);
}

export const retErr = () => {
    return error(errorsAPI.get)
}

export const storeData = async (value: IHistory[]) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('history', jsonValue)
    } catch (e) {
        Alert.alert('Ошибка!', errorsAPI.setStorage, [ { text: "OK" }]);
    }
}

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('history')
        return jsonValue != null ? convert.setHistoryStorage(JSON.parse(jsonValue)) : null;
    } catch(e) {
        Alert.alert('Ошибка!', errorsAPI.getStorage, [ { text: "OK" }]);
    }
}

