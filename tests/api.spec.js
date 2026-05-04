import { test, expect } from '@playwright/test'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

test.describe('API Testing con Playwright', () => {

  test('GET - obtener un usuario', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users/1`)
    
    expect(response.status()).toBe(200)
    
    const body = await response.json()
    expect(body.id).toBe(1)
    expect(body.name).toBeTruthy()
    expect(body.email).toContain('@')
  })

  test('POST - crear un recurso', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/posts`, {
      data: {
        title: 'Test desde Playwright',
        body: 'Contenido del post',
        userId: 1
      }
    })

    expect(response.status()).toBe(201)

    const body = await response.json()
    expect(body.title).toBe('Test desde Playwright')
    expect(body.id).toBeTruthy()
  })

  test('PUT - actualizar un recurso', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/posts/1`, {
      data: {
        id: 1,
        title: 'Título actualizado',
        body: 'Contenido actualizado',
        userId: 1
      }
    })

    expect(response.status()).toBe(200)

    const body = await response.json()
    expect(body.title).toBe('Título actualizado')
  })

  test('DELETE - eliminar un recurso', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/posts/1`)
    
    expect(response.status()).toBe(200)
  })

})