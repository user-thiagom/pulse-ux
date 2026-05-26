import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, Divider, notification } from 'antd';
import { MailOutlined, LockOutlined, BarChartOutlined } from '@ant-design/icons';
import './LoginPage.css';
import { loginUser } from '../../services/authService';

const { Title, Text } = Typography;

export default function LoginPage() {
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);

        const login = loginUser(values)

        if (login.success) {
            setTimeout(() => {
                setLoading(false);
                navigate('/home');
            }, 1500);
        } else {
            api['error']({
                title: login.message,
                
            })
            setLoading(false)
        }
    };

    return (
        <div className="auth-layout">
            {contextHolder}
            <div className="auth-sidebar">
                <div className="auth-brand" onClick={() => navigate('/')}>
                    <BarChartOutlined className="auth-brand-icon" />
                    <span>Pulse<strong>UX</strong></span>
                </div>
                <div className="auth-sidebar-content">
                    <h1>Bem-vindo de volta!</h1>
                    <p>Continue transformando a experiência dos seus usuários através de dados e pesquisas eficientes.</p>
                </div>
            </div>

            <div className="auth-content">
                <div className="auth-card">
                    <div className="auth-header-mobile" onClick={() => navigate('/')}>
                        <BarChartOutlined className="auth-brand-icon" />
                        <span>Pulse<strong>UX</strong></span>
                    </div>

                    <Title level={2} className="auth-title">Entrar na sua conta</Title>
                    <Text className="auth-subtitle">Preencha seus dados para acessar a plataforma.</Text>

                    <Form
                        name="login_form"
                        layout="vertical"
                        onFinish={onFinish}
                        className="auth-form"
                        size="large"
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                { required: true, message: 'Por favor, insira seu e-mail!' },
                                { type: 'email', message: 'E-mail inválido!' }
                            ]}
                        >
                            <Input prefix={<MailOutlined className="input-icon" />} placeholder="seu@email.com" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Senha"
                            rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
                        >
                            <Input.Password prefix={<LockOutlined className="input-icon" />} placeholder="••••••••" />
                        </Form.Item>

                        <div className="auth-forgot-password">
                            <a href="#">Esqueceu a senha?</a>
                        </div>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="auth-submit-btn" loading={loading} block>
                                Entrar
                            </Button>
                        </Form.Item>
                    </Form>

                    <div className="auth-redirect">
                        <Text>Não tem uma conta?</Text>{' '}
                        <a onClick={() => navigate('/register')} className="auth-link">Cadastre-se</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
