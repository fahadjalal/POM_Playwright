import { test } from "@playwright/test"
import { LoginPage } from "../Pages/Login"
test.only('LoginTest_POM', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.gotoLoginPage();
    await Login.login('tomsmith', 'SuperSecretPassword!');
})
