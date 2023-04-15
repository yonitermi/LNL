var btn = document.getElementById('btn')
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = getElementById('name').value
    var email = getElementById('email').value
    var phone = getElementById('phone').value
    var message = getElementById('message').value

    var body = 'name: ' +name +'<br/> email: ' + email + '<br/> phone' + phone
    + '<br/> message' + message;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "yonitermi@gmail.com",
        Password : "mgyivqyqhksennvd",
        To : 'yonitermi@gmail.com',
        From : email,
        Phone : phone,
        Body : body
    }).then(
      message => alert(message)
    );
})

