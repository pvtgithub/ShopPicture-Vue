export interface ItemSend {
    name: string,
    quantity: number
    height: number
    weight: number
    length: number
    width: number
}

export interface SendServiceGhn {
    service_type_id: number,
    to_district_id: number,
    to_ward_code: string,
    height: number,
    length: number,
    weight: number,
    width: number,
    insurance_value: number,
    cod_value: number,
    coupon: any,
    items: ItemSend []
}