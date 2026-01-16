import React, { useState, useEffect } from 'react';

interface AIAssistantProps {
  initialMessage?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ initialMessage = "Hello! I'm the Colorado Law Classic AI assistant. How can I help you today?" }) => {
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: initialMessage, isUser: false }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = React.useRef<HTMLDivElement>(null);

  // Sample responses for demo purposes
  const sampleResponses: Record<string, string> = {
    'registration': 'Registration for the Colorado Law Classic costs $150 for individual players and $600 for a team of four. This includes 18 holes of golf, lunch, a tournament gift, and entry into individual and team competitions. You can register on our website under the Registration page.',
    'date': 'The 14th Annual Colorado Law Classic will be held on Sunday, August 17th, 2025, at City Park Golf Course in Denver, Colorado.',
    'location': 'The tournament will be held at City Park Golf Course in Denver, Colorado.',
    'sponsor': 'We offer several sponsorship levels: Platinum ($2,500), Gold ($2,000), Hole Sponsor with Golf ($1,500), and Hole Sponsor without Golf ($1,000). Each level comes with different benefits. You can find more details on our Sponsorship page.',
    'contact': 'You can contact the tournament organizers through our Contact page, by email at info@coloradolawclassic.org, or by phone at (303) 555-1234.',
    'schedule': 'Check-in begins at 6:30 AM, with a shotgun start at 7:30 AM. Lunch is served on the course between 11:00 AM and 1:00 PM. The awards ceremony and reception will be from 1:30 PM to 3:00 PM.',
    'format': 'The Colorado Law Classic is played in a four-person scramble format. Each player tees off, the team selects the best shot, and all players hit from that location. This process continues until the ball is holed.',
    'charity': 'All proceeds from the Colorado Law Classic directly benefit scholarship funds at the University of Colorado Law School. These scholarships help make legal education more accessible to deserving students.',
    'dress code': 'City Park Golf Course requires proper golf attire. Collared shirts, slacks or golf shorts, and soft spike golf shoes or athletic shoes are required. Denim, t-shirts, and metal spikes are not permitted.',
    'weather': 'The tournament will proceed rain or shine unless conditions are deemed unsafe (lightning, severe weather). In case of cancellation due to unsafe conditions, we will reschedule the tournament for a later date.',
    'prizes': 'We have prizes for the top three teams, as well as individual contest winners (longest drive, closest to the pin, etc.). All prizes will be awarded during the post-tournament reception.',
    'refund': 'Cancellations made more than 30 days before the event will receive a full refund. Cancellations made within 30 days of the event will receive a 50% refund. No refunds will be issued for cancellations within 7 days of the event.',
    'tax': 'A portion of your registration fee is tax-deductible. For tax purposes, the approximate value of goods and services exchanged is $100 per player. The remainder may be tax-deductible as a charitable contribution.',
    'parking': 'Free parking is available at City Park Golf Course for all tournament participants.',
    'food': 'Breakfast will be provided during check-in, and lunch will be served on the course during the tournament. There will also be refreshments available at the post-tournament reception.',
    'help': 'I can answer questions about registration, sponsorship, tournament details, schedule, format, and more. Just ask me anything about the Colorado Law Classic!',
  };

  // Function to generate AI response
  const generateResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    let response = "I'm sorry, I don't have specific information about that. Please check our website for more details or contact us directly at info@coloradolawclassic.org.";
    
    // Check for keywords in the input
    for (const [keyword, answer] of Object.entries(sampleResponses)) {
      if (input.includes(keyword)) {
        response = answer;
        break;
      }
    }
    
    return response;
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    const userMessage = { text: inputText, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    
    // Simulate AI thinking and responding
    setTimeout(() => {
      const aiResponse = { text: generateResponse(inputText), isUser: false };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Colorado Law Classic AI Assistant</h2>
      
      {/* Chat container */}
      <div 
        ref={chatContainerRef}
        className="bg-white p-4 rounded-lg border border-gray-300 mb-4 h-64 overflow-y-auto"
      >
        {messages.map((message, index) => (
          <div key={index} className={`flex items-start mb-4 ${message.isUser ? 'justify-end' : ''}`}>
            <div 
              className={`rounded-lg p-3 max-w-xs md:max-w-md ${
                message.isUser 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-gray-800'
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-start mb-4">
            <div className="bg-blue-100 rounded-lg p-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Input area */}
      <div className="flex">
        <input 
          type="text" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-800"
          placeholder="Type your question here..."
        />
        <button 
          onClick={handleSendMessage}
          className="bg-blue-800 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Suggested questions */}
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">Suggested questions:</p>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setInputText("When is the tournament?")}
            className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition-colors"
          >
            When is the tournament?
          </button>
          <button 
            onClick={() => setInputText("How much is registration?")}
            className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition-colors"
          >
            How much is registration?
          </button>
          <button 
            onClick={() => setInputText("What sponsorship options are available?")}
            className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition-colors"
          >
            Sponsorship options?
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
