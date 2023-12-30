let IMC = (70 / Math.pow(170, 2) * 10000).toFixed(2)

document.querySelector('.calculate-btn').addEventListener('click', function(){
    document.querySelector('textarea').textContent = 'Ana seu IMC é ' + IMC;
});