import { render } from "@testing-library/react"
import Logout from "../Logout.jsx";

describe('Test Book Creation',()=> {
    test('Check title',()=>{
        const { getByTestId } = render(<Logout />)
        const LogoutElement = getByTestId("Logout");
        expect(LogoutElement.innerHTML).toBeTruthy();
    })
})