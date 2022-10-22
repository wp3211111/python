//
//  RegisterTemplate1ViewController.m
//  OneNumberDev
//
//  Created by jim on 2019/7/15.
//  Copyright © 2019年 shine. All rights reserved.
//

#import "RegisterTemplate1ViewController.h"
#import "UITextField+InputBoxView.h"
#import "SegmentControlView.h"
#import "LMJDropdownMenu.h"

const CGFloat sTextFiledHeight = 50.00;
const CGFloat sTextFiledTop = 20.00;

@interface RegisterTemplate1ViewController ()<SegmentControlViewDelegate,LMJDropdownMenuDataSource,LMJDropdownMenuDelegate,UITextFieldDelegate>

@property (strong, nonatomic) SegmentControlView *segment;

@property (weak, nonatomic) IBOutlet UIImageView *registerVcBackgImage;
/** 注册按钮 */
@property (nonatomic, weak) IBOutlet UIButton *registerBtn ;
@property (weak, nonatomic) IBOutlet InputBoxView *viewVerificationCode;

@property (weak, nonatomic) IBOutlet NSLayoutConstraint *phoneViewHeight;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *chatViewHeight;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *realNameViewHeight;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *contentViewHeight;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *phoneTop;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *chatTop;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *realNameTop;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *codeTop;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *constraintViewPasswordStrongTop;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *constraintPasswordFisrtTop;

@property (weak, nonatomic) IBOutlet UIButton *eyeButton1;
@property (weak, nonatomic) IBOutlet UIButton *eyeButton2;

//这次加的.
@property (weak, nonatomic) IBOutlet UIButton *checkBtn;
@property (weak, nonatomic) IBOutlet UILabel *usernameTips;
@property (weak, nonatomic) IBOutlet UILabel *checkUsernameTips;
@property (weak, nonatomic) IBOutlet UILabel *repeatPasswordTips;
@property (weak, nonatomic) IBOutlet UILabel *optionalPhoneTips;

@property (weak, nonatomic) IBOutlet NSLayoutConstraint *checkBtnTop;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *msgTop;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *checkBtnHeight;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *strongHeight;
@property (weak, nonatomic) IBOutlet UILabel *passwordTips;


@property (weak, nonatomic) IBOutlet UIImageView *checkImg;
@property (weak, nonatomic) IBOutlet InputBoxView *passwordView;
@property (weak, nonatomic) IBOutlet InputBoxView *repeatPasswordView;

@property (nonatomic, strong) LMJDropdownMenu *areaCodeMenu;
@property (nonatomic, strong) NSMutableArray *areaCodeArray;
@property (weak, nonatomic) IBOutlet UIView *contentView;
@property (nonatomic, strong) AreaCodeType *areaCode;

@property (nonatomic, strong) LMJDropdownMenu *optionAreaCodeMenu;
@property (nonatomic, strong) NSMutableArray *optionAreaCodeArray;
@property (weak, nonatomic) IBOutlet InputBoxView *usernameView;
@property (weak, nonatomic) IBOutlet InputBoxView *telephoneView;
@property (nonatomic, strong) AreaCodeType *optionAreaCode;

@property (nonatomic, assign) BOOL usernameRegisterEnable;
@property (nonatomic, assign) BOOL phoneRegisterEnable;
@property (nonatomic, assign) BOOL showCheck;
@property (nonatomic, assign) BOOL showReigsterPhone;
@property (nonatomic, strong) UILabel *psdTips;
@property (weak, nonatomic) IBOutlet UIButton *agreement;
@end

@implementation RegisterTemplate1ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self setUpUi];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(setUpUi) name:UPDATE_USER_CONFIG object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(setUpUi) name:@"registerUpdateUI" object:nil];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
}
- (void)viewDidLayoutSubviews {
    [super viewDidLayoutSubviews];
    dispatch_async(dispatch_get_main_queue(), ^{
        self.optionAreaCodeMenu.left = self.phoneView.left + 20;
        self.optionAreaCodeMenu.top = self.phoneView.top;
        self.optionAreaCodeMenu.width = 50;
        self.optionAreaCodeMenu.height = self.phoneView.height;
    });
}

- (void)setUpUi{
    [self originStatus];
    [self initTopView];
    [self initSomeViews];
    [self initAreaCodeMenu];
    [self initOptionAreaCodeMenu];
    [self initCheckBtn];
    [self initOptions];
}

- (void)initSomeViews {
    self.registerVcBackgImage.image = [UIImage imageNamed:[LotteryAppInfo sharedAppInfo].platformUiDesignModel.imageLoginBG];
    [self.eyeButton1 setBackgroundImage:[UIImage imageNamed:[LotteryAppInfo sharedAppInfo].platformUiDesignModel.iconLoginEyesNormal] forState:0];
    [self.eyeButton1 setBackgroundImage:[UIImage imageNamed:[LotteryAppInfo sharedAppInfo].platformUiDesignModel.iconLoginEyesSelect] forState:UIControlStateSelected];
    [self.eyeButton2 setBackgroundImage:[UIImage imageNamed:[LotteryAppInfo sharedAppInfo].platformUiDesignModel.iconLoginEyesNormal] forState:0];
    [self.eyeButton2 setBackgroundImage:[UIImage imageNamed:[LotteryAppInfo sharedAppInfo].platformUiDesignModel.iconLoginEyesSelect] forState:UIControlStateSelected];
    self.eyeButton1.selected = self.eyeButton2.selected = YES;
    ViewRadius(self.labelWeak, self.labelWeak.size.height/2);
    ViewRadius(self.labelMiddle, self.labelMiddle.size.height/2);
    ViewRadius(self.labelStrong, self.labelStrong.size.height/2);
    self.telephoneView.layer.cornerRadius = 25;
    self.telephoneView.layer.borderWidth = 1;
    self.telephoneView.layer.borderColor = [UIColor colorWithHex:0xdadada].CGColor;
    self.telephoneView.backgroundColor = [UIColor colorWithHex:0xf5f5f5];
    
    self.usernameView.layer.cornerRadius = 25;
    self.usernameView.layer.borderWidth = 1;
    self.usernameView.layer.borderColor = [UIColor colorWithHex:0xdadada].CGColor;
    self.usernameView.backgroundColor = [UIColor colorWithHex:0xf5f5f5];
    
    self.passwordView.layer.cornerRadius = 25;
    self.passwordView.layer.borderWidth = 1;
    self.passwordView.layer.borderColor = [UIColor colorWithHex:0xdadada].CGColor;
    self.passwordView.backgroundColor = [UIColor colorWithHex:0xf5f5f5];
    
    self.repeatPasswordView.layer.cornerRadius = 25;
    self.repeatPasswordView.layer.borderWidth = 1;
    self.repeatPasswordView.layer.borderColor = [UIColor colorWithHex:0xdadada].CGColor;
    self.repeatPasswordView.backgroundColor = [UIColor colorWithHex:0xf5f5f5];
    
    self.codeView.layer.cornerRadius = 25;
    self.codeView.layer.borderWidth = 1;
    self.codeView.layer.borderColor = [UIColor colorWithHex:0xdadada].CGColor;
    self.codeView.backgroundColor = [UIColor colorWithHex:0xf5f5f5];
    
    self.phoneView.layer.cornerRadius = 25;
    self.phoneView.layer.borderWidth = 1;
    self.phoneView.layer.borderColor = [UIColor colorWithHex:0xdadada].CGColor;
    self.phoneView.backgroundColor = [UIColor colorWithHex:0xf5f5f5];
    
    self.chatView.layer.cornerRadius = 25;
    self.chatView.layer.borderWidth = 1;
    self.chatView.layer.borderColor = [UIColor colorWithHex:0xdadada].CGColor;
    self.chatView.backgroundColor = [UIColor colorWithHex:0xf5f5f5];
    
    self.realNameView.layer.cornerRadius = 25;
    self.realNameView.layer.borderWidth = 1;
    self.realNameView.layer.borderColor = [UIColor colorWithHex:0xdadada].CGColor;
    self.realNameView.backgroundColor = [UIColor colorWithHex:0xf5f5f5];
    
    self.passwordTextFiled.attributedPlaceholder = [[NSAttributedString alloc] initWithString:@"8-18位字符(字母、数字和符号的组合)" attributes:@{
        NSFontAttributeName : [UIFont systemFontOfSize:11]}];
    self.passwordTextFiled.secureTextEntry = YES; self.tFVerifyPassword.secureTextEntry = YES;
}

- (void)initTopView {
    self.usernameRegisterEnable = [LotteryAppInfo sharedAppInfo].globalSwitchModel.isUserNameRegisterEnabled;
    self.phoneRegisterEnable = [LotteryAppInfo sharedAppInfo].globalSwitchModel.isMobileRegisterEnabled;
    self.showCheck = [LotteryAppInfo sharedAppInfo].globalSwitchModel.checkUserNameValidSwitch;
    self.showReigsterPhone = [LotteryAppInfo sharedAppInfo].globalSwitchModel.isShowReisterPhone;
    self.viewVerificationCode.hidden = YES;
    self.checkBtn.hidden = !self.showCheck;
    // 添加切换栏选项
    //账户名 + 手机号
    if (self.usernameRegisterEnable && self.phoneRegisterEnable) {
        self.usernameView.hidden = NO;
        [self.viewSegment addSubview:self.segment];
        self.segment.hidden = NO;
        self.optionAreaCodeMenu.hidden = !self.showReigsterPhone;
        self.phoneView.hidden = !self.showReigsterPhone;
        self.phoneViewHeight.constant = self.showReigsterPhone ? sTextFiledHeight : 0;
        self.phoneTop.constant = self.showReigsterPhone ? 20 : 0;
        self.phoneSelectLabel.text =[LotteryAppInfo sharedAppInfo].globalSwitchModel.isPhoneRequired?@"必填":@"选填";

        if (self.segment.selectIndex == 0) {
            [self clickUsername];
        } else {
            [self clickPhone];
        }
    }
    //只有用户名
    if (self.usernameRegisterEnable &&
        !self.phoneRegisterEnable) {
        self.segment.hidden = YES;
        self.usernameView.hidden = NO;
        self.telephoneView.hidden = YES;
        self.viewTelAndVerificationCode.hidden = YES;
        self.areaCodeMenu.hidden = YES;
        self.optionAreaCodeMenu.hidden = !self.showReigsterPhone;
        self.phoneView.hidden = !self.showReigsterPhone;
        self.phoneViewHeight.constant = self.showReigsterPhone ? sTextFiledHeight : 0;
        self.phoneTop.constant = self.showReigsterPhone ? 20 : 0;
        
        self.phoneSelectLabel.text =[LotteryAppInfo sharedAppInfo].globalSwitchModel.isPhoneRequired?@"必填":@"选填";
        
        
        [self clickUsername];
    }
    //只有手机号
    if (!self.usernameRegisterEnable &&
        self.phoneRegisterEnable) {
        self.segment.hidden = YES;
        self.telephoneView.hidden = NO;
        self.usernameView.hidden = YES;
        self.areaCodeMenu.hidden = NO;
        self.viewTelAndVerificationCode.hidden  = NO;
        self.labelRegisterType.text = @"请输入您的手机号和密码";
        
        self.optionAreaCodeMenu.hidden = YES;
        self.phoneViewHeight.constant = 0;
        self.phoneTop.constant = 0;
        self.phoneView.hidden = YES;
        if (self.blockRegisterTypeChange) {
            self.blockRegisterTypeChange(1);
        }
        [self clickPhone];
    }
}
- (void)initAreaCodeMenu {
    [self.contentView addSubview:self.areaCodeMenu];
    [self.areaCodeMenu setFrame:CGRectMake(40, 80, 52, 50)];
    self.areaCodeArray = [LotteryAppInfo.sharedAppInfo.globalSwitchModel.areaCodeType mutableCopy];
    if (self.areaCodeArray.count) {
        AreaCodeType *areaCode = self.areaCodeArray[0];
        self.areaCode = areaCode;
        NSString *menuTitle = [NSString stringWithFormat:@"+%@",areaCode.areaCodekey];
        self.areaCodeMenu.title = menuTitle;
    }
    [self.areaCodeMenu reloadOptionsData];
}

- (void)initOptionAreaCodeMenu {
    [self.contentView addSubview:self.optionAreaCodeMenu];
    self.optionAreaCodeArray = [LotteryAppInfo.sharedAppInfo.globalSwitchModel.areaCodeType mutableCopy];
    if (self.optionAreaCodeArray.count) {
        AreaCodeType *areaCode = self.areaCodeArray[0];
        self.optionAreaCode = areaCode;
        NSString *menuTitle = [NSString stringWithFormat:@"+%@",areaCode.areaCodekey];
        self.optionAreaCodeMenu.title = menuTitle;
    }
    [self.optionAreaCodeMenu reloadOptionsData];
}

- (void)initCheckBtn {
    self.checkBtn.enabled = 0;
    self.checkBtn.layer.cornerRadius = 25;
    self.checkBtn.layer.borderWidth = 1;
    [self.checkBtn setTitle:@"请先输入符合要求的账户名" forState:UIControlStateDisabled];
    [self.checkBtn setTitleColor:[UIColor colorWithHex:0xffffff] forState:UIControlStateDisabled];
    self.checkBtn.titleLabel.font = [UIFont systemFontOfSize:13];
    [self.checkBtn setTitleColor:[UIColor colorWithHex:0x333333] forState:UIControlStateNormal];
    self.checkBtn.adjustsImageWhenHighlighted = NO;
}

- (void)initOptions {
    
    self.chatView.hidden = ![LotteryAppInfo sharedAppInfo].globalSwitchModel.isShowRegisterChat?1:0;
    self.chatViewHeight.constant = [LotteryAppInfo sharedAppInfo].globalSwitchModel.isShowRegisterChat?sTextFiledHeight:0;
    self.chatTop.constant = [LotteryAppInfo sharedAppInfo].globalSwitchModel.isShowRegisterChat?sTextFiledTop:0;
    
    self.chatSelectLabel.text = [LotteryAppInfo sharedAppInfo].globalSwitchModel.isChatRequired? @"必填":@"选填";
    
    self.realNameView.hidden = ![LotteryAppInfo sharedAppInfo].globalSwitchModel.isShowRegisterRealName?1:NO;
    self.realNameViewHeight.constant = [LotteryAppInfo sharedAppInfo].globalSwitchModel.isShowRegisterRealName?sTextFiledHeight:0;
    self.realNameTop.constant = [LotteryAppInfo sharedAppInfo].globalSwitchModel.isShowRegisterRealName?sTextFiledTop:0;
    
    self.realNameSelectLabel.text =[LotteryAppInfo sharedAppInfo].globalSwitchModel.isRealNameRequired? @"必填":@"选填";
    [LotteryAppInfo sharedAppInfo].globalSwitchModel.isInviteCode = YES; //邀请码是否开启开关
    [LotteryAppInfo sharedAppInfo].globalSwitchModel.isInviteCodeRequired = YES; //邀请码是否必填开关
    self.codeView.hidden = ![LotteryAppInfo sharedAppInfo].globalSwitchModel.isInviteCode?1:NO;
    self.codeTop.constant = [LotteryAppInfo sharedAppInfo].globalSwitchModel.isInviteCode?20:0;
    self.invitationCodeStateLabel.text =[LotteryAppInfo sharedAppInfo].globalSwitchModel.isInviteCodeRequired? @"必填":@"选填";
}
#pragma mark - LMJDropdownMenu DataSource

- (NSUInteger)numberOfOptionsInDropdownMenu:(LMJDropdownMenu *)menu{
    if (menu == _areaCodeMenu) {
        return self.areaCodeArray.count;
    } else return self.optionAreaCodeArray.count;
}

- (CGFloat)dropdownMenu:(LMJDropdownMenu *)menu heightForOptionAtIndex:(NSUInteger)index{
    return 40;
}

- (NSString *)dropdownMenu:(LMJDropdownMenu *)menu titleForOptionAtIndex:(NSUInteger)index{
    NSString *optionTitle;
    if (menu == _areaCodeMenu) {
        AreaCodeType *areaCode = self.areaCodeArray[index];
        optionTitle = [NSString stringWithFormat:@"+%@",areaCode.areaCodekey];
    } else {
        AreaCodeType *areaCode = self.optionAreaCodeArray[index];
        optionTitle = [NSString stringWithFormat:@"+%@",areaCode.areaCodekey];
    }
    return optionTitle;
}

#pragma mark - LMJDropdownMenu Delegate
- (void)dropdownMenu:(LMJDropdownMenu *)menu didSelectOptionAtIndex:(NSUInteger)index optionTitle:(NSString *)title{
    if (menu == _areaCodeMenu) {
        AreaCodeType *areaCode = self.areaCodeArray[index];
        if (self.areaCode.areaCodeId != areaCode.areaCodeId) {
            if (self.menuBlock) {
                self.menuBlock(areaCode);
            }
            self.areaCode = areaCode;
        }
    } else {
        AreaCodeType *areaCode = self.optionAreaCodeArray[index];
        if (self.optionAreaCode.areaCodeId != areaCode.areaCodeId) {
            if (self.optionAreaCodeMenu) {
                self.optionMenuBlock(areaCode);
            }
            self.optionAreaCode = areaCode;
        }
    }
}

- (void)dropdownMenuWillShow:(LMJDropdownMenu *)menu {
    if (menu == _areaCodeMenu) {
        [self.areaCodeMenu reloadOptionsData];
    } else [self.optionAreaCodeMenu reloadOptionsData];
}

- (SegmentControlView *)segment
{
    if (_segment == nil) {
        CGFloat itemWidth = 75;
        _segment = [SegmentControlView segmentWithFrame:CGRectMake(0, 2, itemWidth*2, 27) dataList:@[@"用户名",@"手机号"] delegate:self];
    }
    return _segment;
}

- (void)originStatus {
    self.contentViewHeight.constant = 850;
    self.checkImg.hidden = YES;
    self.constraintViewPasswordStrongTop.constant = 0;
    self.strongHeight.constant = 20;
    self.checkBtnTop.constant = 20;
    self.userNameFiled.text = @"";
    self.textfieldTel.text = @"";
    self.usernameTips.text = @"";
    self.repeatPasswordTips.text = @"";
    self.passwordTips.text = @"";
    self.labelWeak.hidden = self.labelMiddle.hidden = self.labelStrong.hidden = YES;
    self.optionalPhoneTips.text = @"";
    self.phoneTextFiled.text = @"";
    self.passwordTextFiled.text = @"";
    self.tFVerifyPassword.text = @"";
    self.chatTextFiled.text = @"";
    self.realNameTextFiled.text = @"";
    self.m_TFInviteCode.text = @"829926";
    self.checkBtn.enabled = 0;
    self.checkBtn.layer.borderColor = [UIColor colorWithHex:0xc9c9c9].CGColor;
    [self.checkBtn setBackgroundColor:[UIColor colorWithHex:0xc9c9c9]];
    self.imgVerifyUserName.hidden = self.imgVerifyUserName.hidden = 1;
}

- (void)clickUsername {
    self.viewTelAndVerificationCode.hidden  = YES;
    self.areaCodeMenu.hidden = YES;
    self.optionAreaCodeMenu.hidden = !self.showReigsterPhone;
    self.phoneView.hidden = !self.showReigsterPhone;
    self.phoneViewHeight.constant = self.showReigsterPhone?50:0;
    self.phoneTop.constant = self.showReigsterPhone?20:0;
    self.constraintPasswordFisrtTop.constant = self.showCheck ? (2 * sTextFiledTop + sTextFiledHeight) : sTextFiledTop;
    self.labelRegisterType.text = @"请输入您的用户名和密码";
    if (self.blockRegisterTypeChange) {
        self.blockRegisterTypeChange(0);
    }
    [self.checkBtn setTitle:@"请先输入符合要求的账户名" forState:UIControlStateDisabled];
}
- (void)clickPhone {
    self.areaCodeMenu.hidden = NO;
    self.optionAreaCodeMenu.hidden = YES;
    self.phoneView.hidden = YES;
    self.phoneViewHeight.constant = 0;
    self.phoneTop.constant = 0;
    self.viewTelAndVerificationCode.hidden  = NO;
    
    CGFloat passwordTop = sTextFiledTop;
    if (!self.showCheck) {
        self.checkBtnTop.constant = 20;
        self.checkBtnHeight.constant = 0;
        self.msgTop.constant = 0;
        passwordTop = sTextFiledTop;
    } else if (self.showCheck) {
        self.checkBtnTop.constant = 20;
        self.checkBtnHeight.constant = 50;
        passwordTop = sTextFiledTop + sTextFiledHeight + sTextFiledTop;
    }
    
    self.constraintPasswordFisrtTop.constant = passwordTop;
    if (self.textfieldTel.text.length == 0) {
        self.imgVerifyTel.hidden = YES;
    }
    self.labelRegisterType.text = @"请输入您的手机号和密码";
    if (self.blockRegisterTypeChange) {
        self.blockRegisterTypeChange(1);
    }
    [self.checkBtn setTitle:@"请先输入符合要求的手机号" forState:UIControlStateDisabled];
}
#pragma mark - SegmentControlViewDelegate
- (void)segmentView:(SegmentControlView *)segmentView selectAtIndex:(NSInteger)index data:(id)model {
    [self originStatus];
    switch (index) {
        case 0:
        {
            [self clickUsername];
        }
            break;
        case 1:
        {
            [self clickPhone];
        }
            break;
        default:
            break;
    }
}

- (IBAction)actions:(UIButton *)sender {
    [SocketSingleton playBallVideo];
    if (self.block) {
        self.block(sender);
    }
}

- (LMJDropdownMenu *)areaCodeMenu {
    if (!_areaCodeMenu) {
        _areaCodeMenu = [LMJDropdownMenu new];
        _areaCodeMenu.delegate = self;
        _areaCodeMenu.dataSource = self;
        _areaCodeMenu.hidden = YES;
        _areaCodeMenu.titleAlignment = NSTextAlignmentLeft;
        _areaCodeMenu.titleFont = [UIFont boldSystemFontOfSize:14];
        _areaCodeMenu.titleColor = UIColorFromRGB(0x999999);
        _areaCodeMenu.titleEdgeInsets = UIEdgeInsetsMake(1, 0, 0, 0);
        _areaCodeMenu.rotateIcon = [UIImage imageNamed:@"arrow_down"];
        _areaCodeMenu.rotateIconSize = CGSizeMake(16, 10);
        _areaCodeMenu.optionBgColor = UIColor.whiteColor;
        _areaCodeMenu.optionFont = [UIFont systemFontOfSize:13];
        _areaCodeMenu.optionTextColor = UIColor.blackColor;
        _areaCodeMenu.optionNumberOfLines = 1;
        _areaCodeMenu.optionTextAlignment = NSTextAlignmentCenter;
        _areaCodeMenu.optionLineColor = UIColorFromRGB(0xdadada);
    }
    return _areaCodeMenu;
}

- (NSMutableArray *)areaCodeArray {
    if (!_areaCodeArray) {
        _areaCodeArray = NSMutableArray.new;
    }
    return _areaCodeArray;
}

- (LMJDropdownMenu *)optionAreaCodeMenu {
    if (!_optionAreaCodeMenu) {
        _optionAreaCodeMenu = [LMJDropdownMenu new];
        _optionAreaCodeMenu.delegate = self;
        _optionAreaCodeMenu.dataSource = self;
        _optionAreaCodeMenu.hidden = YES;
        _optionAreaCodeMenu.titleAlignment = NSTextAlignmentLeft;
        _optionAreaCodeMenu.titleFont = [UIFont boldSystemFontOfSize:13];

        _optionAreaCodeMenu.titleColor = UIColorFromRGB(0x999999);
        _optionAreaCodeMenu.titleEdgeInsets = UIEdgeInsetsMake(1, 0, 0, 0);
        _optionAreaCodeMenu.rotateIcon = [UIImage imageNamed:@"arrow_down"];
        _optionAreaCodeMenu.rotateIconSize = CGSizeMake(16, 10);
        _optionAreaCodeMenu.optionBgColor = UIColor.whiteColor;
        _optionAreaCodeMenu.optionFont = [UIFont systemFontOfSize:13];
        _optionAreaCodeMenu.optionTextColor = UIColor.blackColor;
        _optionAreaCodeMenu.optionNumberOfLines = 1;
        _optionAreaCodeMenu.optionTextAlignment = NSTextAlignmentCenter;
        _optionAreaCodeMenu.optionLineColor = UIColorFromRGB(0xdadada);
    }
    return _optionAreaCodeMenu;
}

- (NSMutableArray *)optionAreaCodeArray {
    if (!_optionAreaCodeArray) {
        _optionAreaCodeArray = NSMutableArray.new;
    }
    return _optionAreaCodeArray;
}

- (UILabel *)psdTips {
    if (!_psdTips) {
        _psdTips = UILabel.new;
        _psdTips.font = [UIFont systemFontOfSize:12];
        _psdTips.textColor = [UIColor colorWithHex:0xCC3333];
        _psdTips.adjustsFontSizeToFitWidth = YES;
    }
    return _psdTips;
}
@end
