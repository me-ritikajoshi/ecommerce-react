import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./services/productService', () => ({
  getProducts: jest.fn().mockResolvedValue([
    {
      id: 1,
      title: 'Test Product',
      price: 100,
      image: 'test-image'
    }
  ]),
  getProductById: jest.fn().mockResolvedValue({})
}));

test('renders home navigation link', async () => {
  render(<App />);
  const linkElements = await screen.findAllByRole('link', { name: /home/i });
  expect(linkElements.length).toBeGreaterThan(0);
  expect(await screen.findByRole('button', { name: /load more/i })).toBeInTheDocument();
});
