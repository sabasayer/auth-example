import { LayoutProps } from "../types/layout";

const AuthLayout:React.FC<LayoutProps> = ({children}) => {
    return  <div>
                Auth layout
                {children}
            </div>
} 


export default AuthLayout;