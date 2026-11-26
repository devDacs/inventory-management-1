import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const getDashboardMetrics = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const popularProducts = await prisma.product.findMany({
      take: 15,
      orderBy: {
        stockQuantity: "desc",
      },
    });

    const salesSummaries = await prisma.salesSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });

    const purchaseSummaries = await prisma.purchaseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });

    const expenseSummaries = await prisma.expenseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });

    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
      {
        take: 5,
        orderBy: {
          date: "desc",
        },
      },
    );

    const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
      (item) => ({
        ...item,
        amount: item.amount.toString(),
      }),
    );

    res.json({
      success: true,
      data: {
        popularProducts,
        salesSummaries,
        purchaseSummaries,
        expenseSummaries,
        expenseByCategorySummary,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";

    res
      .status(500)
      .json({ message: `Error retrieving dashboard metrics: ${message}` });
  }
};
