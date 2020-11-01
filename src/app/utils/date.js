export function getLocalTime(time) {
    let now = new Date();
    now = now.toISOString().split('T');
    now = now[0] + 'T' + time + 'Z';
    let localTime = new Date(now).toLocaleString('en-GB').split(', ')[1];
    localTime = localTime.slice(0, localTime.lastIndexOf(':'));
    return localTime;
}