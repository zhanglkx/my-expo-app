import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';
import { useRouter } from 'expo-router';

const arr = Array.from({ length: 5 }, (_, i) => i);

export const MyPager = () => {
    const insets = useSafeAreaInsets();
    const pageRefs = React.useRef<PagerView>(null);
    const [pageIndex, setPageIndex] = React.useState(0);
    const [offsetX, setOffsetX] = React.useState(0);
    const [isLeft, setIsLeft] = React.useState(false);
    const router = useRouter();

    const setPage = (page: number) => {
        pageRefs.current?.setPage(page);
        setPageIndex(page);
    };

    const handleNavigateToDetail = () => {
        router.push({
            pathname: "/(routes)/learn/[id]/page",
            params: { id: "1" }
        });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[
                styles.container,
                {
                    // 只处理顶部安全区域，底部由SafeAreaView处理
                    // marginTop: -insets.top,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                }
            ]}>
                <View style={styles.main}>
                    <View style={styles.page}>
                        <Text>Hello</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.dot}
                        onPress={handleNavigateToDetail}
                    >
                        <Text style={styles.buttonText}>Go to Detail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'green',
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
        overflow: 'scroll',
    },
    main: {
        flex: 1,
        // backgroundColor: 'blue',
        width: '100%',
        overflow: 'hidden',
    },
    page: {
        flex: 1,
        // backgroundColor: 'yellow',
    },
    dot: {
        width: 150,
        height: 50,
        backgroundColor: '#2196F3',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const LearnScreen = () => {
    return (
        <MyPager />
    );
};

export default MyPager;