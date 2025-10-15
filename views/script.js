// ---------------- DECIMAL → BINÁRIO ----------------
function decimalParaBinario() {
  let decimalInput = document.getElementById("decimal");
  let binarioInput = document.getElementById("binario");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let raw = decimalInput.value.trim().replace(",", ".");
  if (raw === "" || isNaN(raw)) {
    binarioInput.value = "";
    resultado.innerHTML = "Digite um número decimal válido.";
    passos.innerHTML = "";
    return;
  }

  let decimal = parseFloat(raw);
  let parteInteira = Math.floor(decimal);
  let parteFracionaria = decimal - parteInteira;

  let etapas = [];

  // ----- Parte inteira -----
  let binInt = "";
  if (parteInteira === 0) {
    binInt = "0";
    etapas.push("Parte inteira é 0 → Binário = 0");
  } else {
    while (parteInteira > 0) {
      let resto = parteInteira % 2;
      etapas.push(`${parteInteira} ÷ 2 = ${Math.floor(parteInteira / 2)} resto ${resto}`);
      binInt = resto + binInt;
      parteInteira = Math.floor(parteInteira / 2);
    }
  }

  // ----- Parte fracionária -----
  let binFrac = "";
  let limite = 15;
  if (parteFracionaria > 0) {
    etapas.push("<br>Parte fracionária:");
    while (parteFracionaria > 0 && limite-- > 0) {
      parteFracionaria *= 2;
      let bit = Math.floor(parteFracionaria);
      etapas.push(`${parteFracionaria.toFixed(10)} → bit = ${bit}`);
      binFrac += bit;
      parteFracionaria -= bit;
    }
  }

  let resultadoFinal = binInt + (binFrac ? "." + binFrac : "");
  binarioInput.value = resultadoFinal;

  resultado.innerHTML = `Decimal: <strong>( ${decimal} )₁₀</strong> → Binário: <strong>( ${resultadoFinal} )₂</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${decimal} )₁₀ → ( ${resultadoFinal} )₂</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Decimal → Binário:</strong><br>" + etapas.join("<br>");
}

// ---------------- BINÁRIO → DECIMAL ----------------
function binarioParaDecimal() {
  let binarioInput = document.getElementById("binario");
  let decimalInput = document.getElementById("decimal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let bin = binarioInput.value.trim().replace(",", ".");
  if (bin === "" || !/^[01]+(\.[01]+)?$/.test(bin)) {
    decimalInput.value = "";
    resultado.innerHTML = "Digite um número binário válido (somente 0 e 1).";
    passos.innerHTML = "";
    return;
  }

  let [intParte, fracParte = ""] = bin.split(".");
  let etapas = [];
  let decimal = 0;

  // Parte inteira
  etapas.push("Parte inteira:");
  for (let i = 0; i < intParte.length; i++) {
    let bit = parseInt(intParte[intParte.length - 1 - i]);
    let valor = bit * Math.pow(2, i);
    etapas.push(`${bit} × 2^${i} = ${valor}`);
    decimal += valor;
  }

  // Parte fracionária
  if (fracParte.length > 0) {
    etapas.push("<br>Parte fracionária:");
    for (let i = 0; i < fracParte.length; i++) {
      let bit = parseInt(fracParte[i]);
      let valor = bit * Math.pow(2, -(i + 1));
      etapas.push(`${bit} × 2^-${i + 1} = ${valor}`);
      decimal += valor;
    }
  }

  decimalInput.value = decimal;
  resultado.innerHTML = `Binário: <strong>( ${bin} )₂</strong> → Decimal: <strong>( ${decimal} )₁₀</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${bin} )₂ → ( ${decimal} )₁₀</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Binário → Decimal:</strong><br>" + etapas.join("<br>");
}

// ---------------- DECIMAL → OCTAL ----------------
function decimalParaOctal() {
  let decimalInput = document.getElementById("decimal");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let raw = decimalInput.value.trim().replace(",", ".");
  if (raw === "" || isNaN(raw)) {
    octalInput.value = "";
    resultado.innerHTML = "Digite um número decimal válido.";
    passos.innerHTML = "";
    return;
  }

  let decimal = parseFloat(raw);
  let parteInteira = Math.floor(decimal);
  let parteFracionaria = decimal - parteInteira;

  let etapas = [];

  // ----- Parte inteira -----
  let octInt = "";
  if (parteInteira === 0) {
    octInt = "0";
    etapas.push("Parte inteira é 0 → Octal = 0");
  } else {
    while (parteInteira > 0) {
      let resto = parteInteira % 8;
      etapas.push(`${parteInteira} ÷ 8 = ${Math.floor(parteInteira / 8)} resto ${resto}`);
      octInt = resto + octInt;
      parteInteira = Math.floor(parteInteira / 8);
    }
  }

  // ----- Parte fracionária -----
  let octFrac = "";
  let limite = 15;
  if (parteFracionaria > 0) {
    etapas.push("<br>Parte fracionária:");
    while (parteFracionaria > 0 && limite-- > 0) {
      parteFracionaria *= 8;
      let digito = Math.floor(parteFracionaria);
      etapas.push(`${parteFracionaria.toFixed(10)} → dígito = ${digito}`);
      octFrac += digito;
      parteFracionaria -= digito;
    }
  }

  let resultadoFinal = octInt + (octFrac ? "." + octFrac : "");
  octalInput.value = resultadoFinal;

  resultado.innerHTML = `Decimal: <strong>( ${decimal} )₁₀</strong> → Octal: <strong>( ${resultadoFinal} )₈</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${decimal} )₁₀ → ( ${resultadoFinal} )₈</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Decimal → Octal:</strong><br>" + etapas.join("<br>");
}

// ---------------- OCTAL → DECIMAL ----------------
function octalParaDecimal() {
  let octalInput = document.getElementById("octal");
  let decimalInput = document.getElementById("decimal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let oct = octalInput.value.trim().replace(",", ".");
  if (oct === "" || !/^[0-7]+(\.[0-7]+)?$/.test(oct)) {
    decimalInput.value = "";
    resultado.innerHTML = "Digite um número octal válido (0 a 7).";
    passos.innerHTML = "";
    return;
  }

  let [intParte, fracParte = ""] = oct.split(".");
  let etapas = [];
  let decimal = 0;

  // Parte inteira
  etapas.push("Parte inteira:");
  for (let i = 0; i < intParte.length; i++) {
    let digito = parseInt(intParte[intParte.length - 1 - i]);
    let valor = digito * Math.pow(8, i);
    etapas.push(`${digito} × 8^${i} = ${valor}`);
    decimal += valor;
  }

  // Parte fracionária
  if (fracParte.length > 0) {
    etapas.push("<br>Parte fracionária:");
    for (let i = 0; i < fracParte.length; i++) {
      let digito = parseInt(fracParte[i]);
      let valor = digito * Math.pow(8, -(i + 1));
      etapas.push(`${digito} × 8^-${i + 1} = ${valor}`);
      decimal += valor;
    }
  }

  decimalInput.value = decimal;
  resultado.innerHTML = `Octal: <strong>( ${oct} )₈</strong> → Decimal: <strong>( ${decimal} )₁₀</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${oct} )₈ → ( ${decimal} )₁₀</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Octal → Decimal:</strong><br>" + etapas.join("<br>");
}

// ---------------- DECIMAL → HEXADECIMAL ----------------
function decimalParaHex() {
  const decimalInput = document.getElementById("decimal");
  const hexInput = document.getElementById("hex");
  const resultado = document.getElementById("resultado");
  const passos = document.getElementById("passos");

  const raw = decimalInput.value.trim().replace(",", ".");
  if (raw === "" || isNaN(raw)) {
    hexInput.value = "";
    resultado.innerHTML = "Digite um número decimal válido.";
    passos.innerHTML = "";
    return;
  }

  const decimal = parseFloat(raw);
  let parteInteira = Math.floor(decimal);
  let parteFracionaria = decimal - parteInteira;

  const etapas = [];
  const hexChars = "0123456789ABCDEF";

  // Parte inteira
  let hexInt = "";
  if (parteInteira === 0) {
    hexInt = "0";
    etapas.push("Parte inteira é 0 → Hex = 0");
  } else {
    while (parteInteira > 0) {
      let resto = parteInteira % 16;
      etapas.push(`${parteInteira} ÷ 16 = ${Math.floor(parteInteira / 16)} resto ${resto} (→ ${hexChars[resto]})`);
      hexInt = hexChars[resto] + hexInt;
      parteInteira = Math.floor(parteInteira / 16);
    }
  }

  // Parte fracionária
  let hexFrac = "";
  let limite = 15;
  if (parteFracionaria > 0) {
    etapas.push("<br>Parte fracionária:");
    while (parteFracionaria > 0 && limite-- > 0) {
      parteFracionaria *= 16;
      let inteiro = Math.floor(parteFracionaria);
      etapas.push(`${parteFracionaria.toFixed(10)} → dígito = ${hexChars[inteiro]}`);
      hexFrac += hexChars[inteiro];
      parteFracionaria -= inteiro;
    }
  }

  const resultadoFinal = hexInt + (hexFrac ? "." + hexFrac : "");
  hexInput.value = resultadoFinal;

  resultado.innerHTML = `Decimal: <strong>( ${decimal} )₁₀</strong> → Hexadecimal: <strong>( ${resultadoFinal} )₁₆</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${decimal} )₁₀ → ( ${resultadoFinal} )₁₆</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Decimal → Hexadecimal:</strong><br>" + etapas.join("<br>");
}

// ---------------- HEXADECIMAL → DECIMAL ----------------
function hexParaDecimal() {
  let hexInput = document.getElementById("hex");
  let decimalInput = document.getElementById("decimal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let hex = hexInput.value.trim().replace(",", ".").toUpperCase();
  if (hex === "" || !/^[0-9A-F]+(\.[0-9A-F]+)?$/.test(hex)) {
    decimalInput.value = "";
    resultado.innerHTML = "Digite um número hexadecimal válido (0-9 e A-F).";
    passos.innerHTML = "";
    return;
  }

  let [intParte, fracParte = ""] = hex.split(".");
  let etapas = [];
  let decimal = 0;
  const hexMap = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };

  // Parte inteira
  etapas.push("Parte inteira:");
  for (let i = 0; i < intParte.length; i++) {
    let char = intParte[intParte.length - 1 - i];
    let valor = (hexMap[char] !== undefined ? hexMap[char] : parseInt(char)) * Math.pow(16, i);
    etapas.push(`${char} × 16^${i} = ${valor}`);
    decimal += valor;
  }

  // Parte fracionária
  if (fracParte.length > 0) {
    etapas.push("<br>Parte fracionária:");
    for (let i = 0; i < fracParte.length; i++) {
      let char = fracParte[i];
      let valor = (hexMap[char] !== undefined ? hexMap[char] : parseInt(char)) * Math.pow(16, -(i + 1));
      etapas.push(`${char} × 16^-${i + 1} = ${valor}`);
      decimal += valor;
    }
  }

  decimalInput.value = decimal;
  resultado.innerHTML = `Hexadecimal: <strong>( ${hex} )₁₆</strong> → Decimal: <strong>( ${decimal} )₁₀</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${hex} )₁₆ → ( ${decimal} )₁₀</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Hexadecimal → Decimal:</strong><br>" + etapas.join("<br>");
}

// ---------------- BINARIO → EXADECIMAL ----------------
function binarioParaHex() {
  const binarioInput = document.getElementById("binario");
  const hexInput = document.getElementById("hex");
  const resultado = document.getElementById("resultado");
  const passos = document.getElementById("passos");

  const raw = binarioInput.value.trim().replace(/\s+/g, "");
  if (raw === "") {
    hexInput.value = "";
    resultado.innerHTML = "Digite um valor em qualquer campo...";
    passos.innerHTML = "";
    return;
  }

  // agora aceita vírgula OU ponto
  if (!/^[01]+([.,][01]*)?$/.test(raw)) {
    hexInput.value = "";
    resultado.innerHTML = "Digite um binário válido (0 e 1, com ponto ou vírgula opcional).";
    passos.innerHTML = "";
    return;
  }

  const bin = raw.replace(/,/g, ".");
  let [parteInteira, parteFracionaria = ""] = bin.split(".");

  const etapas = [];
  const hexChars = "0123456789ABCDEF";

  // Parte inteira (múltiplo de 4)
  while (parteInteira.length % 4 !== 0) {
    parteInteira = "0" + parteInteira;
  }
  if (parteInteira.length > 0) etapas.push(`Parte inteira ajustada: ${parteInteira}`);

  let hexInt = "";
  for (let i = 0; i < parteInteira.length; i += 4) {
    const grupo = parteInteira.substr(i, 4);
    const val = parseInt(grupo, 2);
    etapas.push(`${grupo} → ${val} → '${hexChars[val]}'`);
    hexInt += hexChars[val];
  }
  hexInt = hexInt.replace(/^0+/, "") || "0";

  // Parte fracionária (múltiplo de 4)
  let hexFrac = "";
  if (parteFracionaria.length > 0) {
    while (parteFracionaria.length % 4 !== 0) {
      parteFracionaria = parteFracionaria + "0";
    }
    etapas.push(`<br>Parte fracionária ajustada: ${parteFracionaria}`);

    for (let i = 0; i < parteFracionaria.length; i += 4) {
      const grupo = parteFracionaria.substr(i, 4);
      const val = parseInt(grupo, 2);
      etapas.push(`${grupo} → ${val} → '${hexChars[val]}'`);
      hexFrac += hexChars[val];
    }
    hexFrac = hexFrac.replace(/0+$/, "");
  }

  const resultadoFinal = hexInt + (hexFrac ? "." + hexFrac : "");
  hexInput.value = resultadoFinal;

  resultado.innerHTML = `Binário: <strong>( ${raw} )₂</strong> → Hexadecimal: <strong>( ${resultadoFinal} )₁₆</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${raw} )₂ → ( ${resultadoFinal} )₁₆</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Binário → Hex:</strong><br>" + etapas.join("<br>");
}

// ---------------- HEXADECIMAL → BINARIO ----------------
function hexParaBinario() {
  const hexInput = document.getElementById("hex");
  const binarioInput = document.getElementById("binario");
  const resultado = document.getElementById("resultado");
  const passos = document.getElementById("passos");

  const raw = hexInput.value.trim().replace(/\s+/g, "");
  if (raw === "") {
    binarioInput.value = "";
    resultado.innerHTML = "Digite um valor em qualquer campo...";
    passos.innerHTML = "";
    return;
  }

  // aceita A, B, C, D, E, F com ponto ou vírgula
  if (!/^[0-9A-Fa-f]+([.,][0-9A-Fa-f]*)?$/.test(raw)) {
    binarioInput.value = "";
    resultado.innerHTML = "Digite um hexadecimal válido (0–9 e A–F, com ponto ou vírgula opcional).";
    passos.innerHTML = "";
    return;
  }

  const hex = raw.replace(/,/g, ".").toUpperCase();
  let [parteInteira, parteFracionaria = ""] = hex.split(".");

  const etapas = [];
  const hexChars = "0123456789ABCDEF";

  // Parte inteira: cada dígito hex → 4 bits binários
  let binInt = "";
  for (let i = 0; i < parteInteira.length; i++) {
    const digito = parteInteira[i];
    const val = parseInt(digito, 16);
    const bin = val.toString(2).padStart(4, "0");
    etapas.push(`${digito} (hex) → ${val} (dec) → ${bin} (bin)`);
    binInt += bin;
  }
  binInt = binInt.replace(/^0+/, "") || "0";

  // Parte fracionária: cada dígito hex → 4 bits binários
  let binFrac = "";
  if (parteFracionaria.length > 0) {
    etapas.push("<br>Parte fracionária:");
    for (let i = 0; i < parteFracionaria.length; i++) {
      const digito = parteFracionaria[i];
      const val = parseInt(digito, 16);
      const bin = val.toString(2).padStart(4, "0");
      etapas.push(`${digito} (hex) → ${val} (dec) → ${bin} (bin)`);
      binFrac += bin;
    }
    binFrac = binFrac.replace(/0+$/, "");
  }

  const resultadoFinal = binInt + (binFrac ? "." + binFrac : "");
  binarioInput.value = resultadoFinal;

  resultado.innerHTML = `Hexadecimal: <strong>( ${raw} )₁₆</strong> → Binário: <strong>( ${resultadoFinal} )₂</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${raw} )₁₆ → ( ${resultadoFinal} )₂</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Hexadecimal → Binário:</strong><br>" + etapas.join("<br>");
}

// ---------------- OCTAL → EXADECIMAL ----------------
function octalParaHexadecimal() {
  const octalInput = document.getElementById("octal");
  const hexInput = document.getElementById("hex");
  const resultado = document.getElementById("resultado");
  const passos = document.getElementById("passos");

  const raw = octalInput.value.trim().replace(/\s+/g, ""); // remove espaços
  if (raw === "") {
    hexInput.value = "";
    resultado.innerHTML = "Digite um valor em qualquer campo...";
    passos.innerHTML = "";
    return;
  }

  // ✅ aceita "12", "12.", "12,", "12.3", "12,3"
  if (!/^[0-7]+([.,][0-7]*)?$/.test(raw)) {
    hexInput.value = "";
    resultado.innerHTML = "Digite um octal válido (0–7, opcionalmente com ponto ou vírgula).";
    passos.innerHTML = "";
    return;
  }

  // Normaliza para cálculo (troca vírgula por ponto)
  const octal = raw.replace(/,/g, ".");
  const [parteInteira, parteFracionaria = ""] = octal.split(".");

  let decimal = 0;
  const etapas = [];

  // ----- Parte inteira -----
  etapas.push("Parte inteira:");
  parteInteira.split("").reverse().forEach((digito, i) => {
    const v = parseInt(digito, 10);
    const parcial = v * Math.pow(8, i);
    etapas.push(`${digito} × 8^${i} = ${parcial}`);
    decimal += parcial;
  });

  // ----- Parte fracionária -----
  if (parteFracionaria.length > 0) {
    etapas.push("<br>Parte fracionária:");
    parteFracionaria.split("").forEach((digito, i) => {
      const v = parseInt(digito, 10);
      const parcial = v * Math.pow(8, -(i + 1));
      etapas.push(`${digito} × 8^-${i + 1} = ${parcial}`);
      decimal += parcial;
    });
  }

  // ----- Decimal → Hexadecimal -----
  const inteiro = Math.floor(decimal);
  let fracao = decimal - inteiro;

  const hexInteiro = inteiro.toString(16).toUpperCase();
  let hexFracao = "";
  let limite = 6; // casas decimais

  while (fracao > 0 && limite > 0) {
    fracao *= 16;
    const d = Math.floor(fracao);
    hexFracao += d.toString(16).toUpperCase();
    fracao -= d;
    limite--;
  }

  const hexadecimal = hexInteiro + (hexFracao ? "." + hexFracao : "");

  // Atualiza campos e passos
  hexInput.value = hexadecimal;
  resultado.innerHTML = `Octal: <strong>( ${raw} )₈</strong> → Hexadecimal: <strong>( ${hexadecimal} )₁₆</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${raw} )₈ → ( ${hexadecimal} )₁₆</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Octal → Hexadecimal:</strong><br>" + etapas.join("<br>");
}

// ---------------- HEXADECIMAL → OCTAL ----------------
function hexParaOctal() {
  let hexInput = document.getElementById("hex");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let hex = hexInput.value.trim().replace(",", ".").toUpperCase();
  if (hex === "" || !/^[0-9A-F]+(\.[0-9A-F]+)?$/.test(hex)) {
    octalInput.value = "";
    resultado.innerHTML = "Digite um número hexadecimal válido (0-9 e A-F).";
    passos.innerHTML = "";
    return;
  }

  let [intParte, fracParte = ""] = hex.split(".");
  const hexMap = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
  let decimal = 0;
  let etapas = [];

  // Parte inteira
  etapas.push("Parte inteira:");
  for (let i = 0; i < intParte.length; i++) {
    let char = intParte[intParte.length - 1 - i];
    let valor = (hexMap[char] !== undefined ? hexMap[char] : parseInt(char)) * Math.pow(16, i);
    etapas.push(`${char} × 16^${i} = ${valor}`);
    decimal += valor;
  }

  // Parte fracionária
  if (fracParte.length > 0) {
    etapas.push("<br>Parte fracionária:");
    for (let i = 0; i < fracParte.length; i++) {
      let char = fracParte[i];
      let valor = (hexMap[char] !== undefined ? hexMap[char] : parseInt(char)) * Math.pow(16, -(i + 1));
      etapas.push(`${char} × 16^-${i + 1} = ${valor}`);
      decimal += valor;
    }
  }

  // Decimal → Octal
  let oct = decimal.toString(8);

  octalInput.value = oct;
  resultado.innerHTML = `Hexadecimal: <strong>( ${hex} )₁₆</strong> → Octal: <strong>( ${oct} )₈</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${hex} )₁₆ → ( ${oct} )₈</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Hexadecimal → Octal:</strong><br>" + etapas.join("<br>");
}

// ---------------- BINARIO → OCTAL ----------------
function binarioParaOctal() {
  let binarioInput = document.getElementById("binario");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let binario = binarioInput.value.trim();

  if (binario === "" || !/^[01.]+$/.test(binario) || (binario.split('.').length > 2)) {
    octalInput.value = "";
    resultado.innerHTML = "Digite um valor binário válido (0, 1 e no máximo um ponto).";
    passos.innerHTML = "";
    return;
  }

  let [parteInteira, parteFracionaria] = binario.split(".");
  parteFracionaria = parteFracionaria || "";

  let etapas = [];

  // ----- Parte inteira -----
  while (parteInteira.length % 3 !== 0) {
    parteInteira = "0" + parteInteira;
  }
  etapas.push(`Parte inteira ajustada: ${parteInteira}`);

  let octInt = "";
  for (let i = 0; i < parteInteira.length; i += 3) {
    let grupo = parteInteira.substr(i, 3);
    let valorDecimal = parseInt(grupo, 2);
    etapas.push(`${grupo} → ${valorDecimal}`);
    octInt += valorDecimal;
  }

  // Remover zeros à esquerda
  octInt = octInt.replace(/^0+/, "") || "0";

  // ----- Parte fracionária -----
  let octFrac = "";
  if (parteFracionaria.length > 0) {
    while (parteFracionaria.length % 3 !== 0) {
      parteFracionaria = parteFracionaria + "0";
    }
    etapas.push(`<br>Parte fracionária ajustada: ${parteFracionaria}`);

    for (let i = 0; i < parteFracionaria.length; i += 3) {
      let grupo = parteFracionaria.substr(i, 3);
      let valorDecimal = parseInt(grupo, 2);
      etapas.push(`${grupo} → ${valorDecimal}`);
      octFrac += valorDecimal;
    }
    // remover zeros inúteis do final
    octFrac = octFrac.replace(/0+$/, "");
  }

  let resultadoFinal = octInt + (octFrac ? "." + octFrac : "");
  octalInput.value = resultadoFinal;

  resultado.innerHTML = `Binário: <strong>( ${binario} )₂</strong> → Octal: <strong>( ${resultadoFinal} )₈</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${binario} )₂ → ( ${resultadoFinal} )₈</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Binário → Octal:</strong><br>" + etapas.join("<br>");
}

// ---------------- OCTAL → BINARIO ----------------
function octalParaBinario() {
  let octalInput = document.getElementById("octal");
  let binarioInput = document.getElementById("binario");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let raw = octalInput.value.trim();
  if (raw === "" || !/^[0-7.]+$/.test(raw) || (raw.split('.').length > 2)) {
    binarioInput.value = "";
    resultado.innerHTML = "Digite um valor octal válido (0–7 e no máximo um ponto).";
    passos.innerHTML = "";
    return;
  }

  let [parteInteira, parteFracionaria] = raw.split(".");
  parteFracionaria = parteFracionaria || "";

  let etapas = [];
  let binInt = "";

  // ----- Parte inteira: cada dígito octal → 3 bits -----
  for (let i = 0; i < parteInteira.length; i++) {
    let digito = parteInteira[i];
    let bin = parseInt(digito, 8).toString(2).padStart(3, "0");
    etapas.push(`${digito} (octal) → ${bin} (binário)`);
    binInt += bin;
  }
  binInt = binInt.replace(/^0+/, "") || "0";

  // ----- Parte fracionária: cada dígito octal → 3 bits -----
  let binFrac = "";
  if (parteFracionaria.length > 0) {
    etapas.push("<br>Parte fracionária:");
    for (let i = 0; i < parteFracionaria.length; i++) {
      let digito = parteFracionaria[i];
      let bin = parseInt(digito, 8).toString(2).padStart(3, "0");
      etapas.push(`${digito} (octal) → ${bin} (binário)`);
      binFrac += bin;
    }
    binFrac = binFrac.replace(/0+$/, "");
  }

  let resultadoFinal = binInt + (binFrac ? "." + binFrac : "");
  binarioInput.value = resultadoFinal;

  resultado.innerHTML = `Octal: <strong>( ${raw} )₈</strong> → Binário: <strong>( ${resultadoFinal} )₂</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${raw} )₈ → ( ${resultadoFinal} )₂</strong>`);
  passos.innerHTML = "<strong>Passos da conversão Octal → Binário:</strong><br>" + etapas.join("<br>");
}

// -------------------------BUTTON LIMPAR LABEL ------------------------
function limparTudo() {
  document.getElementById("decimal").value = "";
  document.getElementById("binario").value = "";
  document.getElementById("octal").value = "";
  document.getElementById("hex").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("passos").innerHTML = "";
}