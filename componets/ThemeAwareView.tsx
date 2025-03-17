import { View, ViewProps, StyleSheet } from 'react-native';
import { useTheme } from '@/constants/ThemeContext';

interface ThemeAwareViewProps extends ViewProps {
    backgroundColor?: boolean;
}

export function ThemeAwareView({ backgroundColor = true, style, ...props }: ThemeAwareViewProps) {
    const { isDark } = useTheme();

    return (
        <View
            style={[
                backgroundColor && {
                    backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                },
                style,
            ]}
            {...props}
        />
    );
}

export function getThemeColors(isDark: boolean) {
    return {
        background: isDark ? '#1a1a1a' : '#ffffff',
        surface: isDark ? '#2a2a2a' : '#f3f4f6',
        text: isDark ? '#ffffff' : '#1a1a1a',
        textSecondary: isDark ? '#9ca3af' : '#6b7280',
        primary: '#6366f1',
        border: isDark ? '#404040' : '#e5e7eb',
    };
}