import path from "path"

describe("Toaster", () => {
  beforeAll(async () => {
    jest.setTimeout(10000)
    await page.goto(`file:${path.join(__dirname, "../../storybook-static", "index.html")}`)
    await page.waitFor(1000)
    await page.click("a[title='Toaster']")
    await page.waitFor(1000)
  })

  it("should display a queued Toast", async () => {
    const frames = await page.frames()
    const rootFrame = frames.find(f => f.name() === "storybook-preview-iframe")
    await rootFrame.click("#toaster-queue")
    await page.waitFor(1000)

    // await page.screenshot({path: path.join(__dirname, "../../screenshots", "toaster.png")})
    await expect(rootFrame).toMatch("Toast!")
  })
})

it("should automatically remove Toast after 2.5 seconds", async () => {
  const frames = await page.frames()
  const rootFrame = frames.find(f => f.name() === "storybook-preview-iframe")
  await rootFrame.click("#toaster-queue")
  await page.waitFor(100)

  await expect(rootFrame).toMatch("Toast!")
  await page.waitFor(3000)
  // await page.screenshot({ path: path.join(__dirname, "../../screenshots", "toaster.png") })
  await expect(rootFrame).not.toMatch("Toast!")
})
