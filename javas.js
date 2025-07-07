// Typewriter Multiple Text Effect
document.addEventListener('DOMContentLoaded', () => {
  const messages = [
    "Welcome to My Portfolio",
    "I'm Maingi Tonny",
    "Cybersecurity Enthusiast",
    "Data Analyst | Content Writer | Graphic Designer",
    "Ajira Digital Program Graduate"
  ];

  const typeTarget = document.getElementById("typewriter");
  let msgIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeWriter() {
    const currentMsg = messages[msgIndex];

    if (typing) {
      if (charIndex < currentMsg.length) {
        typeTarget.innerHTML += currentMsg.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
      } else {
        typing = false;
        setTimeout(typeWriter, 1500); // pause before deleting
      }
    } else {
      if (charIndex > 0) {
        typeTarget.innerHTML = currentMsg.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, 50);
      } else {
        typing = true;
        msgIndex = (msgIndex + 1) % messages.length;
        setTimeout(typeWriter, 300);
      }
    }
  }

  typeWriter();
});


  tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#3B82F6',
                        secondary: '#10B981',
                        dark: '#1F2937',
                        light: '#F9FAFB',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                }
            }
        }


        document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          form.reset();
          successMessage.classList.remove("hidden");
          successMessage.classList.add("block");

          // Optional: hide the message after 5 seconds
          setTimeout(() => {
            successMessage.classList.add("hidden");
          }, 5000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Error submitting form.");
      }
    });
  }
});
