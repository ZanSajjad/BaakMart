const rowHidden = document.querySelectorAll("#row-hidden");
const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("toggleButton");
  const logoMain = document.getElementById("logo-main");
  const logoMain1 = document.getElementById("logo-main1");
  const sidebarText = document.querySelectorAll(".sidebar-text");
  const sidebarImg = document.querySelectorAll(".sidebar-img");

  
  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("togglebutton1");
    

    // Toggle sidebar width classes
    if (sidebar.classList.contains("w-[250px]")) {
      // Collapse the sidebar
      sidebar.classList.remove("w-[250px]");
      sidebar.classList.add("w-[78px]");
  
   
    } else {
      // Expand the sidebar
      sidebar.classList.remove("w-[78px]");
      sidebar.classList.add("w-[250px]");

    }
  
    // Toggle logo visibility
    logoMain.classList.toggle("hidden");
    logoMain1.classList.toggle("hidden");
  
    // Toggle sidebar text visibility
    sidebarText.forEach((e) => {
      e.classList.toggle("hidden");
    });
  
    // Toggle sidebar image width
    sidebarImg.forEach((e) => {
      if (e.classList.contains("w-16")) {
        e.classList.remove("w-16");
      } else {
        e.classList.add("w-16");
      }
    });
  });
const editButtons = document.querySelectorAll("#dropdown-edit");

editButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Find the closest <tr> to the clicked edit button
    const trElement = event.target.closest("tr");

    if (!trElement) return;

    // Find the corresponding hidden row based on the closest tr (next row in this case)
    const hiddenRow = trElement.nextElementSibling;

    // Check if the hidden row exists and toggle its display
    if (hiddenRow && hiddenRow.id === "row-hidden") {
      const isHidden = hiddenRow.classList.contains("none");

      // Toggle the 'none' class for the hidden row
      if (isHidden) {
        hiddenRow.classList.remove("none");
      } else {
        hiddenRow.classList.add("none");
      }
    }
  });
});
