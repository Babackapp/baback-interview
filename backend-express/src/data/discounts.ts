export type Discount = {
    title: string;
    code: string;
    type: 'percent' | 'fixed' | '1for1';
    amount?: number;
    rules?: {
        totalAbove?: number;
        productsIds?: string[];
        minimalAmount?: number;
    };
};

export const discountsStub: Discount[] = [
    {
        title: '10% off',
        code: '10_PERCENT_OFF',
        type: 'percent',
        amount: 10
    },
    {
        title: '20€ off',
        code: '20_EURO_OFF',
        type: 'fixed',
        amount: 20,
    },
    {
        title: '20€ off above 50€',
        code: '20_EURO_OFF_ABOVE_50',
        type: 'fixed',
        amount: 20,
        rules: {
            totalAbove: 50,
        }
    },
    {
        title: '1 acheté, 1 offert',
        code: '1_ACHETE_1_OFFERT_MICROPHONE',
        type: '1for1',
        rules: {
            minimalAmount: 2,
            productsIds: ['1']
        }
    },
];
