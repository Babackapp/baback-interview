import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card.tsx";
import {Product} from "../../products.ts";
import {Discount} from "@/discounts.ts";
import {Badge} from "@/components/ui/badge.tsx";

export default function BasketTotal({
	products,
	discounts,
}: { products: Product[]; discounts: Discount[] }) {
	return (
		<Card className="self-end w-full max-w-[400px]">
			<CardHeader>
				<CardTitle>Total</CardTitle>
			</CardHeader>
			<CardContent className="space-y-5">
				<div className="flex justify-between">
					<span>Sous-total</span>
					<span>100 €</span>
				</div>
				<div className="flex justify-between">
					<span>Coupons appliqués</span>
					<div className="flex gap-1 flex-wrap justify-end">
						{discounts.map((discount) => (
							<div key={discount.title}>
								<Badge variant="outline">{discount.title}</Badge>
							</div>
						))}
					</div>
				</div>
				<div className="flex justify-between">
					<span>Montant final</span>
					<span>100 €</span>
				</div>
			</CardContent>
		</Card>
	);
}
