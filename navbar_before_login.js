function navbar() {
    return `<div class="fixed_header">
    <div class="navbar">
        <div class="logo">
            <img src="./images/logo.png" >
        </div>
        <div class="options">
            <p><a href="Doctors.html">Doctors</a> <br> <span class="line"></span> <a>Consult <br> Online</a>
            </p>
            <p><a href="pharmacyy.html">Pharmacy</a> <br><span class="line"></span> <a>Medicnes & <br> other
                    products</a> </p>
            <p><a href="">Lab Test</a> <br> <span class="line"></span> <a> Health
                    <br>check-ups</a> </p>
            <p><a href="Blog.html">Ambulance</a> <br> <span class="line"></span> <a>Latest <br>Updates</a>
            <p><a href="">Updates</a> <br> <span class="line"></span> <a>Latest <br>Updates</a>
            </p>
            <img class="cart" src="cart.png" alt="">
            <a onclick="openForm()"><img class="user-profile" src="./opoloimages/user-profilee.webp" alt="user-profile"></a>


         </div>
        </div>
    </div>`;
    
}

export default navbar;