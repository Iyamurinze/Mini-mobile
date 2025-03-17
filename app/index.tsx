import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView, // Import ScrollView
    useColorScheme,
} from 'react-native';
import { router } from 'expo-router';
import { Moon, Sun } from 'lucide-react-native';
import { useTheme } from '@/constants/ThemeContext';

export default function LandingScreen() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { theme, setTheme, isDark } = useTheme();

    const handleSubmit = () => {
        // Here you would typically handle authentication
        router.replace('/(tabs)');
    };

    const getThemeStyles = (darkColor: string, lightColor: string) => {
        return isDark ? darkColor : lightColor;
    };

    const dynamicStyles = {
        container: {
            backgroundColor: getThemeStyles('#1a1a1a', '#ffffff'),
        },
        text: {
            color: getThemeStyles('#ffffff', '#1a1a1a'),
        },
        input: {
            backgroundColor: getThemeStyles('#2a2a2a', '#f3f4f6'),
            color: getThemeStyles('#ffffff', '#1a1a1a'),
        },
        button: {
            backgroundColor: '#6366f1',
        },
        buttonText: {
            color: '#ffffff',
        },
        themeButton: {
            backgroundColor: getThemeStyles('#2a2a2a', '#f3f4f6'),
        },
        activeThemeButton: {
            backgroundColor: '#6366f1',
        },
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={[styles.container, dynamicStyles.container]}>
                <View style={styles.header}>
                    <View style={styles.overlay} />
                    <Text style={[styles.title, dynamicStyles.text]}>MINI</Text>
                    <Text style={[styles.subtitle, dynamicStyles.text]}>
                        Empower your community through collective savings
                    </Text>
                </View>

                <View style={styles.themeSelector}>
                    <TouchableOpacity
                        style={[
                            styles.themeButton,
                            theme === 'light' && styles.activeThemeButton,
                        ]}
                        onPress={() => setTheme('light')}
                    >
                        <Sun size={20} color={theme === 'light' ? '#ffffff' : '#6366f1'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.themeButton,
                            theme === 'dark' && styles.activeThemeButton,
                        ]}
                        onPress={() => setTheme('dark')}
                    >
                        <Moon size={20} color={theme === 'dark' ? '#ffffff' : '#6366f1'} />
                    </TouchableOpacity>
                </View>

                <View style={styles.formContainer}>
                    <Text style={[styles.formTitle, dynamicStyles.text]}>
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </Text>

                    <TextInput
                        style={[styles.input, dynamicStyles.input]}
                        placeholder="Email"
                        placeholderTextColor={getThemeStyles('#9ca3af', '#6b7280')}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={[styles.input, dynamicStyles.input]}
                        placeholder="Password"
                        placeholderTextColor={getThemeStyles('#9ca3af', '#6b7280')}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={[styles.button, dynamicStyles.button]}
                        onPress={handleSubmit}
                    >
                        <Text style={[styles.buttonText, dynamicStyles.buttonText]}>
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.switchButton}
                        onPress={() => setIsLogin(!isLogin)}
                    >
                        <Text style={[styles.switchText, dynamicStyles.text]}>
                            {isLogin
                                ? "Don't have an account? Sign Up"
                                : 'Already have an account? Sign In'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, // Ensures the content can scroll
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    title: {
        fontSize: 48,
        fontWeight: '700',
        color: '#ffffff',
        textAlign: 'center',
        zIndex: 1,
    },
    subtitle: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 8,
        paddingHorizontal: 20,
        zIndex: 1,
    },
    themeSelector: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 20,
    },
    themeButton: {
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#f3f4f6',
    },
    activeThemeButton: {
        backgroundColor: '#6366f1',
    },
    formContainer: {
        padding: 20,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#f3f4f6',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#6366f1',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    switchButton: {
        marginTop: 16,
        alignItems: 'center',
    },
    switchText: {
        fontSize: 14,
        color: '#6366f1',
    },
});