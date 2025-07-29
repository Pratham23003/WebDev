//get DOM elements
const getForm = document.querySelector('form');
const getResultDiv = document.getElementById('result-btn');
const getBMIGuideUnderWeight = document.querySelector('#underWeight');
const getBMIGuideNormalRange = document.querySelector('#normalRange');
const getBMIGuideOverWeight = document.querySelector('#overWeight');

//getting weight-guide paragraphs to clear the output later
const allGuideParagraphs = document.querySelectorAll('.weight-guide');

getForm.addEventListener('submit', (event) => {
    event.preventDefault(); //prevents default behaviour of the form 

    //clearing previous outputs
    getResultDiv.innerHTML = ""; //clear any old BMI value or error message
    allGuideParagraphs.forEach(p => p.classList.remove('active')); //clear all the highlights

    //get height and weight values
    const heightVal = parseFloat(document.querySelector('#height').value);
    const weightVal = parseFloat(document.querySelector('#weight').value);
    
    //checks
    if(heightVal > 270){//tallest man to ever exist 
        getResultDiv.innerHTML = `Are you <a href = "https://www.google.com/search?q=robert+wadlow">Robert Wadlow</a> ? <p>Please provide a valid height (cm).</p>`;
        return; //stop execution if height invalid
    }
    else if(weightVal > 635){//heaviest man to ever exist
        getResultDiv.innerHTML = "Please provide a valid weight (kg)";
        return; //stop execution if weight invalid
    }
    else if(weightVal === '' || weightVal <= 0 || isNaN(weightVal)){
        getResultDiv.innerHTML = "Please provide a valid weight (kg)";
        return; //stop execution if weight invalid 
    }
    else if(heightVal === '' || heightVal <= 0 || isNaN(heightVal)){
        getResultDiv.innerHTML = "Please provide a valid height (cm)";
        return; //stop execution if height invalid
    }
    else{
        const finalBMI = (weightVal / ((heightVal**2)/10000)).toFixed(2);
        getResultDiv.innerHTML = `Your BMI is : ${finalBMI}`;
        
        //highlighting the BMI
        if(finalBMI <= 18.6){
            getBMIGuideUnderWeight.classList.add("active");
        }
        else if (finalBMI > 18.6 && finalBMI <= 24.9){  
            getBMIGuideNormalRange.classList.add("active");
        }
        else if (finalBMI > 24.9 && finalBMI <= 29.9){
            getBMIGuideOverWeight.classList.add("active");
        }
        else{
            getBMIGuideOverWeight.classList.add("active");
            alert('Ghat khaya kar oye !');
        }
    }
});