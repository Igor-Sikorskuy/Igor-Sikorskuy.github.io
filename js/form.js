let reg_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let reg_phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i
let corr_email = false;
let corr_phone = false;
function onchange_form(elem)
{   
    if(elem.id == "email")
    {
        if(!(corr_email = reg_email.test(elem.value)))
        {
            alert("Неверный формат электронной почты! Введите в формате XXX@XXX.XXX");
        }
    }
    else
    {
        if(!(corr_phone = reg_phone.test(elem.value)))
        {
            alert("Неверный формат номера телефона!\nВведите в формате XXX-XXX-XXXX или XXXXXXXXXX");
        }
    }
    
    
    document.getElementById("send").disabled = !(corr_email && corr_phone);
 }