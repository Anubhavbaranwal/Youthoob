import Header from "./Components/Header";
import Body from "./Components/Body";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontain from "./Components/Maincontain";
import Watchpage from "./Components/Watchpage";
import SearchResult from "./Components/searchResult";
import Trending from "./Components/Trending";
import Subscription from "./Components/Subscription";
import Shorts from "./Components/Shorts";
import Watchlater from "./Components/Watchlater";

function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Maincontain />,
        },
        {
          path: "/watch",
          element: <Watchpage />,
        },
        {
          path: "/search",
          element: <SearchResult />,
        },
        {
          path: "/trending",
          element: <Trending />,
        },
        {
          path: "/subscription",
          element: <Subscription />,
        },
        {
          path: "/shorts",
          element: <Shorts />,
        },
        {
          path: "/watchlater",
          element: <Watchlater />,
        },
      ],
    },
  ]);
  return (
    <Provider store={Store}>
      <div>
        <Header />
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  );
}

export default App;
