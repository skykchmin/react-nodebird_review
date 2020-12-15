import { Button, Card, Avatar } from 'antd';
import React, { useCallback } from 'react';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return(
        <Card
            actions={[
                <div key="twit">게시물 수<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followings">팔로워<br />0</div>,
            ]}
        >
            <Card.Meta
            avatar={<Avatar>sky</Avatar>}
            title="skykchmin"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}

export default UserProfile;