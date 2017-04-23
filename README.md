# Simple push notifiation

## Installation
```nginx
git clone https://gitlab.com/ant-solutions-llc/mf-notification-server
yarn install
npm run dev
// Server start on localhost:1234
```

## API
```javascript
/**
 * List token device
 */
app.get('/list-token-device', listTokenDevice)

/**
 * Push notification
 * @tokenDevice: string
 * @message: string
 * @data: object
 */
app.post('/push-notifcation', pushNotification);

/**
 * Register token device
 * @tokenDevice: string
 * @userId: string
 * @secretCode: string
 */
app.post('/register-token-device', secretCodeMiddleware, registerTokenDevice)
```