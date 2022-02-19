import convert from "../../store/Convert";
import currency from "../../store/Currency";

export const changeText = (sum: string) => {
    if (!sum.length) {
        sum = '0'
    }
    convert.setInputSum(parseInt(sum))
}

export const convertStart = () => {
    let date = new Date();
    if (convert.inConv == convert.outConv) {
        convert.setResult(1)
    } else {
        let typeConvert = `${convert.inConv}_${convert.outConv}`
        for (let curr of currency.currency) {
            if (typeConvert == curr.type) {
                convert.setResult(curr.difference)
                convert.setHistory(date)
            }
        }
    }
}
