export type DiscountType = "percent" | "fixed" | "1for1";
export type Discount = {
	title: string;
	code: string;
	type: DiscountType;
	amount?: number;
	rules?: {
		// Règles génerales
		// Le panier total doit avoir un montant minimal de X€
		minimalPriceBought?: number;
		// Le panier doit contenir au minimum X articles au total
		minimalQuantity?: number;
		// Que pour les 1for1, en conjonction avec minimalQuantity
		productsIds?: string[];
	};
};

export const discountsStub: Discount[] = [
	{
		title: "10% off",
		code: "10_PERCENT_OFF",
		type: "percent",
		amount: 10,
	},
	{
		title: "20€ off",
		code: "20_EURO_OFF",
		type: "fixed",
		amount: 20,
	},
	{
		title: "20€ off above 50€",
		code: "20_EURO_OFF_ABOVE_50",
		type: "fixed",
		amount: 20,
		rules: {
			minimalAmount: 50,
		},
	},
	{
		title: "1 acheté, 1 offert",
		code: "1_ACHETE_1_OFFERT_MICROPHONE",
		type: "1for1",
		rules: {
			minimalQuantity: 2,
			productsIds: ["1"],
		},
	},
];
