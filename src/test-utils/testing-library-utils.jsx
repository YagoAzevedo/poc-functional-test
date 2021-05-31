import { render } from '@testing-library/react';
import { ThemeProvider } from '../Contexts/Theme';

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: ThemeProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };