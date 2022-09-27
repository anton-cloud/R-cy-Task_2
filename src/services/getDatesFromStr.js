export function getDatesFromStr(str) {
    let result = ''
    const datesArr = str.match(/\d{1,2}([\/..])\d{1,2}\1\d{4}/g);

    switch (datesArr?.length) {
        case 1:
            result = `${datesArr[0]}`;
            break;

        case 2:
            result = `${datesArr[0]}, ${datesArr[1]}`
            break;

        default:
            return result;
    }

    return result;

}