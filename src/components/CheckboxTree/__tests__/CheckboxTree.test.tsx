import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';

import CheckboxTree from '..';
import { useCategories } from '../../../hooks/useCategories';
import { CategoriesContextValue } from '../../../contexts/categories';

vi.mock('../../../hooks/useCategories');

const mockedValue: CategoriesContextValue = {
  categories: [
    {
      id: '14220',
      parent: '14100',
      name: 'Lion'
    },
    {
      id: '14100',
      parent: '0',
      name: 'Animal'
    }
  ],
  selectedCategories: [],
  expandedCategories: [],
  handleClearAll: vi.fn(),
  handleSelectAll: vi.fn(),
  toggleCategoryExpansion: vi.fn(),
  toggleCategorySelection: vi.fn()
};

const mockedValueExpanded: CategoriesContextValue = {
  ...mockedValue,
  expandedCategories: ['14100']
};

describe('CheckboxTree', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it.skip('renders one checkbox with correct data', () => {
    vi.mocked(useCategories).mockReturnValue(mockedValue);

    render(<CheckboxTree />);
    screen.debug();

    expect(screen.getByTestId('checkbox-tree-wrapper')).toBeInTheDocument();

    expect(screen.getByTestId('checkbox-node-label-14100')).toHaveTextContent(
      'Animal'
    );
  });

  it('renders two checkboxes with correct children node information', () => {
    vi.mocked(useCategories).mockReturnValue(mockedValueExpanded);

    render(<CheckboxTree />);

    expect(screen.queryAllByTestId('checkbox-tree-wrapper')).toHaveLength(2);

    expect(screen.getByTestId('checkbox-tree-children')).toBeInTheDocument();

    expect(screen.getByTestId('checkbox-node-label-14100')).toHaveTextContent(
      'Animal'
    );

    expect(screen.getByTestId('checkbox-node-label-14220')).toHaveTextContent(
      'Lion'
    );
  });
});
