import { render, screen } from '@testing-library/react';
import React from 'react';
import PullRequestViewer from './PullRequestViewer';

describe('PullRequestViewer', () => {
  it('renders the component title', () => {
    render(<PullRequestViewer />);
    const titleElement = screen.getByRole('heading', { name: /Pull Request Viewer/i, level: 1 });
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the repository select dropdown', () => {
    render(<PullRequestViewer />);
    const selectElement = screen.getByRole('combobox', { name: /repository/i });
    expect(selectElement).toBeInTheDocument();
  });
});
