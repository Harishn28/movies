export function formatRunTime(runTime){
    if(!runTime) return '';
    let hours = parseInt(runTime/60);
    let minutes = parseInt(runTime - (hours*60));
    return `${hours} hr ${minutes} min`
}