'use strict'

const cartContainer = document.querySelector('#cart-items-container')
const searchContainer = document.querySelector('#search')
const menuContainer = document.querySelector('#navbar')

const cartIcon = document.querySelector('#cart-icon')
const searchIcon = document.querySelector('#search-icon')
const menuIcon = document.querySelector('#menu-icon')
const closeIcon = document.querySelector('#close-icon')

const links = document.querySelectorAll('#navbar a')

cartIcon.addEventListener('click', () => {
  cartContainer.classList.toggle('active')
  searchContainer.classList.remove('active')
  menuContainer.classList.remove('mobile')
})

searchIcon.addEventListener('click', () => {
  searchContainer.classList.toggle('active')
  cartContainer.classList.remove('active')
  menuContainer.classList.remove('mobile')
})

menuIcon.addEventListener('click', () => {
  menuContainer.classList.toggle('mobile')
  searchContainer.classList.remove('active')
  cartContainer.classList.remove('active')
})

closeIcon.addEventListener('click', () =>
  menuContainer.classList.remove('mobile')
)
links.forEach((link) => {
  link.addEventListener('click', () => menuContainer.classList.remove('mobile'))
})

window.addEventListener('resize', () => {
  searchContainer.classList.remove('active')
  cartContainer.classList.remove('active')
  menuContainer.classList.remove('mobile')
})
