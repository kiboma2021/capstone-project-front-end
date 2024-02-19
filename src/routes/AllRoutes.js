import { Route,Routes } from "react-router-dom"
import { Home,Login,Register,Reserved,BookDetail,PageNotFound } from "../pages"


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home title="Home" />}  />
        <Route path="/reserved" element={<Reserved title="Reserved" />}  />
        <Route path="/login" element={<Login title="Login" />}  />
        <Route path="/register" element={<Register title="Register" />}  />
        <Route path="/book/:id" element={<BookDetail />}  />
        <Route path="/register" element={<PageNotFound title="Page Not Found" />}  />

    </Routes>
  )
}

