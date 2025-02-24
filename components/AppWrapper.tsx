"use client";

import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="hidden">
        list-disc list-decimal list-none text-left rtl:text-right text-center
        text-right
      </div>

      <Header />
      {children}
      <Footer />
    </QueryClientProvider>
  );
};

export default AppWrapper;
