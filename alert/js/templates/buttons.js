export default function buttonsTpl (data) {
  return `
    <div class="topAdd-container" style="height: ${data.height * 0.1}px">
    <div class="topApp-buttons">
      <button class="topApp-button">Продолжить</button>
      <button class="topApp-button">Отмена</button>
    </div>
    </div>
    `
}