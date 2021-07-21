import React from 'react'
import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const InputField = ({ half, type, label, name, handleChange, value, handleShowPassword }) => {
    return (
        <Grid item xs={12} sm={half ? 6:12}>
            <TextField 
            variant='outlined' 
            fullWidth
            type={type}
            label={label}
            name={name}
            onChange={handleChange}
            value={value}
            InputProps={ name === 'password'? {
                endAdornment:
                    (<InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                        {type === 'password'? <Visibility />:<VisibilityOff />}
                        </IconButton>
                    </InputAdornment>),
                }
            :null}
            
            // {if (name === 'password' (<VisibilityOff />)}
            // endAdorment={
            //     <InputAdornment position='end'>
            //         <IconButton onClick={handleShowPassword}>
                  
            //         </IconButton>
            //     </InputAdornment>
            // }
            />
        </Grid>
    )
}

export default InputField
