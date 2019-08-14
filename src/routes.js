import ProductList from "views/ProductList.jsx";
import AddProduct from "views/AddProduct.jsx";

const dashboardRoutes = [
  {
    path: "/list",
    name: "Product List",
    icon: "pe-7s-car",
    component: ProductList,
    layout: "/admin"
  },
  {
    path: "/add-new",
    name: "Add New Product",
    icon: "pe-7s-plus",
    component: AddProduct,
    layout: "/admin"
  }
];

export default dashboardRoutes;
