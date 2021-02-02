import  { File } from './file.model';
export class User {
    id?: string;
    code?: string;
    email?: string;
    userSocial?: UserSocial;
    userProfile?: UserProfile;
    userBank?: UserBank;
    accessToken?: AccessToken;
    sellerId?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;

    status?: number;
    isVerified?: boolean;
    type?: number;
    avatar?: object;
    createdAt?: string;
    updatedAt?: string;
  
    constructor(data?: any) {
      if (data) {
        Object.assign(this, data);
        if (data.userId) this.id = data.userId;
      }
    }
  
    deserialize(input: any) {
      this.code = input.code;
      this.email = input.email;
      this.sellerId = input.seller_id;
      this.password = input.password;
      this.firstName = input.first_name;
      this.lastName = input.last_name;
      this.phone = input.phone;
      this.status = input.status;
      this.isVerified = input.is_verified;
      this.type = input.type;
      this.avatar = input.avatar;
      this.id = input.user_id || input.id || input._id;
      // this.userProfile = new IUserProfile().deserialize(input.user_profile);
      // this.userBank = new IUserBank().deserialize(input.user_bank);
      // this.userSocial = new IUserSocial().deserialize(input.user_social);
      this.accessToken = input.access_token;
  
      return this;
    }
    serialize(): any {
      return {
        id: this.id,
        is_verified: this.isVerified,
        code: this.code,
        email: this.email,
        password: this.password,
        seller_id: this.sellerId,
        first_name: this.firstName,
        last_name: this.lastName,
        phone: this.phone,
        status: this.status,
        type: this.type,
        avatar: this.avatar,
        user_social: (this.userSocial) ? this.userSocial.serialize() : undefined,
        user_profile: (this.userProfile) ? this.userProfile.serialize() : undefined,
        user_bank: (this.userBank) ? this.userBank.serialize() : undefined,
        accesstoken: (this.accessToken) ? this.accessToken.serialize() : undefined,
      }
    }
}

export class UserSocial {
    id?: string;
    uuid?: string;
    userId?: string;
    email?: string;
    phone?: string;
    extraData?: object;
    provider?: number;
    createdAt?: string;
    updatedAt?: string;

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
        }
    }

    deserialize(input: any): this {
        this.userId = input.user_id;
        this.email = input.email;
        this.phone = input.phone;
        this.extraData = input.extra_data;
        this.provider = input.provider;
        this.createdAt = input.created_at;
        this.updatedAt = input.updated_at;

        return this;
    }

    serialize(): any {
        return {
            id: this.id,
            user_id: this.userId,
            email: this.email,
            phone: this.phone,
            uuid: this.uuid,
            extra_data: this.extraData,
            provider: this.provider,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        }
    }
}

export class UserProfile {
    id?: string;
    _id?: string;
    userId?: string;
    cardFront?: File;
    cardBack?: File;
    shopUrls?: Array<string>;
    orderReturnAddress?: string;
    orderReturnProvince?: number;
    orderCountries?: Array<string>;
    orderSourceType?: number;
    personalUrlProfile?: string;
    sellerUrlProfile?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
        }

    }
    deserialize(input: any): this {
        // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
        this.id = input.id;
        this.userId = input.user_id;
        this.cardFront = input.card_front;
        this.cardBack = input.card_back;
        this.shopUrls = input.shop_urls;
        this.orderReturnAddress = input.order_return_address;
        this.orderReturnProvince = input.order_return_province;
        this.orderCountries = input.order_countries;
        this.orderSourceType = input.order_source_type;
        this.personalUrlProfile = input.personal_url_profile;
        this.sellerUrlProfile = input.seller_url_profile;
        this.createdAt = input.created_at;
        this.updatedAt = input.updated_at;

        return this;
    }

    serialize(): any {
        return {
            id: this.id,
            user_id: this.userId,
            card_front: (this.cardFront) ? new File(this.cardFront).serialize() : null,
            card_back: (this.cardBack) ? new File(this.cardBack).serialize() : null,
            shop_urls: this.shopUrls,
            order_return_address: this.orderReturnAddress,
            order_return_province: this.orderReturnProvince,
            order_countries: this.orderCountries,
            order_source_type: this.orderSourceType,
            personal_url_profile: this.personalUrlProfile,
            seller_url_profile: this.sellerUrlProfile,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        }
    }

}

export class UserBank {
    id?: string;
    _id?: string;
    userId?: string;
    accountHolder?: string;
    bankName?: string;
    bankBranch?: string;
    accountNumber?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
        }

    }
    deserialize(input: any): this {
        // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
        this.id = input.id;
        this.userId = input.user_id;
        this.accountHolder = input.account_holder;
        this.bankName = input.bank_name;
        this.bankBranch = input.bank_branch;
        this.accountNumber = input.account_number;
        this.createdAt = input.created_at;
        this.updatedAt = input.updated_at;

        return this;
    }

    serialize(): any {
        return {
            id: this.id,
            user_id: this.userId,
            account_holder: this.accountHolder,
            bank_name: this.bankName,
            bank_branch: this.bankBranch,
            account_number: this.accountNumber,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        }
    }
}

export class AccessToken {
    _id?: string;
    userId?: string;
    token?: string;
    type?: number;
    expiresIn?: number;
    createdAt?: string;
    updatedAt?: string;

    constructor(data?: any) {
        if (data) {
            Object.assign(data, this);
        }
    }

    deserialize(input: any) {
        this.userId = input.user_id;
        this.token = input.token;
        this.type = input.type;
        this.expiresIn = input.expires_in;
        return this;
    }

    serialize(): any {
        return {
            user_id: this.userId,
            token: this.token,
            type: this.type,
            expires_in: this.expiresIn
        }
    }

}
