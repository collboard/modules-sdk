import * as uuid from 'uuid';

export function getUniqueFoldername() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}--${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}--${uuid.v4()}`;
}
