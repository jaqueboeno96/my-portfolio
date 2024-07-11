import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
    
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.secondary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        }
    }))
   

    return (
      <>
        <StyledButton>
            {children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton
  