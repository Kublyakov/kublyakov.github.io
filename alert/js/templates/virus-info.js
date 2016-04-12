export default function virus-infoTpl (data) {
  return `
    <div class="scan-file">${data.scan}</div>

    <div class="file-alerts">
      Предупреждение!
      <br>На вашем <span class="os">${data.os}</span>
      <br>Возможно найдено (<span class="count">${data.count}</span>)
      <br>Подозрительных файлов!
    </div>

    <div class="install-text">
      Установить рекомендуемое приложение,
      <br>чтобы удалить возможный вирус
      <br>в течение 1 минут 23 секунд.
    </div>
    `
}