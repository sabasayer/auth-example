import { useEffect } from "react";
import { useAuth } from "../hooks/use-auth";
import Router from "next/router";
import { LayoutProps } from "../types/layout";

const PanelLayout:React.FC<LayoutProps> = ({children}) => {
    const {isAuthenticated} = useAuth();

    useEffect(() => {
        if(!isAuthenticated()){
            Router.push("/auth/login")
        }
    })

    return  <div>
                Panel layout
                {children}
            </div>
} 


export default PanelLayout;