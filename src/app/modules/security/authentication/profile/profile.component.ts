import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { USER_CONFIG } from '@constants';
import { Helper } from '@helpers';
import { User, UserProfile, UserBank, UserSocial } from '@models';
import { AuthService } from '@services/api';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  public updateProfileForm;
  public cardFront: any = "/assets/images/app/profile/default-card-holder.svg";
  public cardBack: any = "/assets/images/app/profile/default-card-holder.svg";

  public fileCardFront: File;
  public fileCardBack: File;

  public phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";
  public urlFacebookPattern = "'/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/'";

  public visibleRight: boolean = false;
  public user: User;
  public userProfile: UserProfile;
  public userBank: UserBank;
  public userSocial: UserSocial;
  public haveSellerID: boolean = false;
  public sellerID = '#GOXXXXX';
  public isVerified: boolean;


  // ng-select data from server

  public selectedProvince: number;
  public selectedBankName: number;
  public selectedCountry: number;
  public selectedOrderSourceType: number;

  public provinces = [
    { id: 1, name: 'HCM' },
    { id: 2, name: 'HN' },
    { id: 3, name: 'DN' },
    { id: 4, name: 'NT' }
  ]
  public bankNames = [
    { id: 1, name: 'VCB' },
    { id: 2, name: 'ACB' },
    { id: 3, name: 'Tech' },
    { id: 4, name: 'TPBank' }
  ]
  public orderCountries = [
    { id: 1, name: 'China' },
    { id: 2, name: 'VN' },
    { id: 3, name: 'US' },
    { id: 4, name: 'UK' }
  ];
  public orderSourceTypes = [
    { id: 1, name: 'Option1' },
    { id: 2, name: 'Option2' },
    { id: 3, name: 'Option3' },
    { id: 4, name: 'Option4' }
  ];
  // ------------------------------------------
  constructor(private fb: FormBuilder, private userService: AuthService) {
    this.user = new User({
      firstName: 'La',
      lastName: 'Bảo',
      phone: '0933467225',
      isVerified: true,

      userBank: new UserBank({
        accountHolder: 'La Bảo',
        bankName: 'VCB',
        bankBranch: 'Bến Nghé',
        accountNumber: '00710 0101 7571',
      }),
      userProfile: new UserProfile({
        shopUrls: ['Shoppee', 'Lazada'],
        personalUrlProfile: 'Link fb cá nhân',
        sellerUrlProfile: 'Link Người bán',
        orderReturnAddress: 'Phường 9 Quận 8',
        orderReturnProvince:'',
        orderCountries: [1, 3],
        orderSourceType: '0'

      })
    });
    console.log(this.user);
    this.updateProfileForm = this.fb.group({
      firstName: [this.user.firstName, [Validators.required, Validators.minLength(1)]],
      lastName: [this.user.lastName, [Validators.required, Validators.minLength(1)]],
      phone: [this.user.phone, [Validators.required, Validators.maxLength(10), Validators.pattern(this.phonePattern)]],
      orderReturnProvince: [this.user.userProfile.orderReturnProvince, Validators.required],
      orderReturnAddress: [this.user.userProfile.orderReturnAddress],
      accountHolder: [this.user.userBank.accountHolder, Validators.required],
      bankName: [this.user.userBank.bankName, Validators.required],
      bankBranch: [this.user.userBank.bankBranch],
      accountNumber: [this.user.userBank.accountNumber, Validators.required],
      sellerUrlProfile: [this.user.userProfile.sellerUrlProfile, [Validators.pattern(this.urlFacebookPattern), Validators.required]],
      personalUrlProfile: [this.user.userProfile.personalUrlProfile, Validators.required],
      fanpageUrLProfile: [''],
      orderCountries: [this.user.userProfile.orderCountries, Validators.required],
      orderSourceType: [this.user.userProfile.orderSourceType, Validators.required],
      shopUrls: [this.user.userProfile.shopUrls, Validators.required]
    });
  }

  get f() { return this.updateProfileForm.controls; }

  ngOnInit(): void {
  }

  update() {
    const data = this.user.serialize();
    if (this.fileCardBack) data.card_back = this.fileCardBack;
    if (this.fileCardFront) data.card_front = this.fileCardFront;
    const formData = Helper.objectToFormData(data);
    return this.userService.fnUpdateProfile(formData).subscribe((res) => {}, (err) => {});
  }

  preview(files, type) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    // this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      if (type == USER_CONFIG.FILE_CARD_TYPE.CARD_FRONT) {
        this.cardFront = reader.result;
        this.fileCardFront = files[0];
      }
      else {
        this.cardBack = reader.result;
        this.fileCardBack = files[0];

      }
    }
  }
  viewInfomation() {
    this.visibleRight = !this.visibleRight;
  }

  copyToClipboard() {
    console.log('Copy To Clipboard')
  }
}
