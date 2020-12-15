import React from 'react'
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import Head from 'next/head';



const Profile = () => {
    const followerList = [{nickname: '오리'}, {nickname: '강아지'}];
    const followingList = [{nickname: '사자'}, {nickname: '기린'}];

    return (
        <>
            <Head>
                <title>내 프로필</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    
    );
};

export default Profile;