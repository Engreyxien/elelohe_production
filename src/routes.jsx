import Login from "./views/Login";
import Profile from "./views/Profile";
import Register from "./views/Register";
import Home from "./views/Home";
import LeftoverIngredientForm from "./views/LeftoverIngredientForm";
import LeftoverIngredientPage from "./views/LeftoverIngredientPage";
import LeftoversTurnoverForm from "./views/LeftoversTurnoverForm";
import LeftoversTurnoverPage from "./views/LeftoversTurnoverPage";
import LeftoversProduceForm from "./views/LeftoversProduceForm";
import LeftoversProducePage from "./views/LeftoversProducePage";
import MaterialsForm from "./views/MaterialsForm";
import MaterialsPage from "./views/MaterialsPage";
import PurchaseorderChickenForm from "./views/PurchaseorderChickenForm";
import PurchaseorderChickenPage from "./views/PurchaseorderChickenPage";
import PurchaseorderIngredientsForm from "./views/PurchaseorderIngredientsForm";
import PurchaseorderIngredientsPage from "./views/PurchaseorderIngredientsPage";
import StocksChickensForm from "./views/StocksChickensForm";
import StocksChickensPage from "./views/StocksChickensPage";
import StocksIngredientsForm from "./views/StocksIngredientsForm";
import StocksIngredientsPage from "./views/StocksIngredientsPage";
import StocksTransferForm from "./views/StocksTransferForm";
import StocksTransferPage from "./views/StocksTransferPage";
import EditProfile from "./views/EditProfile";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "Profile",
    path: "/profile/:user_id",
    element: <Profile />,
  },
  {
    name: "EditProfile",
    path: "/editprofile",
    element: <EditProfile />,
  },
  {
    name: "LeftoverIngredientForm",
    path: "/leftoveringredientform",
    element: <LeftoverIngredientForm />,
  },
  {
    name: "LeftoverIngredientPage",
    path: "/leftoveringredientpage",
    element: <LeftoverIngredientPage />,
  },
  {
    name: "LeftoversTurnoverForm",
    path: "/leftoversturnoverform",
    element: <LeftoversTurnoverForm />,
  },
  {
    name: "LeftoversTurnoverPage",
    path: "/leftoversturnoverpage",
    element: <LeftoversTurnoverPage />,
  },
  {
    name: "LeftoversProduceForm",
    path: "/leftoversproduceform",
    element: <LeftoversProduceForm />,
  },
  {
    name: "LeftoversProducePage",
    path: "/leftoversproducepage",
    element: <LeftoversProducePage />,
  },
  {
    name: "MaterialsForm",
    path: "/materialsform",
    element: <MaterialsForm />,
  },
  {
    name: "MaterialsPage",
    path: "/materialspage",
    element: <MaterialsPage />,
  },
  {
    name: "PurchaseorderChickenForm",
    path: "/purchaseorderchickenform",
    element: <PurchaseorderChickenForm />,
  },
  {
    name: "PurchaseorderChickenPage",
    path: "/purchaseorderchickenpage",
    element: <PurchaseorderChickenPage />,
  },
  {
    name: "PurchaseorderIngredientsForm",
    path: "/purchaseorderingredientsform",
    element: <PurchaseorderIngredientsForm />,
  },
  {
    name: "PurchaseorderIngredientsPage",
    path: "/purchaseorderingredientspage",
    element: <PurchaseorderIngredientsPage />,
  },
  {
    name: "StocksChickensForm",
    path: "/stockschickensform",
    element: <StocksChickensForm />,
  },
  {
    name: "StocksChickensPage",
    path: "/stockschickenspage",
    element: <StocksChickensPage />,
  },
  {
    name: "StocksIngredientsForm",
    path: "/stocksingredientsform",
    element: <StocksIngredientsForm />,
  },
  {
    name: "StocksIngredientsPage",
    path: "/stocksingredientspage",
    element: <StocksIngredientsPage />,
  },
  {
    name: "StocksTransferForm",
    path: "/stockstransferform",
    element: <StocksTransferForm />,
  },
  {
    name: "StocksTransferPage",
    path: "/stockstransferpage",
    element: <StocksTransferPage />,
  },
  {
    name: "Register",
    path: "/register",
    element: <Register />,
  },
];

export default routes;
