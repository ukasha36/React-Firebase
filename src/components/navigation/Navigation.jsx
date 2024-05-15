import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../../App";
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";
import AddProductPage from "../pages/dashboard/AddProductPage";
import Admindashboard from "../pages/dashboard/Admindashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/product/:id",
        element: <ProductDetailPage />
    },
    {
        path: "/addproduct",
        element: <AddProductPage />
    },
    {
        path: "/dashboard",
        element: <Admindashboard />
    },
]);

function Navigation() {
    return (
        <RouterProvider router={router} />
    )
}

export default Navigation