import puppeteer, { Page } from 'puppeteer';

class Browser {

  async page(): Promise<Page> {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/');
    return page;
  }

}

export const browser = new Browser();
