import { Page } from "puppeteer";

export class Login {

  constructor(private readonly page: Page) { }

  async submit(username: string, password: string) {
    await this.page.waitForSelector('input[name="username"]');
    await this.page.type('input[name="username"]', username, { delay: 100 });
    await this.page.type('input[name="password"]', password, { delay: 100 });

    await this.page.waitForSelector('button[type="submit"]');
    await this.page.click('button[type="submit"]', { delay: 1000 });

    await new Promise(r => setTimeout(r, 5000))
    console.log('Fazendo login...');
  }
  
}