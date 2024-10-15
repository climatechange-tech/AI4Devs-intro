document.getElementById('reverseButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    const reversedString = inputString.split('').reverse().join('');
    document.getElementById('reversedString').value = reversedString;
});

