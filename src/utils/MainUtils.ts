
import { ElLoading } from "element-plus";
export class MainUtils {
    public static toCurrency(value: number) {
        const formatter = new Intl.NumberFormat('vi', {
            style: 'currency',
            currency: 'VND'
        });
        return formatter.format(value);
    }

    static timeToDateTimeFormat(timestampInMilliseconds: number) {
        const timestampInSeconds = timestampInMilliseconds / 1000;
        const dateObject = new Date(timestampInSeconds * 1000);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
        const hours = String(dateObject.getHours()).padStart(2, '0');
        const minutes = String(dateObject.getMinutes()).padStart(2, '0');
        const seconds = String(dateObject.getSeconds()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return formattedDate;
    }
}