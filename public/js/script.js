

$(function() {
  $("#headertitle").slideDown(1000);
});
// delete post script

function deletePost(index) {
    
    fetch(`${index}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete post");
        }
        
        window.location.href = "/"; // Redirect to home page
      })
      .catch((error) => console.error(error));
  }

  function viewPost(index) {
    window.location.href = `/${index}`; // Redirect to a dynamic route
    
  }