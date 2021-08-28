const Functions = Object.freeze({
    /**
    * 
    * @param {string} strData 
    * @param {{[comp:string]:string}} StringToComparatorEnum 
    * @returns {RegExpMatchArray[]}
    */
    regexSpesificator(strData, StringToComparatorEnum) {
        var re = "((?:\())(?<field>[a-zA-Z0-9]+.[a-zA-Z0-9]+|[a-zA-Z0-9]+)(?<comparator>" + Object.keys(StringToComparatorEnum).join("|") + ")(?<value>[a-zA-Z0-9 \\$\\%\\:\\-\.\_\+\\*\\?\"\'\\[\\]\\{\\}<>]+|)(?<operator>\\)\\||\\),|\\|\\(|,\\(|\\||,|)(?:\()))"
        return [...strData.matchAll(re)];
    },
   
})
module.exports = Object.freeze({
    js:{
        Functions
    }    
})