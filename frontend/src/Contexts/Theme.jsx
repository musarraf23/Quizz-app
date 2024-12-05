import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const useThemeToggle = () => {
    const [theme, setTheme] = useTheme();
    return () => {
        setTheme(theme == 'dark' ? 'light' : 'dark');
    }
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <div className={`ThemeProviderContainer ${theme == 'dark' && 'dark bg-background text-foreground'}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}
