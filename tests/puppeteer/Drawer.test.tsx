import path from "path"

describe("Drawer", () => {
  beforeAll(async () => {
    await page.goto(`file:${path.join(__dirname, "../../storybook-static", "index.html")}`)
    await page.waitFor(1000)
    await page.click("a[title='Drawer']")
    await page.waitFor(1000)
  })

  it("should display after clicking toggle", async () => {
    const frames = await page.frames();
    const rootFrame = frames.find(f => f.name() === "storybook-preview-iframe");
    await rootFrame.click("#drawer-toggle")
    await page.waitFor(1000)
    // await page.screenshot({path: 'screenshot.png'});
    await expect(rootFrame).toMatch("toggle")
  })
})