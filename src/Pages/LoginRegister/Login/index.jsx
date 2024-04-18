import React from 'react';
import { Typography, Stack, InputBase, Button } from '@mui/material';
import { login } from '../../../Store/Slices/Auth';
import { Link } from 'react-router-dom';
import useFormFields from '../../../Utils/useFormFields';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const Login = ({ handleChangePageType }) => {
    const [fields, handleChange] = useFormFields()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
          axios.post('http://localhost:1337/api/auth/local',fields)
          .then(response=>{
            console.log(response)
            dispatch(login({
              user:response.data.user,
              token:response.data.jwt
            }))
          })
          .catch(err=>console.log(err))
      };
    return (
        <>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                backgroundColor: "#F3F3F3",
                padding: { lg: '35px 12%', md: "35px 12%", sm: '35px 5%', xs: '35px 2%' }
            }}>
                <Stack sx={{
                    padding: { lg: '10px 17%', md: '10px', sm: '10px', xs: '10px' },
                    color: 'black',
                    alignItems: 'center'
                }}>

                    <Typography variant="h5" >
                        Login
                    </Typography>
                </Stack>

                <Stack spacing={2}
                    sx={{
                        padding: { lg: '20px 17%', md: '20px', sm: '20px', xs: '20px' },
                        alignItems: 'center'
                    }}
                >
                    <InputBase name='identifier' id='identifier' onChange={handleChange} placeholder="Email" sx={{
                        width: { lg: '50%', md: '50%', sm: '100%', xs: '100%' },
                        height: '45px',
                        backgroundColor: '#e6e6e6',
                        borderRadius: '1px',
                        padding: '10px 15px',
                    }}>

                    </InputBase>

                    <InputBase name='password' onChange={handleChange} placeholder="Password" sx={{
                        width: { lg: '50%', md: '50%', sm: '100%', xs: '100%' },
                        height: '45px',
                        backgroundColor: '#e6e6e6',
                        borderRadius: '1px',
                        padding: '10px 15px',
                    }}>

                    </InputBase>

                    <Button onClick={handleSubmit} variant='contained'
                        sx={{
                            width: '95px',
                            height: '40px',
                            padding: '6px 0px',
                            fontSize: '16px',
                            borderRadius: '2px',
                            backgroundColor: '#931817',
                            '&:hover': { backgroundColor: '#7D1414' }
                        }}>
                        SIGN IN
                    </Button>
                    <Button sx={{ color: '#931817' }} onClick={handleChangePageType} variant="body2">
                        {"Don't have an account? Register"}
                    </Button>
                    <Typography>or <Link to={'/'} style={{ color: '#931817' }}>Return to Store</Link></Typography>

                </Stack>
            </Stack>
        </>
    );
}

export default Login;
