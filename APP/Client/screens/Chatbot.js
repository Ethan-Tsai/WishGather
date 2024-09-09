import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const WishGatherChatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([{ type: 'bot', text: '歡迎來到解籤！有什麼問題嗎？' }]);

  const addMessage = (content, type) => {
    setMessages(prevMessages => [...prevMessages, { type, text: content }]);
  };

  const handleSend = async () => {
    if (userMessage.trim() === '') return;

    addMessage(userMessage, 'user');
    setUserMessage('');

    try {
      const apiKey = 'AIzaSyCVwhW9XKHti21w_aqlK5FSdHOgx3LDO04';  // 請在這裡填入你的API Key
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [
                {
                  text: userMessage
                }
              ]
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "對不起，我目前無法處理您的請求。";
      addMessage(botMessage, 'bot');
    } catch (error) {
      console.error('Error:', error);
      addMessage('Error: 無法連線到伺服器。', 'bot');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>你好</Text>
        <Text style={styles.subtitle}>歡迎使用WishGather解籤功能</Text>
      </View>

      <ScrollView style={styles.messagesArea} contentContainerStyle={{ paddingBottom: 10 }}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageBox,
              msg.type === 'user' ? styles.userMessageBox : styles.botMessageBox
            ]}
          >
            <Text style={msg.type === 'user' ? styles.userMessage : styles.botMessage}>
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.typingArea}>
        <TextInput
          style={styles.input}
          value={userMessage}
          onChangeText={setUserMessage}
          placeholder="請輸入抽到的籤詩與問題"
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  messagesArea: {
    flex: 1,
    marginBottom: 10,
  },
  messageBox: {
    maxWidth: '80%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  userMessageBox: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(135,24,68)',
  },
  botMessageBox: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgb(237,225,217)',
  },
  userMessage: {
    color: 'rgb(237,225,217)',
  },
  botMessage: {
    color: '#000',
  },
  typingArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default WishGatherChatbot;
