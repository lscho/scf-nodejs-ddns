# scf-nodejs-ddns

## 简介

使用 Tencent SCF 组件及其触发器能力，方便的在腾讯云创建，配置和管理一个 scf-nodejs 应用，提供修改域名解析功能。

## 快速开始

### 1. 部署

在 `serverless.yml` 文件所在的项目根目录，运行以下指令，将会弹出二维码，直接扫码授权进行部署：

```bash
serverless deploy
```

> **说明**：如果鉴权失败，请参考 [权限配置](https://cloud.tencent.com/document/product/1154/43006) 进行授权。

### 2. 查看状态

执行以下命令，查看您部署的项目信息：

```bash
serverless info
```

### 3. 移除

可以通过以下命令移除 scf-nodejs 应用

```bash
serverless remove
```

### 账号配置（可选）

serverless 默认支持扫描二维码登录，用户扫描二维码后会自动生成一个 `.env` 文件并将密钥存入其中.
如您希望配置持久的环境变量/秘钥信息，也可以本地创建 `.env` 文件, 
把从[API 密钥管理](https://console.cloud.tencent.com/cam/capi)中获取的 `SecretId` 和`SecretKey` 填入其中.

> 如果没有腾讯云账号，可以在此[注册新账号](https://cloud.tencent.com/register)。

```bash
# 腾讯云的配置信息
touch .env
```

```
# .env file
TENCENT_SECRET_ID=123
TENCENT_SECRET_KEY=123
```

## 设置环境变量

在[SCF 控制台](https://console.cloud.tencent.com/scf/list?rid=8&ns=default)找到部署的函数，点击编辑配置下列环境变量

```
domain=xxxx.com
key=httpkey
recordId=xxxxxx
secretId=xxxx
secretKey=xxxx
subDomain=xxx
```

## 本地调用

```sh
curl ip.sb |xargs  -I address sh -c 'curl http://xxx.bj.apigw.tencentcs.com/release/\?ip\=address\&key\=httpkey'
```