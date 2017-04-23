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

### Mobile app config
```javascript
// constants/app.js

// localhost change thì địa chỉ IP của wifi
export const NOTIFICATION = {
	API_SAVE_TOKEN: `http://localhost:1234/register-token-device`,
	SECRET_CODE: 'MAMFRESH_APP'
};
```

### How to
1. Khi App run trên device của user, thì sẽ yêu cầu truy cập push notifiation. Nếu user đồng ý, thì sẽ gửi token về `/register-token-device` kèm với secret code, sau đó sẽ được lưu trong mongodb.
2. Để xem danh sách tokenDevice truy cập `/list-token-device`.
3. Gửi thử 1 notification bằng POSTMAN

![demo notification](http://sv1.upsieutoc.com/2017/04/24/ScreenShot2017-04-24at00.40.11.png)
