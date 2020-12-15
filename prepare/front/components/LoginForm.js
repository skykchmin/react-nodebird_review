import React, { useCallback, useState } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState(''); 
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => { // 컴포넌트에 props로 넘겨주는 것은 useCallback을 사용해야 최적화가 가능하다
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => { // 컴포넌트에 props로 넘겨주는 것은 useCallback을 사용해야 최적화가 가능하다
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]); 

    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" 
                value={id} 
                onChange={onChangeId}
                required 
                />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" 
                type="password"
                value={password}
                onChange={onChangePassword}
                required
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;

