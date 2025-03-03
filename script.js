document.addEventListener('DOMContentLoaded', function() {
    // Function to add new links dynamically
    window.addNewLink = function(title, url, iconClass) {
        const linksContainer = document.querySelector('.links');
        const newLink = document.createElement('a');
        newLink.className = 'link-item';
        newLink.href = url;
        
        const icon = document.createElement('i');
        icon.className = iconClass + ' link-icon';
        
        const text = document.createTextNode(title);
        
        newLink.appendChild(icon);
        newLink.appendChild(text);
        linksContainer.appendChild(newLink);
        
        // Apply animation for the new link
        const linkCount = document.querySelectorAll('.link-item').length;
        newLink.style.animationDelay = `${0.1 * linkCount}s`;
    }
    
    // Example usage (uncomment to add):
    // addNewLink('Twitter', '#', 'fab fa-twitter');
});