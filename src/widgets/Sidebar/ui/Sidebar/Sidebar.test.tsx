import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('should be rendered', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle button', () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
