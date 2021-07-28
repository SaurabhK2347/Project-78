var images = 
["mom.png", "dad.png", "brother.jpg", "me.jpg" ];

var names = ["My Beautiful Mom - Kajal Sharma", "My Awesome Dad - Shashi Kant", "My Naughty Borther - Shaurya Kishor", 
"The One And Only Me - Saurabh Kishor"];

var i = 0;
function update() {
i++;
var number_of_family_members_in_array = 4
if(i > number_of_family_members_in_array)
{
i = 0;
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}