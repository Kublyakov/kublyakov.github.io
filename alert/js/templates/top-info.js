export default function topInfoTpl (data) {
  return `
      <div class="topAdd-container">
      <div class="topApp-title">
      <img 
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABUAAAAVABcGm+4AAADiklEQVR42u2bv04bQRCHZ1FoaKho6SI5TSSktDwBqaGPqGlQkFLQoiiioeYBwgOQF6COiJSGSKmgJA0poCCCL8WtFQI+37+dnV2zn0R39s3+bszZ+92IFAqFQqFQKBRmBWANWLOuYyYA5oEz/zdvXU/2ANv8Y9u6nqwBloCrB4FeAUvWdWULcMhTDq3ryhJgBbibEOgdsGJdX1YADjihnhPAWdeZDcAGzWxY15kFwAJw3iLQc2DBut7HzFkXMIH3IrLc4rhlf2yhDmAZuG7RnWOugTbhP0+Aow5hjjmyrjtJgFXgvkeg98Cqdf1JAcwBpz3CHHMKpHg/sAHYHBDmmE3rdSQBsAhcBgj0Eli0Xk8KH5NdEQmx4bHk3+v5AoyA2wDdOeYWGFmvyzLQ44Bhjjm2XpdVmGsKYY4x0yUmOzZUKuO7iGh9PH+IyGvn3J/Ya7O6KW2JXpji33vLYmHRO5RKYfwUEe2vOL9F5KVz7lfM9Vl06J7ohyn+HHuxFxe1Q6nUxVeJdyHvReSNc+5brDVG61AqZXEQ85z+XAdE1CUxF7cuIha7Qqv+3FGIcuWoVMWZtNuJ1+BCRF455260TxSrQ9tqjYd8dDWIyIeO7xVNl6gHSqUodmIspoEdIuiSGB36SURSsJMLvhZVVAOlUhPRbggtWEdZl6gFSqUkDsRov6AGJ9XXKLV1a3boOxFJ8RmkFV+bCiqBUqmI6D/7OrCHki7R6tBQWkMLNV0SPFCvIEy2zjqypaFLNDp0X0RyeBZ+3tcalKCBevWQ07RG8OmSYIF6rRH8ikdgn4DTJSE7VFtraBH0f36QQL3WyPkhg11Smi5h8rRGbgSZLhn8s9BAa2gRRJcMCsFIa2gRRJcMDcJKa2gxeHes99VIQGtoMUiXDOnQPlojBwbpkl4d6lXCmaSxE6/BjVRdetH1hX07NIbWCCnputJbl3QONEGtoUUvXdIp0ES1hha9dEnXDk1Va2jRWZe0DjQDraFFJ13SpUNT1xpadNr4aRVoRlpDi9a6pNXNhWqyIqedeA2+OOfeNh3U2KEZag0tWumSqR0aYVojNxqnS5o6NFetoUXjvaS2QyNOa+TG1OmSaR0aa1ojN6Z+H5/YoTOkNbSo1SVPApsxraFFrS6ZFNqsaQ0tJu66/ZfwDGsNLZ7okhePDhiJyGfrKjNjJCKn1kUUCoVCoVAoFAqFQrr8BeRXEhcRYWu+AAAAAElFTkSuQmCC" alt="Alert"><span>Безопасность телефона<br>может быть под угрозой</span>
      </div>
    <div class="topApp-line"></div>

    <div class="topApp-os-alert">
      Ваш <span class="topApp-os">${data.os}</span> может быть заражен вирусом
    </div>

    <div class="topApp-date">${data.date}</div>

    <div class="topApp-wait">
      Пожалуйста, подождите завершения сканирования вашей операционной системы
      <span class="topApp-os">${data.os}</span>
    </div>
    </div>
    `
}