const model = {
    conversations: null, // all conversations of user
    currentConversation: null, // current conversation dang hien thi cho nguoi dung
}

model.saveConversations = function(conversations) {
    model.conversations = conversations
}

model.saveCurrentConversation = function(conversation) {
    model.currentConversation = conversation
}

model.updateConversation = function(conversation) {
    if(model.conversations) {
        let foundIndex = model.conversations.findIndex(function(element) {
            return element.id == conversation.id
        })
        if(foundIndex >= 0) {
            model.conversations[foundIndex] = conversation
        } else {
            model.conversations.push(conversation)
        }

        if(model.currentConversation && model.currentConversation.id == conversation.id) {
            model.saveCurrentConversation(conversation)
        }
    }
}