module.exports = function toReadable (number) {
    const mock = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const mockten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const hundred = 'hundred'
    const thousand = 'thousand'

    if (number < 20) {
        return mock[number]
    } else if (number > 19 && number < 100) {
        const str = `${number}`
        const nums = str.split('')
        const result = `${mockten[+nums[0]]}${+nums[1]!==0 ? ' ' + mock[+nums[1]] : ''}`
        return result
    } else if (number > 99 && number < 1000 && number % 100 === 0) {
        const str = `${number}`
        const nums = str.split('')
        const result = `${mock[+nums[0]]} ${hundred}`
        return result
    } else if (number > 99 && number < 1000 && number % 100 !== 0) {
        const str = `${number}`
        const nums = str.split('')
        const other = +(nums[1]+nums[2])
        const hundredsText = `${mock[+nums[0]]} ${hundred}`
        let otherText
        if (other < 20) {
            otherText = mock[other]
        } else if (other > 19 && other < 100) {
            const str = `${other}`
            const nums = str.split('')
            const result = `${mockten[+nums[0]]}${+nums[1]!==0 ? ' ' + mock[+nums[1]] : ''}`
            otherText = result
        }
        return hundredsText+' '+otherText
    }

    return number
}
