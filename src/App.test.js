import React from 'react';
import App from './App';
import {render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
    cleanup()
});

const renderApp = () => render(<App />);

test('initial UI is rendered as expected', () => {
    let { getByTestId, queryByTestId } = renderApp();

    expect(getByTestId('name-input').value).toBeFalsy();
    expect(getByTestId('quantity-input').value).toBeFalsy();
    expect(getByTestId('submit-button').disabled).toBeTruthy();
});

test('Validation that name is required works', () => {
  let { getByTestId, queryByTestId } = renderApp();

  const nameInput = getByTestId('name-input');

  fireEvent.input(nameInput, {
  		target: { value: ''}
  });
  
  const nameInputError = queryByTestId('name-input-error');
  const submitButton = getByTestId('submit-button');

  expect(nameInputError.textContent.trim()).toBe('Product name is required');
  expect(submitButton.disabled).toBeTruthy();
});

test("Validation that quantity is required works", () => {
  let { getByTestId, queryByTestId } = renderApp();

  const quantityInput = getByTestId('quantity-input');

  fireEvent.input(quantityInput, {
  		target: { value: ''}
  });
  
  const quantityInputError = queryByTestId('quantity-input-error');
  const submitButton = getByTestId('submit-button');

  expect(quantityInputError.textContent.trim()).toBe('Quantity is required');
  expect(submitButton.disabled).toBeTruthy();
});

test("Button should be enabled when all inputs are correct and no errors should be shown and perform series of operations", () => {
  let { getByTestId, queryByTestId } = renderApp();

  let nameInput = getByTestId('name-input');
  let quantityInput = getByTestId('quantity-input');

  fireEvent.input(nameInput, {
    target: { value: 'Amazon'}
  });

  fireEvent.input(quantityInput, {
  		target: { value: 1}
  });
  
  let nameInputError = queryByTestId('name-input-error');
  let quantityInputError = queryByTestId('quantity-input-error');
  let submitButton = getByTestId('submit-button');

  expect(nameInputError).toBeFalsy();
  expect(quantityInputError).toBeFalsy();
  expect(submitButton.disabled).toBeFalsy();

  nameInput = getByTestId('name-input');
  quantityInput = getByTestId('quantity-input');

  fireEvent.input(nameInput, {
    target: { value: 'Amazon'}
  });

  fireEvent.input(quantityInput, {
  		target: { value: ''}
  });
  
  nameInputError = queryByTestId('name-input-error');
  quantityInputError = queryByTestId('quantity-input-error');
  submitButton = getByTestId('submit-button');

  expect(nameInputError).toBeFalsy();
  expect(quantityInputError.textContent.trim()).toBe('Quantity is required');
  expect(submitButton.disabled).toBeTruthy();
});