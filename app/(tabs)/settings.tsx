import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { User, Bell, Shield, CircleHelp as HelpCircle, LogOut, ChevronRight } from 'lucide-react-native';
import { ThemeAwareView } from '@/componets/ThemeAwareView';
import { useTheme } from '@/constants/ThemeContext';
import { router } from 'expo-router';

export default function SettingsScreen() {
    const { isDark } = useTheme();
    const colors = {
        text: isDark ? '#ffffff' : '#1a1a1a',
        background: isDark ? '#1a1a1a' : '#ffffff',
        textSecondary: isDark ? '#9ca3af' : '#6b7280',
        surface: isDark ? '#2a2a2a' : '#ffffff',
        border: isDark ? '#404040' : '#e5e7eb',
    };

    const settingsSections = [
        {
            title: 'Account',
            items: [
                { icon: User, label: 'Profile Information', route: '/profile' },
                { icon: Bell, label: 'Notifications', route: '/notifications' },
                { icon: Shield, label: 'Security', route: '/security' },
            ],
        },
        {
            title: 'Support',
            items: [
                { icon: HelpCircle, label: 'Help Center', route: '/help' },
            ],
        },
    ];

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
            <ThemeAwareView style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
                <View style={styles.profileSection}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>JD</Text>
                    </View>
                    <View>
                        <Text style={[styles.name, { color: colors.text }]}>John Doe</Text>
                        <Text style={[styles.email, { color: colors.textSecondary }]}>john.doe@example.com</Text>
                    </View>
                </View>
            </ThemeAwareView>

            {settingsSections.map((section, index) => (
                <View key={index} style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>{section.title}</Text>
                    {section.items.map((item, itemIndex) => (
                        <ThemeAwareView key={itemIndex} style={[styles.settingItem, { backgroundColor: colors.surface }]}>
                            <View style={styles.settingItemLeft}>
                                <item.icon size={20} color={colors.textSecondary} />
                                <Text style={[styles.settingItemLabel, { color: colors.text }]}>{item.label}</Text>
                            </View>
                            <ChevronRight size={20} color={colors.textSecondary} />
                        </ThemeAwareView>
                    ))}
                </View>
            ))}

            <TouchableOpacity
                style={[styles.logoutButton, { backgroundColor: colors.surface }]}
                onPress={() => router.push('/(tabs)')}
            >
                <LogOut size={20} color="#ef4444" />
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#6366f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
    },
    email: {
        fontSize: 14,
        marginTop: 2,
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 12,
        marginBottom: 8,
    },
    settingItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    settingItemLabel: {
        fontSize: 16,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 16,
        margin: 20,
        borderRadius: 12,
        justifyContent: 'center',
    },
    logoutText: {
        color: '#ef4444',
        fontSize: 16,
        fontWeight: '500',
    },
});