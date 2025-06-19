import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/auth', createProxyMiddleware({ target: 'http://auth-service:4000', changeOrigin: true }));
app.use('/invoice', createProxyMiddleware({ target: 'http://invoice-service:4001', changeOrigin: true }));
app.use('/notify', createProxyMiddleware({ target: 'http://notification-service:4002', changeOrigin: true }));

app.listen(3000, () => console.log('API Gateway running on port 3000'));