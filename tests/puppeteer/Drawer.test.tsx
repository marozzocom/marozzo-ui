import path from "path"

describe("Drawer", () => {
  beforeAll(async () => {
    await page.goto(`file:${path.join(__dirname, "../../storybook-static", "index.html")}`)
    await page.waitFor(1000)
    // await page.screenshot({path: path.join(__dirname, "../../screenshots", "drawer1.png")})
    await page.click("a#explorerdrawer")
    await page.click("a#explorerdrawer--drawer")
    await page.waitFor(1000)
  })

  it("should display after clicking toggle", async () => {
    const frames = await page.frames()
    const rootFrame = frames.find(f => f.name() === "storybook-preview-iframe")
    // await page.screenshot({path: path.join(__dirname, "../../screenshots", "drawer2.png")})
    await rootFrame.click("#drawer-toggle")
    await page.waitFor(1000)

    await expect(rootFrame).toMatch("drawer")
  })
})
