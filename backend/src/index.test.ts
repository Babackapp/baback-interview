import { productsStub } from './products';
import { calculateFinalPrice } from './index';
import {describe, it, expect} from '@jest/globals';

describe('calculateFinalPrice', () => {
    it('should return 0 if no items are passed', () => {
        const result = calculateFinalPrice([]);
        expect(result).toBe(0);
    });

    it.skip('should return the total if no discounts are passed', () => {
        const result = calculateFinalPrice([
            productsStub[0],
            productsStub[1],
            productsStub[2],
        ]);
        expect(result).toBe(90);
    });

    it.skip('should return the total with a percentage discount', () => {
        const result = calculateFinalPrice([
            productsStub[0],
            productsStub[1],
            productsStub[2],
        ], [
            "10_PERCENT_OFF",
        ]);
        expect(result).toBe(81);
    });

    it.skip('should return the total with a fixed discount', () => {
        const result = calculateFinalPrice([
            productsStub[0],
            productsStub[1],
            productsStub[2],
        ], [
            "20_EURO_OFF",
        ]);
        expect(result).toBe(70);
    });

    it.skip('should return the total with a buy one get one free discount', () => {
        const result = calculateFinalPrice([
            productsStub[0],
            productsStub[1],
            productsStub[2],
        ], [
            "1_ACHETE_1_OFFERT_MICROPHONE",
        ]);
        expect(result).toBe(60);
    });

    it.skip('should return the total with multiple discounts', () => {
        const result = calculateFinalPrice([
            productsStub[0],
            productsStub[1],
            productsStub[2],
        ], [
            "20_EURO_OFF",
            "10_PERCENT_OFF",
            "1_ACHETE_1_OFFERT_MICROPHONE",
        ]);
        expect(result).toBe(36);
    });

    it.skip('should apply the discounts with an order (1for1, fixed, percent)', () => {
        const result = calculateFinalPrice([
            productsStub[0],
            productsStub[1],
            productsStub[2],
        ], [
            "10_PERCENT_OFF",
            "20_EURO_OFF",
            "1_ACHETE_1_OFFERT_MICROPHONE",
        ]);
        expect(result).toBe(36);
    });

    it.skip('should not apply discount when a minimal amount rule is not respected', () => {
        const result = calculateFinalPrice([
            productsStub[1],
        ], [
            "20_EURO_OFF_ABOVE_50",
        ]);
        expect(result).toBe(20);
    });

    it.skip('should respect discount rules on selected products only', () => {
        const result = calculateFinalPrice([
            productsStub[1],
            productsStub[2],
        ], [
            "1_ACHETE_1_OFFERT_MICROPHONE",
        ]);
        expect(result).toBe(30);
    });

    it.skip('should not apply discount when quantity rule is not respected', () => {
        const result = calculateFinalPrice([
            {
                ...productsStub[0],
                quantity: 1,
            },
        ], [
            "1_ACHETE_1_OFFERT_MICROPHONE",
        ]);
        expect(result).toBe(30);
    });

    it.skip('should handle if a discount does not exists', () => {
        expect(() => calculateFinalPrice([
            productsStub[0],
            productsStub[1],
            productsStub[2],
        ], [
            "UNKNOWN_DISCOUNT",
        ])).toThrow('Discount not found');
    });
});
