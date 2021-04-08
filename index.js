
    document.addEventListener("DOMContentLoaded", function() { 

        let isMobile = window.matchMedia("only screen and (max-width: 1200px)").matches;
        const header = document.getElementById("mainHeader");
        const headerClone = header.cloneNode(true);
        headerClone.id = "cloneHeader";
        headerClone.classList.add("clone");
  
        function handleScroll() {
            
          
          let cloneToggle = headerClone.children[0].children[1];
          let toggle = header.children[0].children[1];
          let isActive = headerClone.classList.contains("show");
          const siteHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
          headerClone.classList.toggle("show", document.documentElement.scrollTop > siteHeight / 3);
          
          if (isActive) {
            toggle.checked = false;
            headerClone.setAttribute("aria-hidden", "false");
            header.setAttribute("aria-hidden", "true");
          } else {
            cloneToggle.checked = false;
            headerClone.setAttribute("aria-hidden", "true");
            header.setAttribute("aria-hidden", "false");
          }
          
      };
  
        if (isMobile) {
          document.body.insertBefore(headerClone, header);
          headerClone.setAttribute("aria-hidden", "true");
          window.addEventListener("scroll", handleScroll);
          document.querySelectorAll(".nav-mobile-toggle").forEach((el) => {
              el.addEventListener("change", function() {
                  this.checked ? this.setAttribute("aria-expanded", "true") : this.setAttribute("aria-expanded", "false");
              });
          });
        } 
   

  
  });