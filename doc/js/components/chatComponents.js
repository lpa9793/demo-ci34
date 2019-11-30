components.chat = `
    <section class="chat-container">
    <div class="aside-left">
    <div id="list-conversations" class="list-conversations">
    </div>
    
    <form id="form-add-conversation" class="form-add-conversation">
        <div class="input-wrapper">
            <input id="form-add-conversation-title-input" type="text" name="title" placeholder="Conversation title">
            <div id="title-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
            <input id="form-add-conversation-friend-email-input" type="email" name="friendEmail" placeholder="Your friend's email">
            <div id="friend-email-error" class="message-error"></div>
        </div>
        <button id="form-add-conversation-btn" class="btn-icon" type="submit">
            <i class="fas fa-plus"></i>
        </button>
    </form>
    </div>

    <div class="current-conversation">
        <div id="list-messages" class="list-messages">
        </div>
        <form id="form-chat" class="form-chat">
            <div class="input-wrapper">
                <input id="form-chat-input" type="text" name="message" placeholder="Enter your message">
            </div>
            <button id="form-chat-submit-btn" type="submit">Send</button>
        </form>
    </div>

    <div class="aside-right">
        <div id="detail-current-conversation" class="detail-current-conversation">
            
        </div>
            
        <button id="leave-conversation-btn" class="btn-icon"><i class="fas fa-minus"></i></button>
    </div>
    </section>
`