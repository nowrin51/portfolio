// Create Navbar
const navbar = document.createElement("nav");

navbar.className =
  "fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 shadow-md";

// Navbar HTML
navbar.innerHTML = `
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <!-- Logo -->
    <h1 class="text-2xl font-bold text-cyan-400 cursor-pointer">
      Nowrin Akter Mahi
    </h1>

    <!-- Menu -->
    <ul class="hidden md:flex gap-8 text-lg font-medium">

      <li>
        <a href="#home"
           class="hover:text-cyan-400 transition duration-300">
          Home
        </a>
      </li>

      <li>
        <a href="#about"
           class="hover:text-cyan-400 transition duration-300">
          About
        </a>
      </li>

      <li>
        <a href="#projects"
           class="hover:text-cyan-400 transition duration-300">
          Projects
        </a>
      </li>

      <li>
        <a href="#contact"
           class="hover:text-cyan-400 transition duration-300">
          Contact
        </a>
      </li>

    </ul>

  </div>
`;

// Add navbar at top
document.body.prepend(navbar);