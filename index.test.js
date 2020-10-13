const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('adds the import line on the CSS', async () => {
  const sampleUrl = "https://fonts.googleapis.com/css?family=Nunito+Sans";
  await run('', `@import "${sampleUrl}"`, { urls: [sampleUrl] })
});