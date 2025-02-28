

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
        
        location.reload();
      })
      .catch((error) => console.error(error));
  }

  function viewPost(index) {
    window.location.href = `/view/${index}`; // Redirect to a dynamic route
    
  }