function getUserName()
{
    return document.querySelector('#nameInput').value;
}

function getTextArea()
{
    return document.querySelector('textarea');
}

function calculateIMC(weight, height)
{
    return (weight / Math.pow(height, 2) * 10000).toFixed(2);
}

document.querySelector('.calculate-btn').addEventListener('click', function(){

    const weight = document.querySelector('#weightInput').value;
    const height = document.querySelector('#heightInput').value;

    if (!weight && !height)
    {
        getTextArea().textContent = 'Preencha os campos com valores válidos.';
    }
    else
    {
        const imc = calculateIMC(weight, height);

        if (imc > 24.99)
        {
            getTextArea().textContent = `${getUserName()}, seu IMC é ${imc}. Você está acima do peso.`;
        }
        else if (imc < 18.50)
        {
            getTextArea().textContent = `${getUserName()}, seu IMC é ${imc}. Você está abaixo do peso.`;
        }
        else
        {
            getTextArea().textContent = `${getUserName()}, seu IMC é ${imc}. Seu peso está dentro da faixa saudável.`;
        }
    }
});