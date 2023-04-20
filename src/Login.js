import React from 'react'

import { Card, Image, Input, ButtonGroup, Button } from 'semantic-ui-react'

import { Redirect, Router } from 'react-router'

class Login extends React.Component {
    render() {
        return <div>
        <Card style={{ margin: '0 auto' }}>
            <Image src="/images/avatar/large/matthew.png" />
            <Card.Content>
                <Input icon="user" iconPosition={'left'} placeholder="请输入用户名" />
                <Input icon="lock" type="password" iconPosition={'left'} placeholder="请输入密码" />
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup>
                    <Button primary onClick={
                        () => {
                            window.location.href = '#/mainframe'
                        }
                    } >登录
            </Button>
                    <Button default>重置</Button>
                </ButtonGroup>
            </Card.Content>
        </Card>
    </div>
    }
}

export default Login