import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { ArrowRight, TrendingUp } from 'lucide-react-native';
import { ThemeAwareView } from '@/componets/ThemeAwareView';
import { useTheme } from '@/constants/ThemeContext';

export default function HomeScreen() {
    const { isDark } = useTheme();
    const colors = {
        text: isDark ? '#ffffff' : '#1a1a1a',
        background: isDark ? '#1a1a1a' : '#ffffff',
        textSecondary: isDark ? '#9ca3af' : '#6b7280',
        surface: isDark ? '#2a2a2a' : '#ffffff',
        border: isDark ? '#404040' : '#e5e7eb',
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
            <ThemeAwareView style={[styles.header, { backgroundColor: colors.surface }]}>
                <Text style={[styles.greeting, { color: colors.text }]}>Welcome back!</Text>
                <Text style={[styles.subGreeting, { color: colors.textSecondary }]}>Your MINI overview</Text>
            </ThemeAwareView>

            <View style={styles.statsContainer}>
                <ThemeAwareView style={[styles.statCard, { backgroundColor: colors.surface }]}>
                    <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Active Groups</Text>
                    <Text style={[styles.statValue, { color: colors.text }]}>3</Text>
                </ThemeAwareView>
                <ThemeAwareView style={[styles.statCard, { backgroundColor: colors.surface }]}>
                    <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Total Contributed</Text>
                    <Text style={[styles.statValue, { color: colors.text }]}>$1,250</Text>
                </ThemeAwareView>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={[styles.sectionTitle, { color: colors.text }]}>Upcoming Payments</Text>
                    <Link href="/groups" asChild>
                        <TouchableOpacity style={styles.seeAll}>
                            <Text style={[styles.seeAllText, { color: '#6366f1' }]}>See All</Text>
                            <ArrowRight size={16} color="#6366f1" />
                        </TouchableOpacity>
                    </Link>
                </View>

                <ThemeAwareView style={[styles.paymentCard, { backgroundColor: colors.surface }]}>
                    <View style={styles.paymentInfo}>
                        <Text style={[styles.paymentGroup, { color: colors.text }]}>Business Growth Group</Text>
                        <Text style={[styles.paymentDue, { color: '#ef4444' }]}>Due in 2 days</Text>
                    </View>
                    <Text style={[styles.paymentAmount, { color: colors.text }]}>$200</Text>
                </ThemeAwareView>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={[styles.sectionTitle, { color: colors.text }]}>Group Goals</Text>
                    <TrendingUp size={20} color="#6366f1" />
                </View>

                <ThemeAwareView style={[styles.goalCard, { backgroundColor: colors.surface }]}>
                    <View style={styles.goalInfo}>
                        <Text style={[styles.goalTitle, { color: colors.text }]}>Emergency Fund</Text>
                        <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
                            <View style={[styles.progressFill, { width: '75%' }]} />
                        </View>
                    </View>
                    <Text style={[styles.goalProgress, { color: '#6366f1' }]}>75%</Text>
                </ThemeAwareView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
    },
    greeting: {
        fontSize: 24,
        fontWeight: '600',
    },
    subGreeting: {
        fontSize: 16,
        marginTop: 4,
    },
    statsContainer: {
        flexDirection: 'row',
        padding: 20,
        gap: 12,
    },
    statCard: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    statLabel: {
        fontSize: 14,
    },
    statValue: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 4,
    },
    section: {
        padding: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    seeAll: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    seeAllText: {
        fontSize: 14,
    },
    paymentCard: {
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    paymentInfo: {
        flex: 1,
    },
    paymentGroup: {
        fontSize: 16,
        fontWeight: '500',
    },
    paymentDue: {
        fontSize: 14,
        marginTop: 2,
    },
    paymentAmount: {
        fontSize: 18,
        fontWeight: '600',
    },
    goalCard: {
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    goalInfo: {
        flex: 1,
    },
    goalTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    progressBar: {
        height: 8,
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#6366f1',
        borderRadius: 4,
    },
    goalProgress: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 12,
    },
});