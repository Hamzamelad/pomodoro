
const TabRoutes = ['/focus', '/short-break', '/long-break']


export function getMinutes(minutes: number): any {
    const time = new Date();
    return time.setSeconds(time.getSeconds() + (60 * minutes));
}

export function next(route: string) {
    return TabRoutes[(TabRoutes.indexOf(route) + 1) % 3]
}

export function getRestartMinutes(state: timeType, path: string) {
    if (path === '/focus') {
        return (60 * state.focus);
    } else if (path === '/short-break') {
        return (60 * state.shortBreak);
    }

    return (60 * state.longBreak);
}
