export default function progressbarTpl (data) {
  return `
    <div class="progress-bar">
      <span class="current-loading">%{data.load}</span>
      <div class="progress-bar-bg"></div>
    </div>
    `
}