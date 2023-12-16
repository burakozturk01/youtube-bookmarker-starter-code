(() => {
    const deleteAllButton = document.createElement("button");

    deleteAllButton.textContent = "Delete all bookmarks.";
    deleteAllButton.className = "bookmark";
    deleteAllButton.onclick = () => {
        console.log("clicked");
        chrome.storage.sync.clear(() => {
            const done = document.createElement("p");
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                done.textContent = chrome.runtime.lastError;
            } else {
                console.log("Data cleared successfully");
                done.textContent = "Data cleared successfully";
            }
            deleteAllButton.after(done);
          });
    };
    
    const title = document.getElementsByClassName("container")[0];
    title.textContent = "Delete all bookmarks saved from all the videos";
    title.appendChild(deleteAllButton);
})();