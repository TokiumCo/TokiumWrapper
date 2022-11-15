import tokiumAPI from './api';

class Tokium {
    verified: boolean;
    collectionURL: string;
    address: string;
    constructor(verified: boolean, collectionURL: string, address: string){
        this.verified = verified;
        this.collectionURL = collectionURL;
        this.address = address
    }


    async getCollectionRoyalties() {
        const collectionRoyalties = await tokiumAPI({
            method: 'post',
            url: '/getCollectionRoyalties',
            data:{
                collectionLink: this.collectionURL,
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err)
        });
        return collectionRoyalties
    }

    async getWalletTokens() {
        const getTokens = await tokiumAPI({
            method: 'post',
            url: '/getTokensInWallet',
            data:{
                collectionLink: this.collectionURL,
                address: this.address,
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err)
        });
        return getTokens
    }

    async getTokenHistory() {
        const getHistory = await tokiumAPI({
            method: 'post',
            url: '/getTokenTransactionHistory',
            data:{
                collectionLink: this.collectionURL,
                address: this.address,
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err)
        });
        return getHistory
    }

    async hasPaidRoyalties() {
        const test = await tokiumAPI({
            method: 'POST',
            url: '/hasPaidRoyalties',
            data:{
                    collectionLink: this.collectionURL,
                    address: this.address,
                }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err)
        });
        return test
    }

    async verifyTokenWithRoyalty() {
        const { royaltiesPaid, tokensOwned} = await this.hasPaidRoyalties();
        
        if (royaltiesPaid === true && tokensOwned > 0) {
            this.verified = true;
        } else {
            this.verified = false;
        }
        return this.verified;
    }
}

export { Tokium };