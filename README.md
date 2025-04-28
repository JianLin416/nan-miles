# nan-miles

一个用go和react写的车辆数据检测程序

提供节气门开度检测，水温 油温 进气温度 环境温度 油箱剩余油量检测

具体检测数据可以根据can串口命令进行二次开发自行调整，参考文件在files文件夹内

## 注意

此仓库的go程序只能在linux系统下运行

### 部署前的准备

- 一块树莓派
- obd连接线
- usb-can模块
- 一块屏幕
- 5V 3A降压线（具体看树莓派的供电需求）

### 部署说明

1. 安装依赖

```bash
pnpm install
pnpm install_all
```

2. 开启调试模式

```bash
pnpm dev
```

3. 打包并启动应用

```bash
pnpm build
pnpm start
```

4. 开机自启与全屏展示

    所需脚本在script目录下

    - 设置前端开机自启

    ```bash
    cp scripts/nan-miles.desktop ~/.config/autostart
    ```

    - 将scripts/nginx中的内容复制进nginx.conf 注意自行配置dist目录

    - 注意自行配置go的可执行文件的路径
    ```bash
    cp scripts/nan-miles-backend.service /etc/systemd/system/

    systemctl enable nan-miles-backend
    ```
