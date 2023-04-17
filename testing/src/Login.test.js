import {render} from "@testing-library/react"

import Login from "./Login"

test("username should  be rendered", () =>{
    render(<Login/>)
    const userInputEL = screen.getByplaceholderText(/username/i);
    expect(userInputEL).toBeInTheDocument()

});
test("username should  be rendered", () =>{
    render(<Login/>)
    const passwordInputEL = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEL).toBeInTheDocument()

});
test("username should  be rendered", () =>{
    render(<Login/>)
    const buttonInputEL = screen.getByPlaceholderText(/buttonname/i);
    expect(buttonInputEL).toBeInTheDocument()

})