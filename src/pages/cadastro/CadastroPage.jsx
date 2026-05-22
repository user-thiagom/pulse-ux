import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, BarChartOutlined } from '@ant-design/icons';
import './CadastroPage.css';

const { Title, Text } = Typography;

export default function CadastroPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        
        setTimeout(() => {
            console.log('Registration values:', values);
            setLoading(false);
            navigate('/home');
        }, 1500);
    };

    return (
        <div className="auth-layout">
            <div className="auth-sidebar cadastro-sidebar">
                <div className="auth-brand" onClick={() => navigate('/')}>
                    <BarChartOutlined className="auth-brand-icon" />
                    <span>Pulse<strong>UX</strong></span>
                </div>
                <div className="auth-sidebar-content">
                    <h1>Junte-se a nós!</h1>
                    <p>Crie sua conta agora e comece a coletar feedbacks valiosos de forma simples e intuitiva.</p>
                </div>
            </div>

            <div className="auth-content">
                <div className="auth-card">
                    <div className="auth-header-mobile" onClick={() => navigate('/')}>
                        <BarChartOutlined className="auth-brand-icon" />
                        <span>Pulse<strong>UX</strong></span>
                    </div>

                    <Title level={2} className="auth-title">Criar uma conta</Title>
                    <Text className="auth-subtitle">Preencha os dados abaixo para começar.</Text>

                    <Form
                        name="cadastro_form"
                        layout="vertical"
                        onFinish={onFinish}
                        className="auth-form"
                        size="large"
                    >
                        <Form.Item
                            name="name"
                            label="Nome completo"
                            rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
                        >
                            <Input prefix={<UserOutlined className="input-icon" />} placeholder="João da Silva" />
                        </Form.Item>

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
                            rules={[
                                { required: true, message: 'Por favor, crie uma senha!' },
                                { min: 6, message: 'A senha deve ter no mínimo 6 caracteres.' }
                            ]}
                            hasFeedback
                        >
                            <Input.Password prefix={<LockOutlined className="input-icon" />} placeholder="••••••••" />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            label="Confirmar Senha"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                { required: true, message: 'Por favor, confirme sua senha!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('As senhas não coincidem!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined className="input-icon" />} placeholder="••••••••" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="auth-submit-btn" loading={loading} block>
                                Cadastrar
                            </Button>
                        </Form.Item>
                    </Form>

                    <div className="auth-redirect">
                        <Text>Já tem uma conta?</Text>{' '}
                        <a onClick={() => navigate('/login')} className="auth-link">Faça login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
