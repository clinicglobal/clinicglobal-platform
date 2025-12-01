"use client";
import { useState } from "react";
import { Sparkles, Scan, FileText, Loader2 } from "lucide-react";

export default function AvaliacaoCorporal() {
  const [formData, setFormData] = useState({
    idade: "",
    peso: "",
    altura: "",
    biotipo: "",
    gorduraLocalizada: "",
    flacidez: "",
    celulite: "",
    retenção: "",
    objetivo: "",
  });

  const [gerando, setGerando] = useState(false);
  const [resultado, setResultado] = useState("");

  // Atualizar formulário
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // IA simulada
  async function gerarAvaliacao() {
    setGerando(true);
    setResultado("");

    // Simulação de IA premium
    setTimeout(() => {
      const texto = `
⭐ **Avaliação Corporal Completa – BonitaDerme Clinic Global**

**📌 Perfil da Cliente**
- Idade: ${formData.idade}
- Peso: ${formData.peso}kg
- Altura: ${formData.altura}cm
- Biotipo: ${formData.biotipo}

---

**🔎 Achados Principais**
• Gordura localizada: ${formData.gorduraLocalizada}  
• Flacidez: ${formData.flacidez}  
• Celulite: ${formData.celulite}  
• Retenção: ${formData.retenção}  

---

**🎯 Objetivo Principal**
_${formData.objetivo}_

---

## ⭐ **Protocolo Corporal Personalizado (IA)**

**1️⃣ Gordura Localizada**
- Enzimas lipolíticas (2 a 4 sessões)  
- Ultrassom + Tonificação  
- Radiofrequência multipolar

**2️⃣ Flacidez**
- Bioestimulador de colágeno  
- Radiofrequência  
- Pump 3D (glúteos)

**3️⃣ Celulite**
- Endermologia assistida  
- Dermobrás na área afetada  
- Enzimas drenantes

**4️⃣ Retenção de líquidos**
- Drenagem linfática  
- Pump linfático  
- Orientação hídrica personalizada

---

## 📅 **Cronograma Sugerido (IA)**

**Semana 1:**  
• Drenagem + Radiofrequência  
• Enzimas lipolíticas

**Semana 2:**  
• Pump + Ultra + Drenagem  
• Bioestimulador (se indicado)

**Semana 3:**  
• Endermologia + Drenagem  
• Radiofrequência

**Semana 4:**  
• Revisão + Ultra + Enzimas

---

## ⭐ Sugestão para Vendas
- Pacote Total Premium: **8 a 12 sessões**  
- Resultado médio: **15 a 60 dias**  
- Acompanhamento via sistema BonitaDerme Global 

---

📝 **Observação:** Esta avaliação é gerada por IA e deve ser revisada pelo profissional responsável.

`;
      setResultado(texto);
      setGerando(false);
    }, 1800);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-purple-700 flex items-center gap-2">
        <Scan className="w-8 h-8" /> Avaliação Corporal com IA
      </h1>
      <p className="text-gray-600 mt-1">
        Gere uma avaliação completa e protocolos personalizados para sua cliente.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        {/* FORMULÁRIO */}
        <div className="bg-white shadow-xl rounded-xl p-6 border border-purple-100">
          <h2 className="text-xl font-semibold mb-4 flex gap-2">
            <FileText /> Informações da cliente
          </h2>

          {/* CAMPOS */}
          {[
            { name: "idade", label: "Idade" },
            { name: "peso", label: "Peso (kg)" },
            { name: "altura", label: "Altura (cm)" },
            { name: "biotipo", label: "Biotipo corporal" },
            { name: "gorduraLocalizada", label: "Gordura localizada" },
            { name: "flacidez", label: "Flacidez" },
            { name: "celulite", label: "Celulite" },
            { name: "retenção", label: "Retenção de líquidos" },
            { name: "objetivo", label: "Objetivo principal" },
          ].map((campo) => (
            <div key={campo.name} className="mb-4">
              <label className="font-medium text-gray-700">{campo.label}</label>
              <input
                name={campo.name}
                value={formData[campo.name]}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg mt-1"
              />
            </div>
          ))}

          {/* BOTÃO */}
          <button
            onClick={gerarAvaliacao}
            disabled={gerando}
            className="w-full mt-4 bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-lg font-semibold flex justify-center gap-2"
          >
            {gerando ? (
              <>
                <Loader2 className="animate-spin" /> Gerando avaliação...
              </>
            ) : (
              <>
                <Sparkles /> Gerar Avaliação com IA
              </>
            )}
          </button>
        </div>

        {/* RESULTADO */}
        <div className="bg-white shadow-xl rounded-xl p-6 border border-purple-100">
          <h2 className="text-xl font-semibold mb-4">📄 Resultado da Avaliação</h2>

          {resultado ? (
            <pre className="whitespace-pre-wrap text-sm leading-relaxed">
              {resultado}
            </pre>
          ) : (
            <p className="text-gray-400">
              Preencha os dados e clique em <strong>Gerar Avaliação</strong>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
