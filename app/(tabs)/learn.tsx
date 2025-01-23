import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';

const arr = Array.from({ length: 5 }, (_, i) => i);

export const MyPager = () => {
    const insets = useSafeAreaInsets();
    const pageRefs = React.useRef<PagerView>(null);
    const [pageIndex, setPageIndex] = React.useState(0);
    const [offsetX, setOffsetX] = React.useState(0);
    const [isLeft, setIsLeft] = React.useState(false);

    const setPage = (page: number) => {
        pageRefs.current?.setPage(page);
        setPageIndex(page);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[
                styles.container,
                {
                    // 只处理顶部安全区域，底部由SafeAreaView处理
                    marginTop: -insets.top,
                    paddingTop: insets.top,
                }
            ]}>
                <View style={styles.main}>
                    {/* <View style={styles.page}>
                        <Text>Hello</Text>
                    </View>
                    <View style={styles.page}>
                        <Text>Hello</Text>
                    </View> */}
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
        overflow: 'hidden',
        backgroundColor: 'red',
    },
    main: {
        flex: 1,
        backgroundColor: 'blue',
        width: '100%',
        overflow: 'hidden',
    },
    page: {
        flex: 1,
        backgroundColor: 'red',
    },
});

const LearnScreen = () => {
    return (
        <MyPager />
    );
};

export default MyPager;