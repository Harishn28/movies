import moment from 'moment-timezone';

let displayTimeZone = moment.tz.guess();

export function formatDate(dateString, format, displayTimeZone = displayTimeZone){
    return new moment(dateString, displayTimeZone).format(format)
}