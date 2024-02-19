import { Route,Routes } from "react-router-dom"
import { Home,Login,Register,Reserved,BookDetail,PageNotFound } from "../pages"


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/reserved" element={<Reserved />}  />
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />}  />
        <Route path="/book/:id" element={<BookDetail />}  />
        <Route path="/register" element={<PageNotFound />}  />

    </Routes>
  )
}

