import React from 'react';

const Chat = () => {
  const messages = [
    { text: 'Hello', sender: 'me', time: '10:00 AM' },
    { text: 'Hi there!', sender: 'other', time: '10:01 AM' },
    { text: 'How are you?', sender: 'me', time: '10:02 AM' },
    { text: 'I\'m good, thanks!', sender: 'other', time: '10:03 AM' },
    // Add more messages here
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex justify-${message.sender === 'me' ? 'end' : 'start'} mb-2`}
          >
            <div
              className={`rounded-lg p-2 ${message.sender === 'me' ? 'bg-lime-600 text-white' : 'bg-gray-200 text-gray-700'} max-w-md`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs text-black">{message.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <button className="bg-lime-600 text-white rounded-lg px-4 py-2 mt-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
