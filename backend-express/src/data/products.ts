export type Product = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    description: string;
    imageUrl: string;
};

export const productsStub: Product[] = [
    {
        id: '1',
        name: 'Microphone',
        price: 30.00,
        quantity: 2,
        description: 'Description 1',
        imageUrl: 'https://prd.place/400?id=12',
    },
    {
        id: '2',
        name: 'Cadre',
        price: 20.00,
        quantity: 1,
        description: 'Description 2',
        imageUrl: 'https://prd.place/400?id=24',
    },
    {
        id: '3',
        name: 'Voiture',
        price: 10.00,
        quantity: 1,
        description: 'Description 3',
        imageUrl: 'https://prd.place/400?id=36',
    },
];