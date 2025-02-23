"use client"
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
// import { Toaster } from 'react-hot-toast';
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { Toaster } from 'sonner'

const MainProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <SessionProvider >
                {children}
                <Toaster position="top-center" />
            </SessionProvider>

        </Provider>
    );
};

export default MainProvider;