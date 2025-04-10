import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import HostelList from "./Pages/HostelList";
// import Navbar from "./Component/Navbar";
import Login from "./Pages/Login";

import RoomsDetail from "./Pages/RoomsDetail";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Dashboard from "./Pages/Dashboard";
import MyProfile from "./Pages/MyProfile";
import MyCart from "./Pages/MyCart";

// import CarouselsDemo1 from "./Pages/CarouselsDemo1";
// import CityCard from "./Component/CityCard";
// import Mypage from "./Pages/Mypage";

// import MyComponent from "./Pages/CarouselsDemo1";
// // import hostel1 from "./images/hostel1.jpg";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Box>
//         <Home />
//
//       </Box>
//     ),
//   },

//   {
//     path: "/MyPage",
//     element: (
//       <>
//         <MyPage />
//       </>
//     ),
//   },
//           {
//       path: "/Login",
//      element: (
//        <Box>
//          <Navbar />
//          <Login />
//        </Box>
//      ),
//    },
//    {
//      path: "/Register",
//      element: (
//              <Box>
//                <Navbar />
//               <Register />
//             </Box>
//           ),
//         },
//         {
//       path: "/hostel/:id",
//      element: (
//        <Box>
//          <HostelList />
//        </Box>
//      ),
//    },
//     {
//     path: "/roomInfo/",
//    element: (
//      <Box>
//        <CarouselsDemo />
//      </Box>
//    ),
//  },
// ]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/HostelList" element={<HostelList />} />
        <Route path="/RoomsDetail" element={<RoomsDetail />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/MyProfile" element={<MyProfile />} />

        <Route path="/MyCart" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <>
  //     <CarouselsDemo1 />
  //     <MyPage />
  //   </>
  // );
  //  return <CarouselsDemo />;
}

export default App;
