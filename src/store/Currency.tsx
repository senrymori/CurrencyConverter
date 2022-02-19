import React from "react"
import { makeAutoObservable } from "mobx";
import axios from "axios";
import {currencyAPI} from "../api/currencyAPI";

interface ICurrency {
    type: string,
    difference: number
}

class Currency {
    currency: ICurrency[] = []
    isLoad: boolean = false
    isError: boolean = false
    constructor() {
        makeAutoObservable(this)
    }
    getCurrency = async () => {
        try {
            const response = await axios.get<[]>(currencyAPI.getCurrency)
            const currencys =  response.data
            for (let valute in currencys) {
                this.setCurrency(valute, currencys[valute])
            }
            this.setLoad(true);
        }
        catch (e) {
            this.setError(true);
        }
    }
    setCurrency(typeCurrency: string, dfferenceCurrency: number) {
        const newCurrency = [{
            type: typeCurrency,
            difference: dfferenceCurrency
        }]
        this.currency = [...this.currency, ...newCurrency]
    }
    setLoad(load: boolean) {
        this.isLoad = load;
    }
    setError(error: boolean) {
        this.isError = error;
    }
}

export default new Currency();
