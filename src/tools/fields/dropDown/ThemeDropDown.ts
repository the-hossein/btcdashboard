import { createTheme } from "@mui/material/styles";
import { dir } from "console";

export const themeMenu = createTheme({
    components: {
        MuiSelect: {
            styleOverrides: {
                select: {
                    borderColor: "red",
                    outline: "none",
                },
                icon: {
                    color: "var(--dark-icon)",
                    dir: "rtl"
                }
            }
        }
    }
})