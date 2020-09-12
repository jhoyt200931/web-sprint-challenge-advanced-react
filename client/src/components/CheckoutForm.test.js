import React from "react";
import { act, render, fireEvent, getByLabelText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstNameInput = getByLabelText(/First Name:/i);
    const firstNameValue = "Bruce";

    const lastNameInput = getByLabelText(/Last Name:/i);
    const lastNameValue = "Wayne";

    const addressInput = getByLabelText(/Address:/i);
    const addressValue = "1 Wayne Manor";

    const cityInput = getByLabelText(/City:/i);
    const cityValue = "Gotham";

    const stateInput = getByLabelText(/State:/i);
    const stateValue = "NY";

    const zipInput = getByLabelText(/Zip:/i);
    const zipValue = "11111";

    const button = getByTestId(/checkout/i);

    const successMessage = getByTestId(/successMessage/i);

    await(act(async(), () => {
        fireEvent.change(firstNameInput, {target: {value: firstNameValue}});
        fireEvent.change(lastNameInput, {target: {value: lastNameValue}});
        fireEvent.change(addressInput, {target: {value: addressValue}});
        fireEvent.change(cityInput, {target: {value: cityValue}});
        fireEvent.change(stateInput, {target: {value: stateValue}});
        fireEvent.change(zipInput, {target: {value: zipValue}});
        fireEvent.click(button);
    }));

    expect(successMessage).toHaveValue(true);

});
