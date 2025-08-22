import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import PetsOverview from "./PetsOverview";
import PetDetails from "./PetDetails";
import PetForm from "./PetForm";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "pets",
                    element: <PetsOverview />
                },
                {
                    path: "pets/new",
                    element: <PetForm />
                },
                {
                    path: "pets/:petId",
                    element: <PetDetails />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
