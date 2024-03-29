import { uuid } from 'vue-uuid'

export function currentUrlWithPortNumber(port: string) {
    const fullAddressArray = window.location.href.split("://");
    const fullAddressName = window.location.href.split("://")[1].split(".");
    const addressName = `${fullAddressName[0]}-${port}`;
    fullAddressName[0] = addressName;
    console.log("fullAddressName ", fullAddressName)
    console.log(`${fullAddressArray[0]}://${fullAddressName.join(".")}`)
    return `${fullAddressArray[0]}://${fullAddressName.join(".")}`;
}


export function zeroPadded(num: number) {
    // 4 --> 04
    return num < 10 ? `0${num}` : num;
}

export function generateId() {
    return uuid.v4().replace(/-/g, "")
}