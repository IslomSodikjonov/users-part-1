function userBoxs(item) {

    let userBox = document.createElement('div')
    userBox.className = 'user_box'

    let userName = document.createElement('h3')
    userName.className = 'username'
    userName.textContent = item.name

    let userInfo = document.createElement('div')
    userInfo.className = 'user_info'

    let cmp = document.createElement('p')
    cmp.className = 'company'
    cmp.textContent = 'Company:'

    let web = document.createElement('p')
    web.className = 'website'
    web.textContent = 'Website:'

    let phoneNumber = document.createElement('p')
    phoneNumber.className = 'phone_number'
    phoneNumber.textContent = 'Phone:'

    let companyTxt = document.createElement('span')
    companyTxt.className = 'company_txt'
    companyTxt.textContent = item.company.name

    let websiteTxt = document.createElement('span')
    websiteTxt.className = 'website_txt'
    websiteTxt.textContent = item.website

    let phoneTxt = document.createElement('span')
    phoneTxt.className = 'phone_txt'
    phoneTxt.textContent = item.phone

    let btnMore = document.createElement('button')
    btnMore.className = 'more'
    btnMore.textContent = 'Подробнее'



    userBox.append(userName, userInfo, btnMore)
    userInfo.append(cmp, web, phoneNumber)
    cmp.append(companyTxt)
    web.append(websiteTxt)
    phoneNumber.append(phoneTxt)

    return userBox
}


export { userBoxs }
