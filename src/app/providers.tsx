"use client";

import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";
import { SearchProvider } from "@/context/searchContext";
import { store } from "@/redux/store";
import { ThemeProvider } from "next-themes";

import { Provider } from "react-redux";



export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>

        <ThemeProvider defaultTheme="light" attribute="class">
        <SidebarProvider>
        <SearchProvider>{children}</SearchProvider>
      </SidebarProvider>
        </ThemeProvider>
   
    </Provider>
  );
}




