// Create Navbar
const navbar = document.createElement("nav");

navbar.className =
  "fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 shadow-md";

// Navbar HTML
navbar.innerHTML = `
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <!-- Logo -->
    <h1 class="text-3xl md:text-2xl font-bold font-orbitron tracking-widest 
           bg-gradient-to-r from-cyan-400 to-purple-500 
           text-transparent bg-clip-text">
      Nowrin Akter Mahi
    </h1>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex gap-8 text-lg font-medium">
      <li><a href="#home" class="hover:text-cyan-400 transition duration-300">Home</a></li>
      <li><a href="#about" class="hover:text-cyan-400 transition duration-300">About</a></li>
      <li><a href="#projects" class="hover:text-cyan-400 transition duration-300">Projects</a></li>
      <li><a href="#contact" class="hover:text-cyan-400 transition duration-300">Contact</a></li>
    </ul>

    <!-- Mobile Button -->
    <button id="menuBtn" class="md:hidden text-cyan-400 text-3xl">
      ☰
    </button>

  </div>

  <!-- Mobile Menu -->
  <ul id="mobileMenu"
      class="hidden flex flex-col gap-4 px-6 pb-4 md:hidden text-lg font-medium bg-slate-900/90">

    <li><a href="#home" class="hover:text-cyan-400">Home</a></li>
    <li><a href="#about" class="hover:text-cyan-400">About</a></li>
    <li><a href="#projects" class="hover:text-cyan-400">Projects</a></li>
    <li><a href="#contact" class="hover:text-cyan-400">Contact</a></li>

  </ul>
`;

// Add navbar to page
document.body.prepend(navbar);

// Toggle mobile menu
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});