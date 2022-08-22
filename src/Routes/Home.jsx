import { useHistory } from 'react-router-dom';
import { Box, Input, Stack, Button } from "@chakra-ui/react"
import React, { useState } from 'react'

const Home = () => {
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
            const history = useHistory();
            const handleEmailChange = (event) => {
                        event.preventDefault();
                        setEmail(event.target.value);
            }
            const handlePasswordChange = (event) => {
                        event.preventDefault();
                        setPassword(event.target.value);
                        
            }
            const handleSubmit=(event) => {
                        event.preventDefault();
                        history.push("/dashboard")
            }
            return (

            <div>
            <Box style={{ width: "400px", margin: "auto" }}>
            <Stack spacing={3}>

           <Input placeholder='email' onChange={handleEmailChange} value={email} size='md' />

           <Input placeholder='password' onChange={handlePasswordChange} value={password} size='md' />
           <Button colorScheme='teal' onClick={handleSubmit} size='md'>
            Login
           </Button>
           </Stack>
          </Box>
            </div>
            )
}

export default Home