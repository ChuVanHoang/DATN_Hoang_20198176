### 1. Backend
- Thêm file .env với sample như sau
    ```
        JWT_EXPIRE_TIME=
        JWT_SECRET_KEY=

        MONGODB_URI=
        REFRESH_JWT_EXPIRE_TIME=
        STRIPE_SECRET_KEY=
    ```

- Cài đặt thư viện: sử dụng yarn hoặc npm 
    ```
        npm install 
    ```
- Khởi chạy ứng dụng
    ```
        npm run dev || yarn dev  
    ```


### 2. User
- Thêm file .env với sample như sau
    ```
        NEXT_PUBLIC_STRIPE_KEY=
        NEXT_PUBLIC_GOOGLE_CLIENT_ID=
    ```

- Cài đặt thư viện: sử dụng yarn hoặc npm 
    ```
        npm install 
    ```
- Khởi chạy ứng dụng
    ```
        npm run dev || yarn dev  
    ```

### 3. Admin
- Thêm file .env với sample như sau
    ```
        VITE_REACT_APP_CLOUDINARY_CLOUD_NAME=
        VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET=
    ```
    Các thông số cloud_name, upload preset sẽ được lấy trên CLOUDINARY console

- Cài đặt thư viện: sử dụng yarn hoặc npm 
    ```
        npm install 
    ```
- Khởi chạy ứng dụng
    ```
        npm run dev || yarn dev  
    ```