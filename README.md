# nan-miles

一个用go和react写的车辆数据检测程序

提供节气门开度检测，水温 油温 进气温度 环境温度 油箱剩余油量检测

具体检测数据可以根据can串口命令进行二次开发自行调整，参考文件在files文件夹内

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