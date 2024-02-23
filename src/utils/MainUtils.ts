import router from "@/router";
import { ElLoading } from "element-plus";
export class MainUtils {
    static loadNavigation(url: string) : string {
        const loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)',
        })
        setTimeout(() => {
            loading.close()
            return url
        }, 2000)

        return url

    }
}