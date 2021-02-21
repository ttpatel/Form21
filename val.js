function validation(selector, regex) {
    console.log(selector.value)
    if (regex.test(selector.value)) {
        console.log(selector.value);
        return true;
    }
    return false;
}
function checkIfIsInvalid(selector, regex, onEvent) {
    selector.addEventListener(onEvent, (e) => {

        if (validation(selector, regex)) {
            console.log(selector.value);
            selector.classList.remove('is-invalid');
        }

    })
}
// const countries = [
//     { name: 'India', code: 'IN' },
//     { name: 'America', code: 'US' },
//     { name: 'Canada', code: 'CN' }
// ]

// const states = [
//     { name: 'Andhra Pradesh' },
//     { name: 'Assam' },
//     { name: 'Gujarat' },
//     { name: 'Maharastra' },
//     { name: 'Uttrakhand' },
//     { name: 'Uttar Pradesh' },
//     { name: 'Rajasthan' },
//     { name: 'Alaska' },
//     { name: 'California' },
//     { name: 'Connecticut' },
//     { name: 'Florida' },
//     { name: 'New York' },
//     { name: 'Texas' },
//     { name: 'Mississippi' },
//     { name: 'Alberta' },
//     { name: 'Ontario' },
//     { name: 'Manitoba' },
//     { name: 'Nova Scotia' },
//     { name: 'British Columbia' },
//     { name: 'Quebec' },
//     { name: 'New Brunswick' },
//     { name: 'Saskatchewan' },
// ]

// const cities = [
//     { name: 'Visakhapatnam' },
//     { name: 'Tirupati' },
//     { name: 'Vijayawada' },
//     { name: 'Guwahati' },
//     { name: 'Jorhat' },
//     { name: 'Sichar' },
//     { name: 'Ahemdabad' },
//     { name: 'Vadodara' },
//     { name: 'Gandhinagar' },
//     { name: 'Mumbai' },
//     { name: 'Pune' },
//     { name: 'Nashik' },
//     { name: 'Haridwar' },
//     { name: 'Rishikesh' },
//     { name: 'Dehradun' },
//     { name: 'Lucknow' },
//     { name: 'Agra' },
//     { name: 'Varansi' },
//     { name: 'Udaipur' },
//     { name: 'Jaipur' },
//     { name: 'Jaislmer' },
//     { name: 'Anchorage' },
//     { name: 'Juneau' },
//     { name: 'Sitka' },
//     { name: 'Los Angeles' },
//     { name: 'San Fransico' },
//     { name: 'Oakland' },
//     { name: 'Houstan' },
//     { name: 'Austin' },
//     { name: 'Dallas' },
//     { name: 'Hartford' },
//     { name: 'Stamford' },
//     { name: 'Danbery' },
//     { name: 'Mimai' },
//     { name: 'Orlando' },
//     { name: 'Tampa' },
//     { name: 'Rochester' },
//     { name: 'Albany' },
//     { name: 'Niagra Falls' },
//     { name: 'Toronto' },
//     { name: 'Sudbury' },
//     { name: 'Winnipeg' },
//     { name: 'Vancouver' },
//     { name: 'Monteral' },
//     { name: 'Ottawa' },
//     { name: 'Calgary' },
//     { name: 'Regina' },
//     { name: 'Mississauga' },
//     { name: 'Brampton' },
// ]
// window.onload = function () {
//     var htmlForCountry = document.getElementById("country");
//     var htmlForState = document.getElementById("state");
//     var htmlForCity = document.getElementById("city");

//     for (var country in countries) {
//         htmlForCountry.options[htmlForCountry.length] = new Option()
//     }

// }
var worldData = {
    USA: {
        California: ["Los Angeles", "San Diego", "Sacramento"],
        Texas: ["Houston", "Austin"],
        Florida: ["Miami", "Orlando", "Tampa"],
    },
    India: {
        Gujarat:["Ahemdabad","Vadodara","Gandhinagar"],
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        TamilNadu: ["Chennai", "Madurai"],
        Karnataka: ["Bangalore", "Mangalore"],
    },
    Canada: {
        Alberta: ["Calgary", "Edmonton", "Red Deer"],
        BritishColumbia: ["Vancouver", "Kelowna"],
        Manitoba: ["Winnipeg", "Brandon"],
        Ontario:["Toronto","Sudbury","Ottawa"],
    },
   
};
window.onload = function () {
    var countyList = document.getElementById("country"),
        stateList = document.getElementById("state"),
        cityList = document.getElementById("city");
    for (var country in worldData) {
        countyList.options[countyList.options.length] = new Option(country, country);
    }
    countyList.onchange = function () {
        stateList.length = 1;
        cityList.length = 1;
        if (this.selectedIndex < 1) return;
        for (var state in worldData[this.value]) {
            stateList.options[stateList.options.length] = new Option(state, state);
        }
    };
    countyList.onchange();
    stateList.onchange = function () {
        cityList.length = 1;
        if (this.selectedIndex < 1) return;
        var city = worldData[countyList.value][this.value];
        for (var i = 0; i < city.length; i++) {
            cityList.options[cityList.options.length] = new Option(city[i], city[i]);
        }
    };
};
document.getElementById('submit').addEventListener('click', (e) => {
    console.log('onSubmit');

    e.preventDefault();
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const emailRegex = document.getElementById('email');
    const mobileNumber = document.getElementById('phone');
    const userAddress = document.getElementById('address1');
    const userCheck = document.getElementById('invalidCheck');


    const regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    const regex1 = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z ]){0,3}$/;
    const regex2 = /^([0-9]){10}$/;
    const regex3 = /^[\s_\-\.\,\""\&0-9a-zA-Z]([\s_\-\.\,\""\&0-9a-zA-Z]){2,100}$/;
    const regex4 = / /;
    if (!validation(firstName, regex)) {
        firstName.classList.add('is-invalid');
        checkIfIsInvalid(firstName, regex, 'keyup');
    }
    if (!validation(lastName, regex)) {
        lastName.classList.add('is-invalid');
        checkIfIsInvalid(lastName, regex, 'keyup');
    }
    if (!validation(emailRegex, regex1)) {
        emailRegex.classList.add('is-invalid');
        checkIfIsInvalid(emailRegex, regex1, 'keyup');
    }
    if (!validation(mobileNumber, regex2)) {
        mobileNumber.classList.add('is-invalid');
        checkIfIsInvalid(mobileNumber, regex2, 'keyup');
    }
    if (!validation(userAddress, regex3)) {
        userAddress.classList.add('is-invalid');
        checkIfIsInvalid(userAddress, regex3, 'keyup');
    }
  
    if(document.getElementById('agree').checked) 
    { 
        alert("Form submitted Successfully");
        return true; 
    } 
        else { alert('Please Agree to terms&conditions.');
         return false;
         }
});


// let htmlForCountry = '';

// countries.forEach((country) => {
//     htmlForCountry += `<option value="${country.name}">${country.name} (${country.code})</option>`;
// })

// document.getElementById('country').innerHTML = htmlForCountry;


// let htmlForState = '';

// states.forEach((state) => {
//     htmlForState += `<option value="${state.name}">${state.name}</option>`;
// })

// document.getElementById('state').innerHTML = htmlForState;
// let htmlForCity = '';

// cities.forEach((city) => {
//     htmlForCity += `<option value="${city.name}">${city.name}</option>`;
// })
// document.getElementById('city').innerHTML = htmlForCity; 