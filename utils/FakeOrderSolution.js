export const isOTPStatusActive = (addonsList) => {
    addonsList.map((item) => {
        if (item.addons_id == 13 && item.status == 1) {
            return true
        }
        return false;
    })
}
