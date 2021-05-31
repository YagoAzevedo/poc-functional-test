
import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {
    return res(
      ctx.json({
          url: 'https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png',
          title: 'Test Image',
          copyright: 'Yago'
      })
    );
  }),
];