import React from "react";
import { screen, act, render, fireEvent, getByLabelText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText(/First Name:/i);
    const firstNameValue = "Bruce";

    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    const lastNameValue = "Wayne";

    const addressInput = screen.getByLabelText(/Address:/i);
    const addressValue = "1 Wayne Manor";

    const cityInput = screen.getByLabelText(/City:/i);
    const cityValue = "Gotham";

    const stateInput = screen.getByLabelText(/State:/i);
    const stateValue = "NY";

    const zipInput = screen.getByLabelText(/Zip:/i);
    const zipValue = "11111";

    const button = screen.getByTestId(/checkout/i);

    
    act( () => {
        fireEvent.change(firstNameInput, {target: {value: firstNameValue}});
        fireEvent.change(lastNameInput, {target: {value: lastNameValue}});
        fireEvent.change(addressInput, {target: {value: addressValue}});
        fireEvent.change(cityInput, {target: {value: cityValue}});
        fireEvent.change(stateInput, {target: {value: stateValue}});
        fireEvent.change(zipInput, {target: {value: zipValue}});
        fireEvent.click(button);
    });
    const successMessage = screen.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();
        
        
});
