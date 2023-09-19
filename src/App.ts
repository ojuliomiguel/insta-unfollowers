import { browser } from './Browser';
import { Login } from './Login'

(async () => {
  const instagramLoginPage = await browser.page()
  const login = new Login(instagramLoginPage);
  const { USERNAME, PASSWORD } = Bun.env
  
  login.submit(USERNAME as string, PASSWORD as string);
  
})()