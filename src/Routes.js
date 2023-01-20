import Aboutindex from "./main/about/aboutpage.jsx";
import Catalogindex from "./main/catalog/index.js";
import LayOut from "./LayOut";
import { useRoutes } from "react-router-dom";
import Parent from "./main/index.js";
import Wears from "./main/catalog/Wears.jsx";
import WearsItem from "./main/catalog/WearsIteam.jsx";
import ProductCard from "./product/ProductCard.jsx";
import NotFound from "./main/NotFound.jsx";
import Contactindex from "./contacts/index.js";


export default function Routes() {
  let element = useRoutes([
    {
      element: <LayOut />,
      children: [
        { path: "/", element: <Parent /> },
        { path: "catalog", element: <Catalogindex /> },
        { path: "catalog/:name", element:<Wears />},
        { path: "catalog/:name/:id", element:<WearsItem />},
        { path: "product/:name", element: <ProductCard/>},
        { path: "about", element: <Aboutindex /> },
        { path: "*", element: <NotFound/>},
        { path: 'contacts', element: <Contactindex/>}
        
        
      ]
    },
    
  ]);
  return element
    
    
  
}
