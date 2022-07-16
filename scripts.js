document.addEventListener("DOMContentLoaded", function() {
      // st-1

      const st1 = document.querySelector(".st-1");
      const overlay1 = document.querySelector(".overlay1");
      const st1box = document.querySelector(".st1box");

      // st-2

      const st2 = document.querySelector(".st-2");
      const overlay2 = document.querySelector(".overlay2");
      const st2box = document.querySelector(".st2box");

      // st-3

      const st3 = document.querySelector(".st-3");
      const overlay3 = document.querySelector(".overlay3");
      const st3box = document.querySelector(".st3box");

      // st-4

      const st4 = document.querySelector(".st-4");
      const overlay4 = document.querySelector(".overlay4");
      const st4box = document.querySelector(".st4box");

      // st-5

      const st5 = document.querySelector(".st-5");
      const overlay5 = document.querySelector(".overlay5");
      const st5box = document.querySelector(".st5box");

      // st-6

      const st6 = document.querySelector(".st-6");
      const overlay6 = document.querySelector(".overlay6");
      const st6box = document.querySelector(".st6box");

      // st-7

      const st7 = document.querySelector(".st-7");
      const overlay7 = document.querySelector(".overlay7");
      const st7box = document.querySelector(".st7box");

      // shape 2

      const shape1 = document.querySelector(".shape1");
      const shape2 = document.querySelector(".shape2");
      const statistic = document.querySelector(".statistic");

      // st-1
      st1.addEventListener("click", () => {
            if (overlay1.classList.contains("st-overlay1")) {
                  overlay1.classList.remove("st-overlay1");
                  st1box.classList.remove("back-grup1");
            } else {
                  overlay1.classList.add("st-overlay1");
                  st1box.classList.add("back-grup1");
            }
      });

      // st-2

      st2.addEventListener("click", () => {
            if (overlay2.classList.contains("st-overlay2")) {
                  overlay2.classList.remove("st-overlay2");
                  st2box.classList.remove("back-grup2");
            } else {
                  overlay2.classList.add("st-overlay2");
                  st2box.classList.add("back-grup2");
            }
      });

      // st-3

      st3.addEventListener("click", () => {
            if (overlay3.classList.contains("st-overlay3")) {
                  overlay3.classList.remove("st-overlay3");
                  st3box.classList.remove("back-grup3");
            } else {
                  overlay3.classList.add("st-overlay3");
                  st3box.classList.add("back-grup3");
            }
      });

      // st-4

      st4.addEventListener("click", () => {
            if (overlay4.classList.contains("st-overlay4")) {
                  overlay4.classList.remove("st-overlay4");
                  st4box.classList.remove("back-grup4");
            } else {
                  overlay4.classList.add("st-overlay4");
                  st4box.classList.add("back-grup4");
            }
      });

      // st-5

      st5.addEventListener("click", () => {
            if (overlay5.classList.contains("st-overlay5")) {
                  overlay5.classList.remove("st-overlay5");
                  st5box.classList.remove("back-grup5");
            } else {
                  overlay5.classList.add("st-overlay5");
                  st5box.classList.add("back-grup5");
            }
      });

      // st-6

      st6.addEventListener("click", () => {
            if (overlay6.classList.contains("st-overlay6")) {
                  overlay6.classList.remove("st-overlay6");
                  st6box.classList.remove("back-grup6");
            } else {
                  overlay6.classList.add("st-overlay6");
                  st6box.classList.add("back-grup6");
            }
      });

      // st-7

      st7.addEventListener("click", () => {
            if (overlay7.classList.contains("st-overlay7")) {
                  overlay7.classList.remove("st-overlay7");
                  st7box.classList.remove("back-grup7");
            } else {
                  overlay7.classList.add("st-overlay7");
                  st7box.classList.add("back-grup7");
            }
      });

      // shape2

      shape2.addEventListener("click", () => {
            if (statistic.classList.contains("active1")) {
                  statistic.classList.remove("active1");
                  overlay1.classList.remove("active3");
                  overlay2.classList.remove("active3");
                  overlay3.classList.remove("active3");
                  overlay4.classList.remove("active3");
                  overlay5.classList.remove("active3");
                  overlay6.classList.remove("active3");
                  overlay7.classList.remove("active3");
            } else {
                  statistic.classList.add("active1");
                  overlay1.classList.add("active3");
                  overlay2.classList.add("active3");
                  overlay3.classList.add("active3");
                  overlay4.classList.add("active3");
                  overlay5.classList.add("active3");
                  overlay6.classList.add("active3");
                  overlay7.classList.add("active3");
            }
      });

})