import { Discount } from "./discounts";
import {type Product, productsStub} from "./products"

type DiscountGroup = Record<Discount["type"], Discount[]>

const calculateFinalPrice = (basket: Product[], discountCodes: string[] = []): number => {
    // const discountByCodes = groupDiscountCodes(discountCodes);
    let total = calcTotal(basket);

    // calcByOneBoughtOneOffer
    // calcByFixedPrice
    // calcByPercentage

    return total;
}

function calcTotal(products: Product[]): number {
    return 0;
}

function groupDiscountCodes(codes: string[]): DiscountGroup {
    return {} as DiscountGroup
}

function calcByPercentage(): number {
    return 0;
}

function calcByOneBoughtOneOffer(): number {
    return 0;
}

function calcByFixedPrice(): number {
    return 0;
}

// console.log(calculateFinalPrice(productsStub, ["10_PERCENT_OFF"]))

export { calculateFinalPrice }
