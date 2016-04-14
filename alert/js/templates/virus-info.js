export default function virusInfoTpl (data) {
  return `
    <div class="topAdd-container">
    <div class="topApp-scan-file">${data.scan}</div>

    <div class="topApp-file-alerts">
      Предупреждение!
      <br>На вашем <span class="topApp-os">${data.os}</span> Возможно найдено (<span class="topApp-count">${data.count}
      </span>) Подозрительных файлов!
    </div>

    <div class="topApp-install-text">
      Установить рекомендуемое приложение, чтобы удалить возможный вирус в течение 1 минут 23 секунд.
    </div>
    </div>
    `
}