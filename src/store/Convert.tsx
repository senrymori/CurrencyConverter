import {makeAutoObservable} from "mobx";
import IHistory from "./ConvertType"
import {storeData} from "../actions/template";

class Convert {
    title: string = 'RUB-USD'
    inputSum: number = 0
    result: number = 0
    allCurrency: string[] = ['RUB', 'USD']
    inConv: string = 'RUB'
    outConv: string = 'USD'
    history: IHistory[] = []
    constructor() {
        makeAutoObservable(this)
    }
    setInputSum(sum: number) {
        if (typeof sum == "number") {
            this.inputSum = sum;
        }
    }
    setInConv(inConv: string) {
        this.inConv = inConv;
    }
    setOutConv(outConv: string) {
        this.outConv = outConv;
    }
    setResult(difference: number) {
        this.result = this.inputSum*difference;
    }
    setHistory(date: Date) {
        this.history = [
            ...this.history,
            {
                id: this.history.length.toString(),
                date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getSeconds()}`,
                input: `${this.inputSum} ${this.inConv} to ${this.outConv}`,
                result: this.result
            }
        ];
        storeData(this.history);
    }
    setHistoryStorage(history: IHistory[]) {
        this.history = history;
    }
    switchSelected() {
        let inToOut = this.inConv;
        let outToIn = this.outConv;
        this.inConv = outToIn;
        this.outConv = inToOut;
    }
}

export default new Convert();
