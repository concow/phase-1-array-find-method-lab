function findWin(date) {
    return date.result === "W" 
}
//returns year Chiefs won superbowl
function superbowlWin(array) {
    const record = array.find(findWin)
    if (record) {
        return record.year;
    } else {
        return undefined;
    }    
    
}
// superbowlWin = (record) => {
//     const result = record.find(record => record.result === "W");
//     return !!result ? result.year : undefined;
// }