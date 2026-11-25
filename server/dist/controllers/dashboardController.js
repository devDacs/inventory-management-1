import { prisma } from "../lib/prisma.js";
export const getDashboardMetrics = async (req, res) => {
    try {
        const [popularProducts, salesSummaries, purchaseSummaries, expenseSummaries, expenseByCategorySummariesRaw,] = await Promise.all([
            prisma.product.findMany({
                take: 15,
                orderBy: {
                    stockQuantity: "desc",
                },
            }),
            prisma.salesSummary.findMany({
                take: 5,
                orderBy: {
                    date: "desc",
                },
            }),
            prisma.purchaseSummary.findMany({
                take: 5,
                orderBy: {
                    date: "desc",
                },
            }),
            prisma.expenseSummary.findMany({
                take: 5,
                orderBy: {
                    date: "desc",
                },
            }),
            prisma.expenseByCategory.findMany({
                take: 5,
                orderBy: {
                    date: "desc",
                },
            }),
        ]);
        const expenseByCategorySummaries = expenseByCategorySummariesRaw.map((item) => ({
            ...item,
            amount: item.amount.toString(),
        }));
        res.json({
            success: true,
            data: {
                popularProducts,
                salesSummaries,
                purchaseSummaries,
                expenseSummaries,
                expenseByCategorySummaries,
            },
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        res
            .status(500)
            .json({ message: `Error retrieving dashboard metrics: ${message}` });
    }
};
//# sourceMappingURL=dashboardController.js.map