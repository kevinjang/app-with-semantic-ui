import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Sidebar, Segment, Menu, Icon, Header, Image, Breadcrumb } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation={'overlay'}
          icon={'labeled'} inverted vertical
          width={'thin'}>
          <Menu.Item as={'a'}>
            <Icon name={'home'}></Icon>
            Home
            </Menu.Item>
          <Menu.Item as={'a'}>
            <Icon name={'gamepad'}></Icon>
            Games
            </Menu.Item>
          <Menu.Item as={'a'}>
            <Icon name={'camera'}></Icon>
            Channels
            </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Header as={'h3'}>Application Content</Header>
            <Image src="/images/wireframe/paragraph.png"></Image>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <Button primary>点我</Button>
      <div>
        <Breadcrumb>
          <Breadcrumb.Section href="/home">Home</Breadcrumb.Section>
          <Breadcrumb.Divider content={'.../'}/>
          <Breadcrumb.Section href="/store">Store</Breadcrumb.Section>
          <Breadcrumb.Divider content={'.../'}/>
          <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default App;
