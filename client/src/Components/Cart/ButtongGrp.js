import { ButtonGroup, Button ,styled } from '@mui/material'
import React from 'react'

const ButtongGrp = () => {
    return (
        <Compoenent>
            <StyledBtn>-</StyledBtn>
            <Button disabled>1</Button>
            <StyledBtn>+</StyledBtn>
        </Compoenent>
    )
}

export default ButtongGrp

const Compoenent = styled(ButtonGroup)`
    margin-top:30px
`

const StyledBtn = styled(Button)`
border-radius: 50%;

`