(function(){
    let toInsertIframe = document.createElement("iframe");
    toInsertIframe.src = prompt("Please enter the URL for the IFrame (you can still switch to another tab during this time):");
    toInsertIframe.width = "100%";
    toInsertIframe.height = "500px";
    document.getElementById("edit-body_ifr").contentDocument.getElementById("tinymce").appendChild(toInsertIframe);

    if(prompt("You should be able to see the iframe now in the input box. Would you like to continue? (\"yes\" to continue, anything else for no.)") !== "yes"){
        alert("The insertion was cancelled. Reload to clear the input box, or just use backspace.");
        return;
    }

    /* 
    document.head.appendChild(document.createElement('script')).src = 'https://bubbybabur.github.io/SchoologyHacks/addiframe.js'
    */
    
})();