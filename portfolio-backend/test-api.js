const fetch = require('node-fetch');

const testContactAPI = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message'
      })
    });

    const data = await response.json();
    console.log('API Response:', data);
    
    if (response.ok) {
      console.log('✅ Backend API is working correctly!');
    } else {
      console.log('❌ Backend API returned an error:', data.error);
    }
  } catch (error) {
    console.error('❌ Error testing backend API:', error.message);
  }
};

testContactAPI(); 