function normalizeText(text) {
  if (!text) return ""

  const limitedText = text.split(" ").slice(0, 20).join(" ")

  return limitedText
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
    .replace(/[^\w\s]/g, " ") // Reemplazar puntuación con espacios
    .replace(/\s+/g, " ") // Múltiples espacios a uno solo
    .trim()
}

function calculateSimilarity(text1, text2) {
  const words1 = text1.split(" ")
  const words2 = text2.split(" ")
  let matches = 0

  for (const word1 of words1) {
    for (const word2 of words2) {
      // Coincidencia exacta
      if (word1 === word2) {
        matches += 2
        continue
      }

      // Coincidencia parcial (una palabra contiene a la otra)
      if (word1.length > 3 && word2.length > 3) {
        if (word1.includes(word2) || word2.includes(word1)) {
          matches += 1
          continue
        }
      }

      // Tolerancia a errores ortográficos simples
      if (word1.length > 4 && word2.length > 4) {
        const distance = levenshteinDistance(word1, word2)
        const maxLength = Math.max(word1.length, word2.length)
        if (distance <= Math.floor(maxLength * 0.3)) {
          // 30% de tolerancia
          matches += 1
        }
      }
    }
  }

  return matches
}

function levenshteinDistance(str1, str2) {
  const matrix = []

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
      }
    }
  }

  return matrix[str2.length][str1.length]
}

class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById("themeToggle")
    this.themeIcon = document.getElementById("themeIcon")
    this.currentTheme = localStorage.getItem("theme") || "light"
    this.init()
  }

  init() {
    this.applyTheme(this.currentTheme)
    if (this.themeToggle) {
      this.themeToggle.addEventListener("click", () => this.toggleTheme())
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light"
    this.applyTheme(this.currentTheme)
    localStorage.setItem("theme", this.currentTheme)
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme)
    if (this.themeIcon) {
      this.themeIcon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun"
    }
  }
}

class KnowledgeDisplay {
  constructor() {
    this.knowledgeToggleBtn = document.getElementById("knowledgeToggleBtn")
    this.knowledgeContent = document.getElementById("knowledgeContent")
    this.knowledgeDisplay = document.getElementById("knowledgeDisplay")
    this.knowledgeChevron = document.getElementById("knowledgeChevron")
    this.isOpen = false
    this.init()
  }

  init() {
    if (this.knowledgeToggleBtn) {
      this.knowledgeToggleBtn.addEventListener("click", () => this.toggleKnowledge())
    }
    this.displayKnowledge()
  }

  toggleKnowledge() {
    this.isOpen = !this.isOpen
    if (this.knowledgeContent) {
      this.knowledgeContent.style.display = this.isOpen ? "block" : "none"
    }
    if (this.knowledgeChevron) {
      this.knowledgeChevron.style.transform = this.isOpen ? "rotate(180deg)" : "rotate(0deg)"
    }
    if (this.knowledgeToggleBtn) {
      this.knowledgeToggleBtn.innerHTML = `
        <i class="fas fa-brain"></i>
        ${this.isOpen ? "Ocultar" : "Ver"} Base de Conocimientos
        <i class="fas fa-chevron-${this.isOpen ? "up" : "down"}" id="knowledgeChevron" style="transform: ${this.isOpen ? "rotate(180deg)" : "rotate(0deg)"}; transition: transform 0.3s ease;"></i>
      `
    }
  }

  displayKnowledge() {
    if (!this.knowledgeDisplay) return

    const knowledgeBase = window.CESAR_KNOWLEDGE_BASE || []

    if (knowledgeBase.length === 0) {
      this.knowledgeDisplay.innerHTML = `
        <div style="text-align: center; padding: 20px; color: var(--text-secondary);">
          <i class="fas fa-exclamation-triangle" style="font-size: 2em; margin-bottom: 10px;"></i>
          <p>Base de conocimientos no cargada. Asegúrate de que README.js esté incluido.</p>
        </div>
      `
      return
    }

    const categories = {}
    knowledgeBase.forEach((item) => {
      if (!categories[item.category]) {
        categories[item.category] = []
      }
      categories[item.category].push(item)
    })

    let html = ""
    const categoryNames = {
      saludos: "🤝 Saludos y Presentación",
      colegio: "🏫 Colegio Santísimo Rosario",
      monteros: "🏙️ Monteros, Tucumán",
      dominicos: "⛪ Orden Dominica",
      cesar: "🤖 Sobre CeSaR",
      vidaEstudiantil: "🎓 Vida Estudiantil",
    }

    Object.keys(categories).forEach((category) => {
      html += `<div style="margin-bottom: 20px;">`
      html += `<h4 style="color: var(--primary-pink); margin-bottom: 10px;">${categoryNames[category] || category}</h4>`
      html += `<ul style="margin-left: 20px;">`

      categories[category].forEach((item) => {
        html += `<li style="margin-bottom: 5px;"><strong>Palabras clave:</strong> ${item.keywords.slice(0, 5).join(", ")}${item.keywords.length > 5 ? "..." : ""}</li>`
      })

      html += `</ul></div>`
    })

    html += `<div style="text-align: center; margin-top: 20px; padding: 15px; background: var(--bg-secondary); border-radius: 10px;">
      <strong>Total de respuestas programadas: ${knowledgeBase.length}</strong><br>
      <small>Puedo responder sobre estos temas con tolerancia a errores de ortografía</small>
    </div>`

    this.knowledgeDisplay.innerHTML = html
  }
}

class CeSaRChatbot {
  constructor() {
    this.messageInput = document.getElementById("messageInput")
    this.sendBtn = document.getElementById("sendBtn")
    this.chatMessages = document.getElementById("chatMessages")
    this.typingIndicator = document.getElementById("typingIndicator")
    this.chatForm = document.getElementById("chatForm")
    this.chatBubbleBtn = document.getElementById("chatBubbleBtn")
    this.chatPanel = document.getElementById("chatPanel")
    this.closeChatBtn = document.getElementById("closeChatBtn")

    this.init()
  }

  init() {
    if (this.chatForm) {
      this.chatForm.addEventListener("submit", (e) => {
        e.preventDefault()
        this.handleSend()
      })
    }

    if (this.chatBubbleBtn) {
      this.chatBubbleBtn.addEventListener("click", () => this.openChat())
    }

    if (this.closeChatBtn) {
      this.closeChatBtn.addEventListener("click", () => this.closeChat())
    }
  }

  openChat() {
    if (this.chatPanel) {
      this.chatPanel.classList.add("open")
    }
    if (this.chatBubbleBtn) {
      this.chatBubbleBtn.style.transform = "scale(0)"
      this.chatBubbleBtn.style.opacity = "0"
      setTimeout(() => {
        this.chatBubbleBtn.style.display = "none"
      }, 300)
    }
    if (this.sendBtn) {
      setTimeout(() => {
        this.sendBtn.style.transform = "scale(1)"
        this.sendBtn.style.opacity = "1"
      }, 200)
    }
  }

  closeChat() {
    if (this.chatPanel) {
      this.chatPanel.classList.remove("open")
    }
    setTimeout(() => {
      if (this.chatBubbleBtn) {
        this.chatBubbleBtn.style.display = "flex"
        setTimeout(() => {
          this.chatBubbleBtn.style.transform = "scale(1)"
          this.chatBubbleBtn.style.opacity = "1"
        }, 50)
      }
    }, 300)
  }

  addMessage(text, sender = "bot") {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${sender}`

    const avatar = document.createElement("div")
    avatar.className = "message-avatar"
    if (sender === "user") avatar.textContent = "U"

    const content = document.createElement("div")
    content.className = "message-content"

    if (sender === "user") {
      content.textContent = text
    } else {
      content.innerHTML = text
    }

    messageDiv.appendChild(avatar)
    messageDiv.appendChild(content)
    this.chatMessages.appendChild(messageDiv)
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight
  }

  showTyping() {
    if (this.typingIndicator) {
      this.typingIndicator.style.display = "flex"
      this.chatMessages.appendChild(this.typingIndicator)
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight
    }
  }

  hideTyping() {
    if (this.typingIndicator) {
      this.typingIndicator.style.display = "none"
    }
  }

  isTopicKnown(userText) {
    const knowledgeBase = window.CESAR_KNOWLEDGE_BASE || []
    const normalizedInput = normalizeText(userText)

    for (const item of knowledgeBase) {
      if (!Array.isArray(item.keywords)) continue

      for (const keyword of item.keywords) {
        const normalizedKeyword = normalizeText(keyword)
        const similarity = calculateSimilarity(normalizedInput, normalizedKeyword)

        if (similarity > 0) {
          return true
        }
      }
    }

    return false
  }

  async handleSend() {
    const raw = this.messageInput.value.trim()
    if (!raw) return

    this.addMessage(raw, "user")
    this.messageInput.value = ""
    this.showTyping()

    setTimeout(
      async () => {
        const resp = await this.getResponse(raw)
        this.hideTyping()
        this.addMessage(resp, "bot")
      },
      800 + Math.random() * 400,
    )
  }

  async getResponse(userText) {
    const knowledgeBase = window.CESAR_KNOWLEDGE_BASE || []
    const normalizedInput = normalizeText(userText)

    if (!this.isTopicKnown(userText)) {
      return "Lo siento, pero solo puedo ayudarte con información sobre el Colegio Santísimo Rosario, Monteros (Tucumán) y la comunidad dominica. 🤖 Esa información está en desarrollo. ¿Podrías preguntarme algo sobre estos temas?"
    }

    let bestMatch = { item: null, score: 0 }

    // Buscar la mejor coincidencia con tolerancia a errores ortográficos
    for (const item of knowledgeBase) {
      if (!Array.isArray(item.keywords)) continue

      let totalScore = 0

      for (const keyword of item.keywords) {
        const normalizedKeyword = normalizeText(keyword)
        const similarity = calculateSimilarity(normalizedInput, normalizedKeyword)
        totalScore += similarity
      }

      if (totalScore > bestMatch.score || (totalScore === bestMatch.score && item.category !== "saludos")) {
        bestMatch = { item, score: totalScore }
      }
    }

    if (bestMatch.item && bestMatch.score > 0) {
      return bestMatch.item.response
    }

    return "No encontré información específica sobre eso, pero puedo ayudarte con detalles sobre el Colegio Santísimo Rosario, Monteros o la comunidad dominica. 🤖 ¿Podrías ser más específico en tu pregunta?"
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const theme = new ThemeManager()
  const knowledgeDisplay = new KnowledgeDisplay()
  window.cesarBot = new CeSaRChatbot()
})
