/* var Slot = null;

change information to match appointments
function Slot(name, age,image) {
  this.name = name;
  this.age = age;
  this.image_alt = "A description of" + this.name;
  this.image = image;
}
*/
//var selectedSlots =[]
//var slot1 = new Slot("bird1", 1, "bird.jpg");
// ...slot2
// ...slot3


function Slot(time, location) {
  this.time = time;
  this.location = location;
}

function arrayRemove(arr, value) {
        return arr.filter(function(ele){
            return ele != value;
        });
    }
//Citation: code taken from https://love2dev.com/blog/javascript-remove-from-array/#:~:text=There%20are%20different%20methods%20and%20techniques%20you%20can,you%20to%20programatically%20remove%20elements%20from%20an%20Array


//For Test Appointments------------------------------------------------------
var selected_slot = [];
var selected_slot_id = [];

function selectedSlot(id) {

    var slotinfo = document.getElementById("appointment-"+id).innerHTML;
    var time = slotinfo.slice(0,32);
    var location = slotinfo.slice(44,52);
    var slot = new Slot(time, location);
    if (selected_slot_id.includes (id) == true){
        var index = selected_slot.findIndex(slot => slot.time === time)
        selected_slot.splice(index)
        console.log(slot);
        selected_slot_id = arrayRemove(selected_slot_id,id);
        }
    else
        {selected_slot_id.push(id);
        selected_slot.push(slot);}
    sessionStorage.setItem("myTestSlot", JSON.stringify(selected_slot))
    //the = sessionStorage.getItem("myTestSlot")
    //console.log(the)
    //console.log(selected_slot_id, selected_slot, selected_slot.length)
    return id;
}


function confirmSlot() {
    if((selected_slot_id.length)>1)
        { alert ("You can only select one slot!");
        }
    if((selected_slot_id.length)==0)
        { alert ("Selection should not be empty!");
        }
    if((selected_slot_id.length)==1)
        { window.location.href = 'Schedule Test Confirm.html';
        }
}

//For Vaccination Appointments-------------------------------

var selected_vaccine = [];
var selected_vaccine_id = [];

function selectedVac(id) {

    var slotinfo = document.getElementById("vaccine-"+id).innerHTML;
    var time = slotinfo.slice(0,32);
    var location = slotinfo.slice(44,52);
    var slot = new Slot(time, location);
    if (selected_vaccine_id.includes (id) == true){
        var index = selected_vaccine.findIndex(slot => slot.time === time)
        selected_vaccine.splice(index)
        console.log(slot);
        selected_vaccine_id = arrayRemove(selected_vaccine_id,id);
        }
    else
        {selected_vaccine_id.push(id);
        selected_vaccine.push(slot);}
    sessionStorage.setItem("myVaccineSlot", JSON.stringify(selected_vaccine))
    //the = sessionStorage.getItem("myTestSlot")
    //console.log(the)
    //console.log(selected_slot_id, selected_slot, selected_slot.length)
    return id;
}


function confirmVac() {
    if((selected_vaccine_id.length)>1)
    { alert ("You can only select one slot!");
    }
    if((selected_vaccine_id.length)==0)
    { alert ("Selection should not be empty!");
    }
    if((selected_vaccine_id.length)==1)
    { window.location.href = 'Schedule Covid Confirm.html';
    }
}
