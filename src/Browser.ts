import puppeteer, { Page } from 'puppeteer';

class Browser {

  async page(url: string): Promise<Page> {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    return page;
  }

}

export const browser = new Browser();
