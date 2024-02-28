import { render } from "@testing-library/react"
import { Home } from "../Home";

describe('Test Home Page',()=> {
    test('Check Title',()=>{
        console.log(render(<Home />))
        // const homeTitle = getByTestId("homeTitle");
        // expect(homeTitle.innerHTML).toBeTruthy();
    })
})