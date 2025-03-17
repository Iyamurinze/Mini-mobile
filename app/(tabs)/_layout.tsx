import { Tabs } from 'expo-router';
import { Home, Users, PiggyBank, Settings } from 'lucide-react-native';
import { useTheme } from '@/constants/ThemeContext';
import { ThemeAwareView } from '@/componets/ThemeAwareView';

export default function TabLayout() {
    const { isDark } = useTheme();
    const colors = {
        background: isDark ? '#1a1a1a' : '#ffffff',
        textSecondary: isDark ? '#9ca3af' : '#6b7280',
        surface: isDark ? '#2a2a2a' : '#ffffff',
        border: isDark ? '#404040' : '#e5e7eb',
    };

    return (
        <ThemeAwareView style={{ flex: 1 }}>
            <Tabs
                screenOptions={{
                    headerShown: true,
                    tabBarStyle: {
                        backgroundColor: colors.background,
                        borderTopColor: colors.border,
                    },
                    tabBarActiveTintColor: '#6366f1',
                    tabBarInactiveTintColor: isDark ? '#9ca3af' : '#6b7280',
                    headerStyle: {
                        backgroundColor: colors.background,
                    },
                    headerTintColor: isDark ? '#ffffff' : '#1a1a1a',
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="groups"
                    options={{
                        title: 'Groups',
                        tabBarIcon: ({ color, size }) => <Users size={size} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="contributions"
                    options={{
                        title: 'Contributions',
                        tabBarIcon: ({ color, size }) => <PiggyBank size={size} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        title: 'Settings',
                        tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
                    }}
                />
            </Tabs>
        </ThemeAwareView>
    );
}