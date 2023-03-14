import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Button from './Button';
import Input from './Input';

const Footer = () => {
  const handleRemoveAllClick = () => {};
  return (
    <SafeAreaView style={[styles.container, styles.footer]}>
      <Text style={styles.text}></Text>
      <Button
        title="완료항목 전체삭제"
        onPress={() => handleRemoveAllClick()}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#101010',
  },
});

export { Footer };
