const view = {}

view.showComponent = function(name) {
    switch(name) {
        case 'register': {
            // hiển thị html lên màn hình
            let app = document.getElementById('app')
            app.innerHTML = components.register

            // gán sự kiện cho các thẻ
            let link = document.getElementById('register-link')
            link.onclick = linkClickHandler

            let form = document.getElementById('register-form')
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent('logIn')
            }

            function formSubmitHandler(event) {
                event.preventDefault() // chặn sự kiện mặc định, không gửi thông tin lên thanh địa chỉ
                
                // 1. lấy thông tin user
                let registerInfo = {
                    firstname: form.firstname.value,
                    lastname: form.lastname.value,
                    email: form.email.value,
                    password: form.password.value,
                    confirmPassword: form.confirmPassword.value
                }

                // 2. kiểm tra (validate) thông tin
                let validateResult = [
                    view.validate(registerInfo.firstname, 'firstname-error', 'Invalid firstname'),
                    view.validate(registerInfo.lastname, 'lastname-error', 'Invalid lastname'),
                    view.validate(registerInfo.email && registerInfo.email.includes('@'), 'email-error', 'Invalid email'),
                    view.validate(registerInfo.password && registerInfo.password.length >= 6, 'password-error', 'Invalid password'),
                    view.validate(registerInfo.confirmPassword && registerInfo.confirmPassword.length >= 6 && registerInfo.confirmPassword == registerInfo.password,
                        'confirmpassword-error',
                        'Password not match')
                ]

                // 3. submit thông tin
                if(allPassed(validateResult)) {
                    controller.register(registerInfo)
                }
            }
            break
        }
        case 'logIn': {
            let app = document.getElementById('app')
            app.innerHTML = components.logIn

            let link = document.getElementById('login-link')
            link.onclick = linkClickHandler

            let form = document.getElementById('login-form')
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent('register')
            }

            function formSubmitHandler(event) {
                event.preventDefault()

                let loginInfo = {
                    email: form.email.value,
                    password: form.password.value
                }

                let validateLogInResult = [
                    view.validate(loginInfo.email, 'email-error', 'Invalid email'),
                    view.validate(loginInfo.password, 'password-error', 'Invalid password')
                ]

                if(allPassed(validateLogInResult)) {
                    controller.logIn(loginInfo)
                }
            }
            break
        }
        case 'chat': {
            let app = document.getElementById('app')
            app.innerHTML = components.nav + components.chat

            controller.loadConversations()
            controller.setupDatabaseChange()

            // hien thi profile email
            view.setText('user-email', firebase.auth().currentUser.email)

            let btnSignOut = document.getElementById('sign-out-btn')
            btnSignOut.onclick = signOut

            function signOut() {
                firebase.auth().signOut()
            }

            let formChat = document.getElementById('form-chat')
            formChat.onsubmit = formChatSubmitHandler

            let formAddConversation = document.getElementById('form-add-conversation')
            formAddConversation.onsubmit = formAddConversationSubmitHandler

            let btnLeaveConversation = document.getElementById('leave-conversation-btn')
            btnLeaveConversation.onclick = leaveConversation

            function leaveConversation() {
                console.log('you have left convo')
                controller.leaveConversation()
            }

            function formChatSubmitHandler(event) {
                event.preventDefault()

                // 1. get messageContent
                let messageContent = formChat.message.value.trim()
               
                // 2. create message from messageContent
                // 3. update message to currentConversation.messages
                if(messageContent) {
                    controller.addMessage(messageContent) // sang controller thuc hien chuc nang nhap message va update message len database
                }
            }

            function formAddConversationSubmitHandler(event) {
                event.preventDefault()
                // get info
                let title = formAddConversation.title.value
                let friendEmail = formAddConversation.friendEmail.value

                // validate info
                let validateResult = [
                    view.validate(title, 'title-error', 'Title required'),
                    view.validate(friendEmail, 'friend-email-error', 'Email required')
                ]
                // submit info
                if(allPassed(validateResult)) {
                    controller.addConversation(title, friendEmail)
                }
            }
            break
        }
        case 'loading': {
            let app = document.getElementById('app')
            app.innerHTML = components.loading
            
            break
        }
    }
}

view.setText = function (id,text) {
    document.getElementById(id).innerText = text
}

view.validate = function(condition, idErrorTag, messageError) {
    if(condition) {
        view.setText(idErrorTag, '')
        return true
    } else {
        view.setText(idErrorTag, messageError)
        return false
    }
}

view.disable = function(id) {
    document.getElementById(id).setAttribute('disabled', true)
}

view.enable = function(id) {
    document.getElementById(id).removeAttribute('disabled')
}

function allPassed(validateResult) {
    for(let validate of validateResult) {
        if(!validate) {
            return false
        }
    }
    return true
}

function allPassed(validateLogInResult) {
    for(let validate of validateLogInResult) {
        if(!validate) {
            return false
        }
    }
    return true
}