import { rest } from 'msw'
export const handlers = [
  rest.get('http://localhost:8080/data-ready', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        command: 'GetDataReady',
        response: true,
      }),
    )
  }),
]
