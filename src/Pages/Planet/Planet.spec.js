import { render, screen, waitFor, fireEvent } from '../../test-utils/testing-library-utils';
import Planet from '.';

test('should show screen and present planet info and show more', async () => {

  render(<Planet />);

  await waitFor(async () => {
    const image = await screen.findByRole('img', { name: 'Picture of the day' });
    expect(image).toBeInTheDocument();
  });

  await waitFor(async () => {
    const title = await screen.findByRole('heading', { level: 1 });
    expect(title.textContent).toBe("Test Image");
  });

  await waitFor(async () => {
    const button = await screen.findByRole('button', { name: 'Show more' });
    fireEvent.click(button);

    const copyright = await screen.findByRole('heading', { level: 3 });
    expect(copyright.textContent).toBe("Yago");
  });
});