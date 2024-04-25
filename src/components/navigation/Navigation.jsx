import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../../App";
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";
import AddProductPage from "../pages/dashboard/AddProductPage";


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
        path: "/add-product",
        element: <AddProductPage />
    },
]);

function Navigation() {
    return (
        <RouterProvider router={router} />
    )
}

export default Navigation