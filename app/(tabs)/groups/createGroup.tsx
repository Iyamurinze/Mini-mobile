import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { router } from 'expo-router';
import { Users, Calendar, DollarSign, Target } from 'lucide-react-native';
import { ThemeAwareView } from '@/componets/ThemeAwareView';
import { useTheme } from '@/constants/ThemeContext';

type Frequency = 'weekly' | 'monthly';

export default function CreateGroupScreen() {
    const { isDark } = useTheme();
    const [groupName, setGroupName] = useState('');
    const [description, setDescription] = useState('');
    const [contribution, setContribution] = useState('');
    const [maxMembers, setMaxMembers] = useState('');
    const [frequency, setFrequency] = useState<Frequency>('monthly');
    const [goal, setGoal] = useState('');

    const colors = {
        text: isDark ? '#ffffff' : '#1a1a1a',
        textSecondary: isDark ? '#9ca3af' : '#6b7280',
        surface: isDark ? '#2a2a2a' : '#f3f4f6',
        border: isDark ? '#404040' : '#e5e7eb',
    };

    const handleCreate = () => {
        // Here you would handle group creation
        router.back();
    };

    return (
        <ThemeAwareView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={[styles.title, { color: colors.text }]}>Create New Group</Text>

                <ThemeAwareView style={[styles.card, { backgroundColor: colors.surface }]}>
                    <ThemeAwareView style={styles.inputGroup}>
                        <Users size={20} color={colors.textSecondary} />
                        <TextInput
                            style={[styles.input, { color: colors.text }]}
                            placeholder="Group Name"
                            placeholderTextColor={colors.textSecondary}
                            value={groupName}
                            onChangeText={setGroupName}
                        />
                    </ThemeAwareView>

                    <TextInput
                        style={[styles.textArea, { color: colors.text, backgroundColor: isDark ? '#404040' : '#ffffff' }]}
                        placeholder="Description (optional)"
                        placeholderTextColor={colors.textSecondary}
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        numberOfLines={Platform.OS === 'ios' ? undefined : 4}
                        textAlignVertical="top"
                    />

                    <ThemeAwareView style={styles.inputGroup}>
                        <DollarSign size={20} color={colors.textSecondary} />
                        <TextInput
                            style={[styles.input, { color: colors.text }]}
                            placeholder="Contribution Amount"
                            placeholderTextColor={colors.textSecondary}
                            value={contribution}
                            onChangeText={setContribution}
                            keyboardType="numeric"
                        />
                    </ThemeAwareView>

                    <ThemeAwareView style={styles.inputGroup}>
                        <Users size={20} color={colors.textSecondary} />
                        <TextInput
                            style={[styles.input, { color: colors.text }]}
                            placeholder="Maximum Members"
                            placeholderTextColor={colors.textSecondary}
                            value={maxMembers}
                            onChangeText={setMaxMembers}
                            keyboardType="numeric"
                        />
                    </ThemeAwareView>

                    <Text style={[styles.label, { color: colors.text }]}>Contribution Frequency</Text>
                    <ThemeAwareView style={styles.frequencyContainer}>
                        <TouchableOpacity
                            style={[
                                styles.frequencyButton,
                                { backgroundColor: frequency === 'weekly' ? '#6366f1' : colors.surface },
                                { borderColor: colors.border },
                            ]}
                            onPress={() => setFrequency('weekly')}
                        >
                            <Calendar size={20} color={frequency === 'weekly' ? '#ffffff' : colors.textSecondary} />
                            <Text
                                style={[
                                    styles.frequencyText,
                                    { color: frequency === 'weekly' ? '#ffffff' : colors.text },
                                ]}
                            >
                                Weekly
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.frequencyButton,
                                { backgroundColor: frequency === 'monthly' ? '#6366f1' : colors.surface },
                                { borderColor: colors.border },
                            ]}
                            onPress={() => setFrequency('monthly')}
                        >
                            <Calendar size={20} color={frequency === 'monthly' ? '#ffffff' : colors.textSecondary} />
                            <Text
                                style={[
                                    styles.frequencyText,
                                    { color: frequency === 'monthly' ? '#ffffff' : colors.text },
                                ]}
                            >
                                Monthly
                            </Text>
                        </TouchableOpacity>
                    </ThemeAwareView>

                    <ThemeAwareView style={styles.inputGroup}>
                        <Target size={20} color={colors.textSecondary} />
                        <TextInput
                            style={[styles.input, { color: colors.text }]}
                            placeholder="Savings Goal (optional)"
                            placeholderTextColor={colors.textSecondary}
                            value={goal}
                            onChangeText={setGoal}
                            keyboardType="numeric"
                        />
                    </ThemeAwareView>
                </ThemeAwareView>

                <TouchableOpacity style={styles.createButton} onPress={handleCreate}>
                    <Text style={styles.createButtonText}>Create Group</Text>
                </TouchableOpacity>
            </ScrollView>
        </ThemeAwareView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
    },
    card: {
        borderRadius: 16,
        padding: 20,
        gap: 16,
        marginBottom: 20,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: Platform.select({ ios: 'transparent', android: 'transparent', default: 'transparent' }),
    },
    input: {
        flex: 1,
        fontSize: 16,
        padding: Platform.select({ ios: 12, android: 8, default: 12 }),
    },
    textArea: {
        borderRadius: 12,
        padding: 12,
        fontSize: 16,
        minHeight: 100,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    frequencyContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    frequencyButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
    },
    frequencyText: {
        fontSize: 16,
        fontWeight: '500',
    },
    createButton: {
        backgroundColor: '#6366f1',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    createButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});