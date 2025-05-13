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

  // Image Slider
  const slides = document.querySelectorAll(".slide")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  let currentSlide = 0
  let slideInterval

  // Initialize slider
  function startSlider() {
    slideInterval = setInterval(nextSlide, 4000)
  }

  // Show specific slide
  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"))
    currentSlide = (n + slides.length) % slides.length
    slides[currentSlide].classList.add("active")
  }

  // Next slide
  function nextSlide() {
    showSlide(currentSlide + 1)
  }

  // Previous slide
  function prevSlide() {
    showSlide(currentSlide - 1)
  }

  // Event listeners for slider buttons
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      clearInterval(slideInterval)
      prevSlide()
      startSlider()
    })

    nextBtn.addEventListener("click", () => {
      clearInterval(slideInterval)
      nextSlide()
      startSlider()
    })

    // Start the slider
    showSlide(0)
    startSlider()
  }

  // Weather API
  const weatherSection = document.getElementById("weather")
  if (weatherSection) {
    const apiKey = "9e8a41f9b00e4b2feadfeb194cc2be78 " // Replace with your OpenWeatherMap API key
    const villageName = "Unchagaon" // Replace with your village name
    const weatherLocation = "Kunda" // Replace with a nearby city that OpenWeatherMap recognizes

    async function getWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&units=metric&appid=${apiKey}`,
        )

        if (!response.ok) {
          throw new Error("Weather data not available")
        }

        const data = await response.json()

        // Update weather information
        document.getElementById("village-name").textContent = villageName
        document.getElementById("temperature").textContent = Math.round(data.main.temp)
        document.getElementById("weather-description").textContent = data.weather[0].description
        document.getElementById("humidity").textContent = data.main.humidity
        document.getElementById("wind-speed").textContent = data.wind.speed

        // Update weather icon
        const iconCode = data.weather[0].icon
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
        document.getElementById("weather-icon").src = iconUrl
        document.getElementById("weather-icon").alt = data.weather[0].description
      } catch (error) {
        console.error("Error fetching weather data:", error)
        document.getElementById("weather-description").textContent = "Weather data unavailable"
      }
    }

    // Fetch weather data
    getWeather()
  }

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
