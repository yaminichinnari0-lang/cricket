document.getElementById("header").innerHTML=
`
<div class="hero">🏏CRICKET BRIDGE</div>
        <nav>
            <a href="index.html">HOME</a>
            <a href="how.html">HOW IT WORKS</a>
            <a href="coaches.html">COACHES</a>
            <a href="about.html">ABOUT</a>
            <a href="contact.html">CONTACT</a>
            <button onclick="openModal()">Join Now</button>
        </nav>
`;
document.getElementById("footer").innerHTML =
`
<footer>
 <div class="footer-container" id="footer">

        <!-- Column 1 -->
        <div class="footer-col">
            <h2 class="footer-logo">🏏CRICKET BRIDGE</h2>
            <p>
                Bridging the gap between rural cricket talent and professional
                coaching. Every village deserves a chance to produce the next
                 cricket legend
            </p>
        </div>

        <!-- Column 2 -->
        <div class="footer-col">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Coaches</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <!-- Column 3 -->
        <div class="footer-col">
            <h3>Contact Info</h3>
            <p>📧 cricketconnect@gmail.com</p>
            <p>📞 +91 8074429408</p>
            <p>📍 Kakinada,India</p>
        </div>
        </div>
</footer>
`;
function openModal(){
  document.getElementById("modal").style.display = "block";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}
function openPlayerModal(){
  document.getElementById("modal").style.display = "none";
  document.getElementById("playerModal").style.display = "block";
}

function closePlayerModal(){
  document.getElementById("playerModal").style.display = "none";
}
function openCoachModal(){
  document.getElementById("modal").style.display = "none";
  document.getElementById("coachModal").style.display = "block";
}
function closeCoachModal(){
    document.getElementById("coachModal").style.display = "none";
}



document.getElementById("videoInput").addEventListener("change", function(){
  const file = this.files[0];
  if(file){
    document.querySelector(".upload-area p").innerText = file.name;
  }
});