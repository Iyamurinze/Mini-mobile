import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Check, Clock, CircleAlert as AlertCircle } from 'lucide-react-native';
import { ThemeAwareView } from '@/componets/ThemeAwareView';
import { useTheme } from '@/constants/ThemeContext';

export default function ContributionsScreen() {
    const { isDark } = useTheme();
    const colors = {
        text: isDark ? '#ffffff' : '#1a1a1a',
        background: isDark ? '#1a1a1a' : '#ffffff',
        textSecondary: isDark ? '#9ca3af' : '#6b7280',
        surface: isDark ? '#2a2a2a' : '#ffffff',
        border: isDark ? '#404040' : '#e5e7eb',
    };

    const contributions = [
        {
            id: 1,
            group: 'Business Growth Group',
            amount: 200,
            date: '2024-01-15',
            status: 'completed',
        },
        {
            id: 2,
            group: 'Emergency Fund Circle',
            amount: 100,
            date: '2024-01-22',
            status: 'pending',
        },
        {
            id: 3,
            group: 'Wedding Savings',
            amount: 300,
            date: '2024-01-10',
            status: 'missed',
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return '#22c55e';
            case 'pending':
                return '#eab308';
            case 'missed':
                return '#ef4444';
            default:
                return '#6b7280';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <Check size={20} color="#22c55e" />;
            case 'pending':
                return <Clock size={20} color="#eab308" />;
            case 'missed':
                return <AlertCircle size={20} color="#ef4444" />;
            default:
                return null;
        }
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.summary}>
                <ThemeAwareView style={[styles.summaryCard, { backgroundColor: colors.surface }]}>
                    <Text style={[styles.summaryLabel, { color: colors.textSecondary }]}>Total Contributed</Text>
                    <Text style={[styles.summaryValue, { color: colors.text }]}>$1,250</Text>
                </ThemeAwareView>
                <ThemeAwareView style={[styles.summaryCard, { backgroundColor: colors.surface }]}>
                    <Text style={[styles.summaryLabel, { color: colors.textSecondary }]}>Pending</Text>
                    <Text style={[styles.summaryValue, { color: colors.text }]}>$300</Text>
                </ThemeAwareView>
            </View>

            <View style={styles.contributionsList}>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Contributions</Text>
                {contributions.map((contribution) => (
                    <ThemeAwareView key={contribution.id} style={[styles.contributionCard, { backgroundColor: colors.surface }]}>
                        <View style={styles.contributionHeader}>
                            <Text style={[styles.groupName, { color: colors.text }]}>{contribution.group}</Text>
                            {getStatusIcon(contribution.status)}
                        </View>
                        <View style={styles.contributionDetails}>
                            <View>
                                <Text style={[styles.amount, { color: colors.text }]}>${contribution.amount}</Text>
                                <Text style={[styles.date, { color: colors.textSecondary }]}>{contribution.date}</Text>
                            </View>
                            <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(contribution.status)}20` }]}>
                                <Text style={[styles.statusText, { color: getStatusColor(contribution.status) }]}>
                                    {contribution.status.charAt(0).toUpperCase() + contribution.status.slice(1)}
                                </Text>
                            </View>
                        </View>
                    </ThemeAwareView>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    summary: {
        flexDirection: 'row',
        padding: 20,
        gap: 12,
    },
    summaryCard: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    summaryLabel: {
        fontSize: 14,
    },
    summaryValue: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 4,
    },
    contributionsList: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
    contributionCard: {
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    contributionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    groupName: {
        fontSize: 16,
        fontWeight: '500',
    },
    contributionDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    amount: {
        fontSize: 18,
        fontWeight: '600',
    },
    date: {
        fontSize: 14,
        marginTop: 2,
    },
    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 9999,
    },
    statusText: {
        fontSize: 14,
        fontWeight: '500',
    },
});