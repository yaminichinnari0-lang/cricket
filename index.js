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
document.getElementById("modal").innerHTML =
`
 <div class="modal-box">
    
    <span class="close" onclick="closeModal()">×</span>

    <h2>JOIN CRICKCONNECT</h2>
    <p class="sub">Choose how you'd like to be part of the cricket revolution.</p>

    <div class="card-container">

      <a href="#" onclick="openPlayerModal()" class="card">
        <div class="icon">👤</div>
        <h3>REGISTER AS PLAYER</h3>
        <p>Showcase your talent & get discovered by top coaches</p>
      </a>

      <a href="#" onclick="openCoachModal()" class="card2">
        <div class="icon">🎓</div>
        <h3>BECOME A COACH</h3>
        <p>Train grassroots talent & shape the future of cricket</p>
      </a>

    </div>

  </div>
</div>

<div id="playerModal" class="modal">
    <div class="modal-box">
        <span class="close" onclick="closePlayerModal()">x</span>
        <h2>PLAYER REGISTRATION</h2>
        <form action="https://formsubmit.co/yaminichinnari0@gmail.com" method="POST">
            <div class="row">
                <div>
                <p>FULL NAME *</p>
                <input type="text" placeholder="Enter you name" required>
                </div>
                <div>
                <p>AGE * </p>
                <input type="number" placeholder="your age" required>
                </div>
            </div>
            <div class="row">
                <div>
                <p>EMAIL *</p>
                <input type="email" placeholder="Enter your mail" required>
                </div>
                <div>
                <p>PHONE *</p>
                <input type="text" placeholder="your phone no" required>
                </div>
                </div>
                <div class="rowsingle">
                    <div>
                <p>VILLAGE/CITY *</p>
                <input type="text" placeholder="eg.,Rajasthan,Hyderabad" required>
                </div>
                </div>
            <div class="row">
                <div>
                <p>PLAYING ROLE *</p>
                <select>
                    <option>Batsman</option>
                    <option>Bowler</option>
                    <option>Wicket Keeper</option>
                    <option>All Rounder</option>
                </select>
                </div>
                <div>
                <P>EXPERIENCE</P>
                 <input type="number" placeholder="eg.,3years">
                 </div>
                </div>
                <div class="rowsingle">
                 <p>ABOUT YOU</p>
                 <textarea placeholder="Tell us about your cricket journey..."></textarea>
                 </div>
                 <div class="upload-box">
                 <label class="upload-label">📹 UPLOAD TALENT VIDEO</label>
  
                 <div class="upload-area" onclick="document.getElementById('videoInput').click()">
                 <p>⬆ Click to upload or drag & drop</p>
                <span>MP4, MOV, AVI • Max 50MB</span>
               </div>
               <input type="file" id="videoInput" accept="video/*" hidden>
                </div>
                 <div class="btn">
                 <button>SUBMIT REGISTRATION</button>
                 </div>
           
        </form>
    </div>
</div>
<div id="coachModal" class="modal">
    <div class="modal-box">
        <span class="close" onclick="closeCoachModal()">x</span>
        <h2>COACH REGISTRATION</h2>
        <form action="https://formsubmit.co/yaminichinnari0@gmail.com" method="POST">
            <div class="row">
                <div>
                <p>FULL NAME *</p>
                <input type="text" placeholder="Enter you name" required>
                </div>
                <div>
                <p>AGE * </p>
                <input type="number" placeholder="your age" required>
                </div>
            </div>
            <div class="row">
                <div>
                <p>EMAIL *</p>
                <input type="email" placeholder="Enter your mail" required>
                </div>
                <div>
                <p>PHONE *</p>
                <input type="text" placeholder="your phone no" required>
                </div>
                </div>
                <div class="rowsingle">
                    <div>
                <p>VILLAGE/CITY *</p>
                <input type="text" placeholder="eg.,Rajasthan,Hyderabad" required>
                </div>
                </div>
            <div class="row">
                <div>
                <p>SPECIALIZATION *</p>
                <select>
                    <option>Batsman Coach</option>
                    <option>Bowler Coach</option>
                    <option>Wicket Keeper Coach</option>
                    <option>All Rounder Coach</option>
                </select required>
                </div>
                <div>
                <P>EXPERIENCE *</P>
                 <input type="number" placeholder="eg.,10years" required>
                 </div>
                </div>
                <div class="rowsingle">
                 <p>CERTIFICATIONS *</p>
                 <input type="text" placeholder="eg.,BCCI Level 2,NCA Certified" required>
                 </div>
                <div class="rowsingle">
                 <p>ABOUT YOU *</p>
                 <textarea placeholder="Tell us about your coaching philosopy and experience..."></textarea>
                 </div>
                 <div class="btn1">
                 <button>SUBMIT REGISTRATION</button>
                 </div>
           
        </form>
    </div>
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