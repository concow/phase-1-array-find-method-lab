// function findWin(date) {
//     return (date.result === "W") 
// }

// const superBowlWin = function(array) {
//     return array.find(findWin);
// }

superbowlWin = (record) => {
    const result = record.find(record => record.result === "W");
    return !!result ? result.year : undefined;
}