import { test, expect } from '@playwright/test'

const URL = 'https://demo.playwright.dev/todomvc'

test.describe('TodoMVC - Flujos básicos', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL)
  })

  test('crear una tarea nueva', async ({ page }) => {
    await page.getByPlaceholder('What needs to be done?').fill('Estudiar Playwright')
    await page.keyboard.press('Enter')

    await expect(page.getByText('Estudiar Playwright')).toBeVisible()
  })

  test('marcar una tarea como completada', async ({ page }) => {
    // Primero creamos la tarea
    await page.getByPlaceholder('What needs to be done?').fill('Tarea a completar')
    await page.keyboard.press('Enter')

    // La marcamos como done
    await page.locator('.toggle').click()

    // Verificamos que tiene la clase completed
    await expect(page.locator('.todo-list li')).toHaveClass(/completed/)
  })

  test('eliminar una tarea', async ({ page }) => {
    await page.getByPlaceholder('What needs to be done?').fill('Tarea a eliminar')
    await page.keyboard.press('Enter')

    // El botón de borrar aparece al hacer hover
    await page.locator('.todo-list li').hover()
    await page.locator('.destroy').click()

    await expect(page.getByText('Tarea a eliminar')).not.toBeVisible()
  })

})