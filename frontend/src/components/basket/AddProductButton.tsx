import {Button} from "@/components/ui/button.tsx";
import {PlusCircle} from "lucide-react";

export default function AddProductButton() {
	return (
		<>
			<div className="flex items-center">
				<div className="ml-auto flex items-center gap-2">
					<Button size="sm" className="h-8 gap-1">
						<PlusCircle className="h-3.5 w-3.5" />
						<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
							Add Product
						</span>
					</Button>
				</div>
			</div>
		</>
	);
}
