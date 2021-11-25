'use strict';
const tencentcloud = require("tencentcloud-sdk-nodejs")
const DnspodClient = tencentcloud.dnspod.v20210323.Client;

exports.main_handler = async (event, context) => {

    // 文件地址
    const ip = event.queryString?event.queryString.ip:'';
    
    const key=event.queryString?event.queryString.key:'';

    if(key!=process.env.key){
        return '无权限';
    }
    
    if(!ip){
        return '无IP地址';
    }

    const clientConfig = {
        credential: {
        secretId: process.env.secretId,
        secretKey: process.env.secretKey,
        },
        region: "",
        profile: {
        httpProfile: {
            endpoint: "dnspod.tencentcloudapi.com",
        },
        },
    };

    const client = new DnspodClient(clientConfig);
    const params = {
        "Domain": process.env.domain,
        "SubDomain": process.env.subDomain,
        "RecordType": "A",
        "RecordLine": "默认",
        "Value": ip,
        "RecordId": parseInt(process.env.recordId)
    };
    const res = await client.ModifyRecord(params);

    return JSON.stringify(res);
};