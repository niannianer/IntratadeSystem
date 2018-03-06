/**
 * Created by hekk on 2017/5/23.
 */
'use strict'
const state = {
    userVerifyStatus: 0, //认证状态
    userVerifyStatusDesc: '',
    userUuid: '',// uid
    userId: '',
    investorRiskScore: 0,
    investorGender: '', //gender
    investorIdCardNo: '',// ID card
    investorMobile: '',// mobile
    investorRealName: '',// realname,
    isEligibleInvestor: 0,
    isSetPayPassword: 0,
    investorRiskType: 0,
    isMinRiskLevel: 0,//是否为最低标准型
    investorRiskProductDesc: '',
    investorRiskTypeDesc: '',
    investorRiskLevel: 0, //
    investorRiskLevelDesc: '',
    investorType: '',
    investorTypeDesc: '',
    investorGenderDesc: '',

    accountTotalAssets: 0.00, //总资产
    accountTotalInterests: 0.00,//收益总额，
    accountCashAmount: 0.00,// 可提现金额


    reservationCount: 0, //预约数量
    investmentAmount: 0.00,//投资总额
    rewardSum: 0.00,//奖励数额
    relationCount: 0,//好友数量


    bankUserCardNo: '',//银行卡
    bankUserPhone: '',//绑卡手机
    bankCode: '',
    bankName: '',
    bankFullName: '',
    bankNo: '',
    perdayLimit: '',
    singleLimit: '',
    singleLimitValue: '',

    experienceProfit: '',//已收益
    notExpireProfit: '',//待收益
    notRecieveExperience: '',//未领取体验金
    totalExperience: '',

    cashCouponCount: '0',//现金券数量
    experienceAmount: '0',//体验金数额
    interestCouponCount: '0',// jiaxi quan

    accountStatus: 0,//是否录入适当性管理信息，1：已基金开户，2：已基金交易密码，3：完成
    paymentNo: '',
    name: '',
    maxRapidPayAmountPerTxn: 0,
    maxRapidPayAmountPerDay: 0,
    investorRiskVersion: '',//风险测评版本 2:新版

// 第三方信息
    headImageUrl: '',
    nickName: ''
};
export default state;
