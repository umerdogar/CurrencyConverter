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

  it('renders with decimal-pad keyboard type for non-JPY', () => {
    const { getByPlaceholderText } = render(
      <AmountInput value="" onChangeText={jest.fn()} currency="USD" />
    );
    const input = getByPlaceholderText('0.00');
    expect(input.props.keyboardType).toBe('decimal-pad');
  });
  
  it('renders with number-pad keyboard type for JPY', () => {
    const { getByPlaceholderText } = render(
      <AmountInput value="" onChangeText={jest.fn()} currency="JPY" />
    );
    const input = getByPlaceholderText('0');
    expect(input.props.keyboardType).toBe('number-pad');
  });
});