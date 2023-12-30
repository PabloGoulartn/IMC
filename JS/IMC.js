function getUserName()
{
    return document.querySelector('#nameInput').value;
}

function getTextArea()
{
    return document.querySelector('textarea');
}

function calculateIMC()
{
    const weight = document.querySelector('#weightInput').value;
    const height = document.querySelector('#heightInput').value;

    if (weight && height)
        return (weight / Math.pow(height, 2) * 10000).toFixed(2);
    else
    {
        getTextArea().textContent = '';
        return 'Preencha os campos';
    }
}

document.querySelector('.calculate-btn').addEventListener('click', function(){
    if (calculateIMC() > 24.99)
    {
        getTextArea().textContent = `${getUserName()}, seu IMC é ${calculateIMC()}. Você está acima do peso. `;
    }
    else if (calculateIMC() < 18.50)
    {
        getTextArea().textContent = `${getUserName()}, seu IMC é ${calculateIMC()}. Você está abaixo do peso. `;
    }
});