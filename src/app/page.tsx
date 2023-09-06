"use client"
import Navbar from "../components/Navbar";
import MenuList from "../components/MenuList";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <main>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
        <Navbar/>
        <MenuList/>
        </QueryClientProvider>
      </Provider>
    </main>
  );
}