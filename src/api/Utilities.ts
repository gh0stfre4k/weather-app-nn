
export function convertUnixTimeToDate(unixUtc: number): Date {
    var date = new Date(unixUtc * 1000);
    
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    var formattedTime = hours + ':' + minutes.substr(-2);

    return new Date(date);
}