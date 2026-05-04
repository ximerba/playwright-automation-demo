import { test, expect } from '@playwright/test'
import { TodoPage } from './pages/TodoPage'

test.describe('TodoMVC con Page Object', () => {

  let todoPage

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page)
    await todoPage.goto()
  })

  test('crear una tarea nueva', async ({ page }) => {
    await todoPage.addTodo('Estudiar Playwright')
    await expect(page.getByText('Estudiar Playwright')).toBeVisible()
  })

  test('marcar una tarea como completada', async ({ page }) => {
    await todoPage.addTodo('Tarea a completar')
    await todoPage.completeTodo(0)
    await expect(todoPage.todoItems.first()).toHaveClass(/completed/)
  })

  test('eliminar una tarea', async ({ page }) => {
    await todoPage.addTodo('Tarea a eliminar')
    await todoPage.deleteTodo(0)
    await expect(page.getByText('Tarea a eliminar')).not.toBeVisible()
  })

})