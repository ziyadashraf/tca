import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { fetchHeaderData, fetchServicesData } from "@/utils/helpers";

const AppWrapper = async ({ children }: { children: ReactNode }) => {
  const { products } = await fetchHeaderData();

  return (
    <div>
      <Header services={products} />
      {children}
      <Footer />
    </div>
  );
};

export default AppWrapper;
