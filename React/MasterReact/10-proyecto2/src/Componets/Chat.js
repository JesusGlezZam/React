import React, { useCallback, useEffect, useState } from 'react';
import { Box, Container, TextField, Button, List, ListItem, ListItemText, IconButton, Collapse, Typography } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

export  const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
        // Simular el mensaje inicial del bot cuando se carga el componente
        setMessages([
          { text: "Hola! Es un gusto saludarte. Soy tu asistente virtual de izzi y estoy aquí para ayudarte. Puedes escribir ASESOR en cualquier momento para ser atendido por un miembro de nuestro equipo", sender: 'bot' },
          { text: "Selecciona una opción:", sender: 'bot', options: [
            { text: "Deseo la llamada de un Asesor", value: 'call' },
            { text: "Deseo agendar una cita de servicios", value: 'schedule' }
          ]}
        ]);
      }, []);
    
  
    const handleSendMessage = useCallback(() => {
      if (input.trim()) {
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');
      }
    }, [input, messages]);
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSendMessage();
      }
    };

    const handleOptionClick = (option) => {
        setMessages([...messages, { text: option.text, sender: 'user' }]);
        // Aquí puedes agregar la lógica para manejar la opción seleccionada
      };
    
  
    const toggleChat = () => {
      setOpen(prevOpen => !prevOpen);
    };
  
    return (
        <Box className="chat-container">
        <Container>
          <Box className="chat-header" onClick={toggleChat}>
            <Typography variant="h6">Ayuda</Typography>
            <IconButton>
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
          <Collapse in={open}>
            <Box className="chat-body">
              <List className="chat-messages">
                {messages.map((msg, index) => (
                  <ListItem key={index} sx={{ textAlign: msg.sender === 'bot' ? 'left' : 'right' }}>
                    <ListItemText primary={msg.text} />
                  </ListItem>
                ))}
                {messages[messages.length - 1]?.options && (
                  <Box display="flex" flexDirection="column" mt={2}>
                    {messages[messages.length - 1].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        onClick={() => handleOptionClick(option)}
                        sx={{ mb: 1 }}
                      >
                        {option.text}
                      </Button>
                    ))}
                  </Box>
                )}
              </List>
              <TextField 
                fullWidth 
                placeholder="Escribe tu mensaje" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyPress={handleKeyPress} 
                variant="outlined" 
                className="chat-input"
              />
              <Button fullWidth variant="contained" onClick={handleSendMessage}>Enviar</Button>
            </Box>
          </Collapse>
        </Container>
      </Box>
    );
}

