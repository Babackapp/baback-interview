import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table.tsx";
import {TrashIcon} from "lucide-react";
import {Product} from "../../products.ts";

export default function BasketList({ products }: { products: Product[] }) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Basket</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[150px] sm:table-cell text-center">
                                    <span className="sr-only">Image</span>
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="hidden md:table-cell text-center">Price</TableHead>
                                <TableHead className="hidden md:table-cell text-center">Quantity</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="hidden sm:table-cell w-[64px]">
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src={product.imageUrl}
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">{product.name}</TableCell>
                                    <TableCell className="hidden md:table-cell w-[150px] text-center">
                                        {product.price} €
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell w-[150px] text-center">
                                        {product.quantity}
                                    </TableCell>
                                    <TableCell className="w-5 text-center">
                                        <TrashIcon className="h-3.5 w-3.5" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    );
}
