// 1. Click Event
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button Clicked!');
});

// 2. Mouseover Event
document.getElementById('hoverDiv').addEventListener('mouseover', () => {
    console.log('Mouse hovered over the div!');
});

// 3. Input Event
document.getElementById('inputField').addEventListener('input', (e) => {
    console.log('Input value:', e.target.value);
});

// 4. Double Click Event
document.getElementById('dblClickBtn').addEventListener('dblclick', () => {
    alert('Button Double Clicked!');
});

// 5. Focus Event
document.getElementById('focusBtn').addEventListener('focus', () => {
    console.log('Button Focused!');
});
