export default function progressbarTpl (data) {
  return `
  <div class="topAdd-container" style="height: ${data.height * 0.1}px">
    <div class="topApp-progress-bar">
      <span class="topApp-current-loading"></span>
      <div class="topApp-progress-bar-bg"></div>
    </div>
    </div>
    `
}