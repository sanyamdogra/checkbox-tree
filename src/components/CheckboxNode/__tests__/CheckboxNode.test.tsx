import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';

import CheckboxNode from '..';
import { Category } from '../../../common/types';

describe('CheckboxNode', () => {
  const mockCategory: Category = { id: '1', name: 'Category 1', parent: '0' };
  const mockOnChange = vi.fn();
  const mockOnClick = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders checkbox with correct checked state', () => {
    render(
      <CheckboxNode
        category={mockCategory}
        isSelected={true}
        onChange={mockOnChange}
        onClick={mockOnClick}
      />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('renders checkbox with correct checked state', () => {
    render(
      <CheckboxNode
        category={mockCategory}
        isSelected={true}
        onChange={mockOnChange}
        onClick={mockOnClick}
      />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('renders label with correct text', () => {
    render(
      <CheckboxNode
        category={mockCategory}
        isSelected={false}
        onChange={mockOnChange}
        onClick={mockOnClick}
      />
    );
    const label = screen.getByText('Category 1');
    expect(label).toBeInTheDocument();
  });

  it('calls onChange handler when checkbox is changed', () => {
    render(
      <CheckboxNode
        category={mockCategory}
        isSelected={false}
        onChange={mockOnChange}
        onClick={mockOnClick}
      />
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('calls onClick handler when label is clicked', () => {
    render(
      <CheckboxNode
        category={mockCategory}
        isSelected={false}
        onChange={mockOnChange}
        onClick={mockOnClick}
      />
    );
    const label = screen.getByText('Category 1');
    fireEvent.click(label);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
