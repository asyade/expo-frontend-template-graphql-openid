import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
  Image,
  StatusBar,
} from 'react-native';

import Container from './components/layouts/Container';
import Header from './components/reusable/Header';
import StoryList from './components/reusable/StoryList';
import CreatePost from './components/reusable/CreatePost';
import PreviewPost from './components/reusable/PreviewPost';
import Footer from './components/reusable/Footer';
import Content from './components/layouts/Content';

function HomeTab() {
  const header = <View style={{ paddingBottom: 4 }}><StoryList></StoryList></View>;
  return <Content ListHeaderComponent={header} data={[
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
  ]} />
}

function GemsTab() {
  return <Content  data={[
  ]} />
}

function EventTab() {
  return <Content  data={[
  ]} />
}

function MusicTab() {
  return <Content  data={[
  ]} />
}

function StreamTab() {
  return <Content  data={[
  ]} />
}

export default function App() {
  const { height, width } = useWindowDimensions()
  const [currentTab, setCurrentTab] = useState("home");

  let rootComponent = null;
  switch (currentTab) {
    case "home":
      rootComponent = (<HomeTab />)
      break;
    case "gems":
      rootComponent = (<GemsTab />)
    case "music":
      rootComponent = (<MusicTab />)
    case "event":
      rootComponent = (<EventTab />)
    case "stream":
      rootComponent = (<StreamTab />)
      break;
    default:
      rootComponent = <Text>...</Text>
  }

  return (
    <Container>
      <StatusBar
        animated={true}
        hidden={false}
      />
      <Header />

      {rootComponent}

      <Footer activeTab={currentTab} onTabSelected={(name) => setCurrentTab(name)} />
    </Container>
  );
}