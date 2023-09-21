import { createTheme } from "@mui/material";


export const muiTheme = createTheme({
    typography: {
        fontFamily: [
            "IranSans",
            "IranSans-SemiBold",
            "IranSans-Medium",
            "IranSans-Light"
        ].join(",")
    }
})