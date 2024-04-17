var dev_btn = document.getElementById("developer");
var cyb_btn = document.getElementById("cybersecurity");

function fun_developer()
{
    
    var dev_div = document.getElementById("content-div");


    dev_btn.style.backgroundColor = "blue";
    dev_btn.style.color = "azure";

    cyb_btn.style.backgroundColor = "white";
    cyb_btn.style.color = "black";

    
    dev_div.innerHTML = `
<div id="card-box">
<div id="card">
    <div id="image-container">
        <img src="Unknown_Member.jpg" alt="image">
    </div>
    <div id="text-container">
    <b>Project 1</b><br><br>
    This is the description of project 1
    <br>Tech Stack : a,b,c,d
    <p>View here</p>
    </div>
</div>

<div id="card">
    <div id="image-container">
        <img src="Unknown_Member.jpg" alt="image">
    </div>
    <div id="text-container">
    <b>Project 1</b><br><br>
    This is the description of project 1
    <br>Tech Stack : a,b,c,d
    <p>View here</p>
    </div>
</div>

<div id="card">
    <div id="image-container">
        <img src="Unknown_Member.jpg" alt="image">
    </div>
    <div id="text-container">
    <b>Project 1</b><br><br>
    This is the description of project 1
    <br>Tech Stack : a,b,c,d
    <p>View here</p>
    </div>
</div>

<div id="card">
    <div id="image-container">
        <img src="Unknown_Member.jpg" alt="image">
    </div>
    <div id="text-container">
    <b>Project 1</b><br><br>
    This is the description of project 1
    <br>Tech Stack : a,b,c,d
    <p>View here</p>
    </div>
</div>
</div>

`;
}

function fun_cybersecurity()
    {
    var cyber_div = document.getElementById("content-div");
    dev_btn.style.backgroundColor = "white";
    dev_btn.style.color = "black";

    cyb_btn.style.backgroundColor = "blue";
    cyb_btn.style.color = "azure";

        cyber_div.innerHTML = `
<div id="card-box">
<div id="card">
    <div id="image-container">
        <img src="Unknown_Member.jpg" alt="image">
    </div>
    <div id="text-container">
    <b>Project 2</b><br><br>
    This is the description of project 1
    <br>Tech Stack : a,b,c,d
    <p>View here</p>
    </div>
</div>

<div id="card">
    <div id="image-container">
        <img src="Unknown_Member.jpg" alt="image">
    </div>
    <div id="text-container">
    <b>Project 2</b><br><br>
    This is the description of project 1
    <br>Tech Stack : a,b,c,d
    <p>View here</p>
    </div>
</div>

<div id="card">
    <div id="image-container">
        <img src="Unknown_Member.jpg" alt="image">
    </div>
    <div id="text-container">
    <b>Project 2</b><br><br>
    This is the description of project 1
    <br>Tech Stack : a,b,c,d
    <p>View here</p>
    </div>
</div>

<div id="card">
    <div id="image-container">
        <img src="Unknown_Member.jpg" alt="image">
    </div>
    <div id="text-container">
    <b>Project 2</b><br><br>
    This is the description of project 1
    <br>Tech Stack : a,b,c,d
    <p>View here</p>
    </div>
</div>
</div>

   
        `;


    
}
