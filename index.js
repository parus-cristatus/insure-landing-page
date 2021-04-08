
    document.addEventListener("DOMContentLoaded", function() { 

        let isMobile = window.matchMedia("only screen and (max-width: 1200px) and (orientation: portrait)").matches;
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
            headerClone.parentElement.setAttribute("aria-hidden", "false");
          } else {
            cloneToggle.checked = false;
            headerClone.parentElement.setAttribute("aria-hidden", "true");
          }
          
      };
  
        if (isMobile) {
        //   const newDiv = document.createElement("div");
        //   newDiv.setAttribute("aria-hidden", "true");
          document.body.insertBefore(headerClone, header);
        //   newDiv.appendChild(headerClone);
          window.addEventListener("scroll", handleScroll);
        } 
  



    //  FIXED HEADER ON SCROLL WITHOUT ANIMATION
    // const header = document.getElementById("mainHeader");
    // const siteHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    // let isMobile = window.matchMedia("only screen and (max-width: 1200px)").matches;    

    // function windowScroll() {
    //   header.classList.toggle("sticky", document.documentElement.scrollTop > siteHeight / 3);
    // };

    // if (isMobile) {
    //     window.onscroll = () => {windowScroll();};
    // }
   

  
  });