import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { AmountInput } from '@components';

describe('AmountInput', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <AmountInput value="" onChangeText={jest.fn()} />
    );
    expect(getByPlaceholderText('0.00')).toBeTruthy();
  });

  it('displays the correct value', () => {
    const { getByDisplayValue } = render(
      <AmountInput value="123.45" onChangeText={jest.fn()} />
    );
    expect(getByDisplayValue('123.45')).toBeTruthy();
  });

  it('calls onChangeText when user types', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <AmountInput value="" onChangeText={onChangeText} />
    );
    fireEvent.changeText(getByPlaceholderText('0.00'), '100');
    expect(onChangeText).toHaveBeenCalledWith('100');
  });

  it('renders with numeric keyboard type', () => {
    const { getByPlaceholderText } = render(
      <AmountInput value="" onChangeText={jest.fn()} />
    );
    const input = getByPlaceholderText('0.00');
    expect(input.props.keyboardType).toBe('numeric');
  });
});