document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active")
      })
    })
  
    // Navbar scroll effect
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar")
      if (window.scrollY > 50) {
        navbar.style.padding = "10px 0"
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
      } else {
        navbar.style.padding = "15px 0"
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)"
      }
    })
  })
  