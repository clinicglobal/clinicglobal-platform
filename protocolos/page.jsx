"use client";

import { useState } from "react";
import { Layers, Wand2, Loader2, FileText } from "lucide-react";

export default function Protocolos() {
  const [area, setArea] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [personalizado, setPersonalizado] = useState("");
  const [gerando, setGerando] = useState(false);

  const [resultado, setResultado] = useState("");

  const gerarProtocolo = () => {
    setGerando(true);

    setTimeout(() => {
      const texto = `
✨ **Protocolo Premium – BonitaDerme Clinic Global (IA)**

Área selecionada: **${area}**
Objetivo principal: **${objetivo}**

---

💎 **Protocolo Recomendo (IA BonitaDerme)**

1️⃣ **Sessão 1 – Ativação**
• Início com termoterapia  
• Ultra + Cavitação (15 min cada área)  
• Enzimas lipolíticas (se aplicável)  
• Finaliza com drenagem linfática  

2️⃣ **Sessão 2 – Remodelação**
• Radiofrequência multipolar  
• Pump modelador  
• Biossintéticos de colágeno (opcional)  
• Massagem técnica reafirmante  

3️⃣ **Sessão 3 – Redução visceral**
• Laser lipolítico  
• Pump profundo  
• Endermo assistida  
• Drenagem segmentada  

4️⃣ **Sessão 4 – Textura + Firmeza**
• Radiofrequência térmica  
• Tonificação muscular  
• Pump 3D  
• Ativos firmadores  

---

📅 **Frequência Recomendada**
• 1 a 2x por semana  
• Revisão a cada 30 dias  

---

📈 **Resultados Esperados (IA)**
• Redução média: **3 a 7 cm por área**  
• Melhora da textura: **40%**  
• Melhora da firmeza: **20% por mês**  
• Redução de celulite: **30%**  

---

💜 **Protocolo Personalizado (feito pela IA)**  
${personalizado ? personalizado : "Nenhuma personalização adicionada."}

---

📄 **PDF Premium**
O sistema está pronto para exportar esse protocolo em PDF no layout BonitaDerme Global.

      `;
      setResultado(texto);
      setGerando(false);
    }, 2000);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-purple-700 flex items-center gap-3">
        <Layers /> Protocolos Inteligentes (IA)
      </h1>
      <p className="text-gray-600 mt-1">
        Gere protocolos completos, profissionais e personalizados com IA.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        {/* FORM */}
        <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
          <h2 className="text-xl font-semibold mb-4 flex gap-2 items-center">
            <Wand2 /> Criar Protocolo com IA
          </h2>

          <label className="font-semibold">Área corporal / facial</label>
          <select
            className="w-full p-2 border rounded-lg mt-1 mb-4"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Selecione…</option>
            <option>Abdômen</option>
            <option>Glúteos</option>
            <option>Cintura</option>
            <option>Rosto</option>
            <option>Celulite</option>
            <option>Papada</option>
            <option>Pernas</option>
            <option>Braços</option>
          </select>

          <label className="font-semibold">Objetivo do tratamento</label>
          <select
            className="w-full p-2 border rounded-lg mt-1 mb-4"
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
          >
            <option value="">Selecione…</option>
            <option>Redução de gordura</option>
            <option>Firmeza / Flacidez</option>
            <option>Celulite</option>
            <option>Volume linfático</option>
            <option>Modelação corporal</option>
            <option>Textura da pele</option>
          </select>

          <label className="font-semibold">Personalização (opcional)</label>
          <textarea
            className="w-full p-2 border rounded-lg mt-1 h-24"
            value={personalizado}
            onChange={(e) => setPersonalizado(e.target.value)}
            placeholder="Ex: Cliente pós-parto, diabética, retenção intensa…"
          ></textarea>

          <button
            onClick={gerarProtocolo}
            disabled={gerando}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold flex gap-2 justify-center mt-4"
          >
            {gerando ? (
              <>
                <Loader2 className="animate-spin" /> Gerando Protocolo…
              </>
            ) : (
              <>
                <Wand2 /> Gerar Protocolo Inteligente
              </>
            )}
          </button>
        </div>

        {/* RESULTADO */}
        <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <FileText /> Protocolo Gerado
          </h2>

          {resultado ? (
            <pre className="whitespace-pre-wrap text-sm leading-relaxed">
              {resultado}
            </pre>
          ) : (
            <p className="text-gray-400">
              Selecione os dados e clique em gerar protocolo.
            </p>
          )}
        </div>
      </div>
    </div>
  );
          }
