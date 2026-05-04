export class TodoPage {
  constructor(page) {
    this.page = page
    this.input = page.getByPlaceholder('What needs to be done?')
    this.todoItems = page.locator('.todo-list li')
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc')
  }

  async addTodo(text) {
    await this.input.fill(text)
    await this.page.keyboard.press('Enter')
  }

  async completeTodo(index = 0) {
    await this.todoItems.nth(index).locator('.toggle').click()
  }

  async deleteTodo(index = 0) {
    await this.todoItems.nth(index).hover()
    await this.todoItems.nth(index).locator('.destroy').click()
  }
}