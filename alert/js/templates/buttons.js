export default function buttonsTpl (data) {
  return `
    <div class="topAdd-container">
    <div class="topApp-buttons">
      <a href="${window.config.btnContinueLink}" class="topApp-button topApp-buttonContinue">Продолжить</a>
      <a href="${window.config.btnCancelLink}" class="topApp-button topApp-buttonCancel">Отмена</a>
    </div>
    </div>
    `
}