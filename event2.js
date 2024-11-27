// 1. Contextmenu Event (Right Click)
document.getElementById('contextMenuBtn').addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Prevents the default right-click menu
    alert('Right-click detected on the button!');
});

// 2. Resize Event
window.addEventListener('resize', () => {
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});

// 3. Keypress Event
document.getElementById('keyInput').addEventListener('keypress', (e) => {
    console.log('Key pressed:', e.key);
});

// 4. Scroll Event
document.getElementById('scrollDiv').addEventListener('scroll', () => {
    console.log('Scroll position:', document.getElementById('scrollDiv').scrollTop);
});

// 5. Dragstart Event
document.getElementById('dragStartBtn').addEventListener('dragstart', () => {
    console.log('Dragging started!');
});
