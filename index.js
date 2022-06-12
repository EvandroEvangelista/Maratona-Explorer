// variáveis
const responces = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]
const responceElement = document.querySelector('#resposta')
const askInput = document.querySelector('#ask')
const askButton = document.querySelector('#askButton')

function askQuestion() {
  askInput.value

  if (askInput.value == '') {
    alert('Digite sua pergunta')
    return
  }

  askButton.setAttribute('disabled', true)

  const responce = '<div>' + askInput.value + '</div>'
  const totalResponces = responces.length
  const randomNumber = Math.floor(Math.random() * totalResponces)

  responceElement.innerHTML = responce + responces[randomNumber]

  responceElement.style.opacity = 1

  setTimeout(function () {
    responceElement.style.opacity = 0
    askButton.removeAttribute('disabled')
  }, 3000)
}
