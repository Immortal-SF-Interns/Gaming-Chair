const menuItems = document.querySelectorAll(".menu-list li");

const sections = {
    home: document.getElementById("home-section"),
    products: document.getElementById("products-section"),
    about: document.getElementById("about-section"),
    contact: document.getElementById("contact-section"),
  };
  
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedPage = item.getAttribute("data-page");

      Object.values(sections).forEach((section) => {
        section.style.display = "none";
      });
  
      sections[selectedPage].style.display = "flex";
  
      menuItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });