import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });

async function generateTestsForURL(url, feature) {
  console.log(`🤖 Generando tests (Gemini) para: ${url}`);

  const prompt = `
    Eres un QA Automation Engineer experto en Playwright.
    Genera 3 test cases en JavaScript para Playwright que prueben: "${feature}"
    en la URL: ${url}
    
    Reglas:
    - Usa sintaxis de Módulos de ES (import en lugar de require)
    - Usa sintaxis moderna de Playwright con async/await
    - Incluye assertions claros con expect()
    - El código debe ejecutarse sin modificación
    - Responde SOLO con el código JavaScript, sin explicaciones, sin markdown de bloques de código (solo el código bruto)
    - Usa test.describe() y test()
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let code = response.text()
      .replace(/```javascript/g, '')
      .replace(/```/g, '')
      .trim();

    // Guarda el test generado
    const filename = `tests/generated/${feature.replace(/\s+/g, '-').toLowerCase()}.spec.js`;
    const dir = path.dirname(filename);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filename, code);
    
    console.log(`✅ Test generado: ${filename}`);
    return filename;
  } catch (error) {
    console.error('❌ Error generando tests con Gemini:', error);
  }
}

// Check if run directly
if (process.argv[1] === import.meta.filename || process.env.RUN_AI_GEN === 'true') {
  generateTestsForURL('https://www.saucedemo.com', 'checkout flow validation');
}

export { generateTestsForURL };
