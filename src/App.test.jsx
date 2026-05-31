import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect } from 'vitest'
import React from 'react'
import App from './App.jsx'
import '@testing-library/jest-dom'


test('App renders the main title and the first few projects', function () {
  
  render(<App />)
  
  const headerText = screen.getByText('Personal Project Showcase App')
  expect(headerText).toBeInTheDocument()
  
  const projectOne = screen.getByText('Project 1')
  const projectTwo = screen.getByText('Project 2')
  
  expect(projectOne).toBeInTheDocument()
  expect(projectTwo).toBeInTheDocument()
})


test('Search input filters down the projects list', function () {
  
  render(<App />)
  
  
  const searchInput = screen.getByPlaceholderText('Search Projects')
  
  
  fireEvent.change(searchInput, { target: { value: 'Project 1' } })
  
  
  const visibleProject = screen.getByText('Project 1')
  expect(visibleProject).toBeInTheDocument()
  

  const hiddenProject = screen.queryByText('Project 2')
  expect(hiddenProject).not.toBeInTheDocument()
})


test('Filling out the form adds a new project card onto the list', function () {
  
  render(<App />)
  
  
  const titleInput = screen.getByLabelText('Title')
  const descriptionInput = screen.getByLabelText('Description')
  const addButton = screen.getByRole('button', { name: 'Add' })

  
  fireEvent.change(titleInput, { target: { value: 'My Awesome Website' } })
  fireEvent.change(descriptionInput, { target: { value: 'Built using React and Vite.' } })
  
  
  fireEvent.click(addButton)

  
  const newTitle = screen.getByText('My Awesome Website')
  const newDescription = screen.getByText('Built using React and Vite.')
  
  expect(newTitle).toBeInTheDocument()
  expect(newDescription).toBeInTheDocument()

  
  expect(titleInput.value).toBe('')
  expect(descriptionInput.value).toBe('')
})