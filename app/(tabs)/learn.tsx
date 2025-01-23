import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

const arr = Array.from({ length: 5 }, (_, i) => i);

export const MyPager = () => {
    const pageRefs = React.useRef();
    const [pageIndex, setPageIndex] = React.useState(0);
    const [offsetX, setOffsetX] = React.useState(0);
    const [isLeft, setIsLeft] = React.useState(false);

    const setPage = (page: number) => {
        pageRefs.current.setPage(page);
        setPageIndex(page);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                {/* <View style={styles.page}>
                    <Text>Hello</Text>
                </View>
                <View style={styles.page}>
                    <Text>Hello</Text>
                </View> */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
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
    return

    <>

        <SafeAreaView>
            <MyPager />
        </SafeAreaView>

    </>;
};

// export default LearnScreen;

export default MyPager;