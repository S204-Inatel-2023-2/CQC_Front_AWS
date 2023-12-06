// App.js

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Substitua a URL pelo seu servidor Flask
    const apiUrl = 'https://7x3nasz0vi.execute-api.us-east-2.amazonaws.com/dev';

    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View>
      <Text>{data ? data.message : 'Loading...'}</Text>
    </View>
  );
};

export default App;
