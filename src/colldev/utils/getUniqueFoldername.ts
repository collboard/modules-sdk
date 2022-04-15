import * as uuid from 'uuid';
import { string_folder_relative_path } from '../../../types';

export function getUniqueFoldername(): string_folder_relative_path {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${
        d.getDate() + 1
    }--${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}--${uuid.v4()}`;
}
