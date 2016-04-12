export default function topInfoTpl (data) {
  return `
    <div class="title-container">
      <div class="title">Безопасность телефона может быть под угрозой</div>
    </div>
    <div class="line"></div>

    <div class="os-alert">
      Ваш <span class="os">${data.os}</span> может быть заражен вирусом
    </div>

    <div class="date">${data.date}</div>

    <div class="wait">
      Пожалуйста, подождите завершения сканирования вашей операционной системы
      <span class="os">${data.os}</span>
    </div>
    `
}