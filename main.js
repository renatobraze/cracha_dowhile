const linksSocialMedia = {
  github: 'renatobraze',
  youtube: 'channel/UC9MkzbomJuBMul3QwRGB-Gw',
  facebook: 'renato.braze',
  instagram: 'imbrazee',
  twitter: 'eubraze'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
    document.title = `${data.name} - DoWhile 2021`
  })
}

getGithubProfileInfos()