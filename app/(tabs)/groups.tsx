import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Plus, Users } from 'lucide-react-native';
import { useTheme } from '@/constants/ThemeContext';
import { ThemeAwareView } from '@/componets/ThemeAwareView';

export default function GroupsScreen() {
    const { isDark } = useTheme();
    const colors = {
        text: isDark ? '#ffffff' : '#1a1a1a',
        background: isDark ? '#1a1a1a' : '#ffffff',
        textSecondary: isDark ? '#9ca3af' : '#6b7280',
        surface: isDark ? '#2a2a2a' : '#ffffff',
        border: isDark ? '#404040' : '#e5e7eb',
    };

    const groups = [
        {
            id: 1,
            name: 'Business Growth Group',
            members: 12,
            contribution: 200,
            frequency: 'Monthly',
            nextPayout: '2024-02-15',
        },
        {
            id: 2,
            name: 'Emergency Fund Circle',
            members: 8,
            contribution: 100,
            frequency: 'Weekly',
            nextPayout: '2024-02-08',
        },
        {
            id: 3,
            name: 'Wedding Savings',
            members: 15,
            contribution: 300,
            frequency: 'Monthly',
            nextPayout: '2024-03-01',
        },
    ];

    return (
        <ThemeAwareView style={styles.container}>
            <TouchableOpacity
                style={styles.createButton}
                onPress={() => router.push('/')}
            >
                <Plus size={20} color="#fff" />
                <Text style={styles.createButtonText}>Create New Group</Text>
            </TouchableOpacity>

            <ScrollView style={styles.groupsList}>
                {groups.map((group) => (
                    <TouchableOpacity key={group.id} style={[styles.groupCard, { backgroundColor: colors.surface }]}>
                        <View style={styles.groupHeader}>
                            <Text style={[styles.groupName, { color: colors.text }]}>{group.name}</Text>
                            <View style={styles.membersContainer}>
                                <Users size={16} color={colors.textSecondary} />
                                <Text style={[styles.membersCount, { color: colors.textSecondary }]}>{group.members}</Text>
                            </View>
                        </View>

                        <View style={styles.groupDetails}>
                            <View style={styles.detailItem}>
                                <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Contribution</Text>
                                <Text style={[styles.detailValue, { color: colors.text }]}>${group.contribution}</Text>
                            </View>
                            <View style={styles.detailItem}>
                                <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Frequency</Text>
                                <Text style={[styles.detailValue, { color: colors.text }]}>{group.frequency}</Text>
                            </View>
                            <View style={styles.detailItem}>
                                <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Next Payout</Text>
                                <Text style={[styles.detailValue, { color: colors.text }]}>{group.nextPayout}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ThemeAwareView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    createButton: {
        backgroundColor: '#6366f1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
        gap: 8,
    },
    createButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    groupsList: {
        flex: 1,
    },
    groupCard: {
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    groupHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    groupName: {
        fontSize: 18,
        fontWeight: '600',
    },
    membersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    membersCount: {
        fontSize: 14,
    },
    groupDetails: {
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
        paddingTop: 12,
        gap: 8,
    },
    detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailLabel: {
        fontSize: 14,
    },
    detailValue: {
        fontSize: 14,
        fontWeight: '500',
    },
});