"use server";
import { PrismaClient } from "@prisma/client";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get latest products
export async function getLatestProducts() {
    const prisma = new PrismaClient();

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: "desc" },
    });

    return data.map((product) => ({
        ...product,
        price: product.price.toString(),
        rating: product.rating.toString(),
      }));
}
