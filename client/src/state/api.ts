import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface DashboardMetrics {
  popularProducts: Product[];
  salesSummaries: SalesSummary[];
  purchaseSummaries: PurchaseSummary[];
  expenseSummaries: ExpenseSummary[];
  expenseByCategorySummaries: ExpenseByCategory[];
}

export interface Product {
  id: string;
  name: string;
  prices: number;
  rating: number | null;
  stockQuantity: number;
}

export interface SalesSummary {
  id: string;
  totalValue: number;
  changePercentage: number | null;
  date: string;
}

export interface PurchaseSummary {
  id: string;
  totalPurchased: number;
  changePercentage: number | null;
  date: string;
}

export interface ExpenseSummary {
  id: string;
  totalExpenses: number;
  date: string;
}

export interface ExpenseByCategory {
  id: string;
  category: string;
  amount: string;
  date: string;
}

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics"],
  endpoints: ({ query }) => ({
    getDashboardMetrics: query<DashboardMetrics, void>({
      query: () => "/dashboard",
      providesTags: ["DashboardMetrics"],
      transformResponse: ({ data }) => data,
    }),
  }),
});

export const { useGetDashboardMetricsQuery } = api;
export { api };
