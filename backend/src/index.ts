import { Discount } from "./discounts";
import {type Product, productsStub} from "./products"

type DiscountGroup = Record<Discount["type"], Discount[]>

const calculateFinalPrice = (basket: Product[], discountCodes: string[] = []): number => {
    return 1;
}


// console.log(calculateFinalPrice(productsStub, ["10_PERCENT_OFF"]))

export { calculateFinalPrice }
