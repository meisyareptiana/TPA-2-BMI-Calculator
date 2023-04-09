function calculateBMI(){
    // Get height and weight input value
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    //Alert message when the input field is not filled
    if(height == '' || weight == ''){
        alert('Please fill the input fields first!');
        return;
    }
    //Calculate BMI
    height = height/100
    let BMI = (weight/(height*height));
    BMI = BMI.toFixed(1);

    document.getElementById('BMI').innerHTML = BMI;

    //Determine categories
    let categories='';
    if(BMI < 18.5){
        categories = "Underweight";
    }else if(BMI >= 18.5 && BMI < 25){
        categories = "Normal weight";
    }else if(BMI >= 25 && BMI < 30){
        categories = "Overweight";
    }else{
        categories = "Obesity";
    }
    //Display the result
    document.getElementById('message').innerHTML = `Which means you are <span id="categories">${categories}</span>`
    
}

function resetBMI(){
    window.location.reload();
}