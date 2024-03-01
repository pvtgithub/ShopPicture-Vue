export interface Payment {
    partnerCode: string,
    orderId: number,
    requestId: string,
    amount: string,
    orderInfo: string,
    orderType: string,
    transId: string,
    resultCode: string,
    message: string,
    payType: string,
    responseTime: string,
    extraData: string,
    signature: string,
    paymentOption: string,
    id: 1
}