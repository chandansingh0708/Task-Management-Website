import React, { useState } from 'react';

const MessageBox = ({callMessage,userId}) => {
  const [message, setMessage] = useState('');
  const [option, setOption] = useState('send');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  
  };

  const handleOptionChange = (e) => {
    setOption(e.target.value);
    
  };

  const handleSendMessage = async () => {
    if (option === 'send') {
      console.log("Message sent: ", message);
      callMessage(message,userId);
   
      // Implement your message sending logic here
    } else if (option === 'chatgpt') {
      window.location.href = 'https://www.chatgpt.com';
    }
    setMessage('');
   
    
    
  };

  return (
    <div className=" messResp h-5/6 bg-black">
      <div className="bg-black shadow-lg rounded-lg p-6 w-[50vw]" style={{ boxShadow: 'inset 0 0px 20px rgb(236, 72, 153)' }}>
        <h2 className="text-2xl text-white font-semibold mb-4">Admin Message Box</h2>
        <textarea
          className="w-full capitalize p-2 border rounded-lg mb-4 resize-none h-20 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message here...."
        />
        <div className="flex justify-between sm:gap-y-4 flex-wrap items-center mb-4">
          <select
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={option}
            onChange={handleOptionChange}
          >
            <option value="send">Send Message</option>
            <option value="chatgpt">Ask ChatGPT</option>
          </select>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
            onClick={handleSendMessage}
          >
            {option === 'send' ? 'Send' : 'Go to ChatGPT'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
