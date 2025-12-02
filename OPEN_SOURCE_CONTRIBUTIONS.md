# Open Source Contributions Section

## Overview
The Open Source Contributions section has been added to the portfolio's Projects area, displaying selected pull requests and contributions in a responsive card grid.

## Features
- **Table Format**: Clean table layout with fixed row heights
- **Responsive Design**: Optimized for mobile and desktop viewing
- **Copy to Clipboard**: One-click URL copying with confirmation tooltip
- **External Links**: GitHub icon links that open PRs in new tabs
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **GitHub Profile Link**: Optional link to GitHub profile (enabled on Projects page)

## Implementation
- **Component**: `src/components/OpenSourceContributions.tsx`
- **Styles**: `src/styles/OpenSourceContributions.css`
- **Tests**: `src/components/__tests__/OpenSourceContributions.test.tsx`

## Usage
The component is included in both the home Projects section and the dedicated Projects page:

- **Home Projects**: `<OpenSourceContributions />` (no GitHub link)
- **Projects Page**: `<OpenSourceContributions showGithubLink={true} />` (with GitHub link)

To add new contributions, edit the `contributions` array:

```typescript
const contributions: Contribution[] = [
  {
    title: "Your PR title",
    description: "Brief description of the contribution",
    url: "https://github.com/owner/repo/pull/123",
    repo: "owner/repo"
  }
];
```

## Browser Support
- Modern browsers with clipboard API support
- Fallback to `document.execCommand` for older browsers
- Graceful degradation for browsers without IntersectionObserver

## Testing
Run tests with: `npm test -- --testPathPattern=OpenSourceContributions`

All 7 tests verify:
- Table structure and headers
- Content rendering
- Copy functionality
- Accessibility attributes
- GitHub profile link toggle
- User interactions