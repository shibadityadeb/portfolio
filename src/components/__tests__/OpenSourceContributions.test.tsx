import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import OpenSourceContributions from '../OpenSourceContributions';

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(() => Promise.resolve()),
  },
});

describe('OpenSourceContributions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the section title and table headers', () => {
    render(<OpenSourceContributions />);
    
    expect(screen.getByText('Open Source Contributions')).toBeInTheDocument();
    expect(screen.getByText('PR Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Repository')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  test('renders contribution table rows with correct content', () => {
    render(<OpenSourceContributions />);
    
    expect(screen.getByText(/Adds interactive copy buttons/)).toBeInTheDocument();
    expect(screen.getByText(/Copy to Clipboard button for/)).toBeInTheDocument();
    expect(screen.getByText('theatre-js/website')).toBeInTheDocument();
    expect(screen.getByText('webpack/webpack.js.org')).toBeInTheDocument();
  });

  test('copy button copies URL to clipboard', async () => {
    render(<OpenSourceContributions />);
    
    const copyButtons = screen.getAllByLabelText(/Copy URL/);
    fireEvent.click(copyButtons[0]);
    
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://github.com/theatre-js/website/pull/23');
    });
  });

  test('shows copy confirmation tooltip', async () => {
    render(<OpenSourceContributions />);
    
    const copyButtons = screen.getAllByLabelText(/Copy URL/);
    fireEvent.click(copyButtons[0]);
    
    await waitFor(() => {
      expect(screen.getByText('Copied!')).toBeInTheDocument();
    });
  });

  test('external links have correct attributes', () => {
    render(<OpenSourceContributions />);
    
    const githubLinks = screen.getAllByLabelText(/Open GitHub PR/);
    githubLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('shows GitHub profile link when enabled', () => {
    render(<OpenSourceContributions showGithubLink={true} />);
    
    expect(screen.getByText(/For more detailed info visit/)).toBeInTheDocument();
    expect(screen.getByText('my GitHub profile')).toBeInTheDocument();
  });

  test('hides GitHub profile link when disabled', () => {
    render(<OpenSourceContributions showGithubLink={false} />);
    
    expect(screen.queryByText(/For more detailed info visit/)).not.toBeInTheDocument();
  });
});